import os
from langgraph.graph import StateGraph, START, END
from typing import TypedDict, Union
from agent import get_final_answer, is_cs101_domain
from multimodal_agent import multimodal_agent
from quiz_agent import generate_quiz_or_assignment

# Define the state structure for LangGraph
class AgentState(TypedDict):
    input: Union[str, dict]
    response: str
    agent_used: str
    visited_nodes: list[str]  # Track activated nodes

class SupervisorGraph:
    """
    LangGraph-based supervisor to dynamically route queries.
    """

    def __init__(self):
        self.graph = StateGraph(AgentState)

        # Add Nodes
        self.graph.add_node("determine_route", self.determine_route)
        self.graph.add_node("cs101_agent", self.cs101_agent)
        self.graph.add_node("multimodal_agent", self.multimodal_agent)
        # NEW: Add the quiz agent node
        self.graph.add_node("quiz_agent", self.quiz_agent)

        # Set entry point
        self.graph.add_edge(START, "determine_route")

        # Add conditional routing
        self.graph.add_conditional_edges("determine_route", self.route_decision)

        # Set finish points
        self.graph.set_finish_point("cs101_agent")
        self.graph.set_finish_point("multimodal_agent")
        self.graph.set_finish_point("quiz_agent")

        # Compile the graph
        self.executor = self.graph.compile()

    def determine_route(self, state: AgentState) -> AgentState:
        """
        Routes input to the correct agent based on input type.
        """
        state["visited_nodes"].append("determine_route")
        query_or_file = state["input"]

        if isinstance(query_or_file, str):  # Text Query
            state["route"] = "text"
        elif isinstance(query_or_file, dict):  # File Upload (PDF/Image)
            state["route"] = "file"
        else:
            state["route"] = "unknown"

        return state

    def route_decision(self, state: AgentState):
        """
        Determines whether to send input to text or file processing,
        and further checks for quiz/assignment requests.
        """
        route = state.get("route")
        if route == "text":
            # Check if the text query seems to be a quiz/assignment request.
            query_lower = state["input"].lower()
            if any(keyword in query_lower for keyword in ["quiz", "assignment", "test", "exam"]):
                # Route to the quiz agent.
                return "quiz_agent"
            else:
                return "cs101_agent"
        elif route == "file":
            return "multimodal_agent"
        return END

    def cs101_agent(self, state: AgentState) -> AgentState:
        """Processes text queries via the CS101 Agent, with domain guardrails."""
        state["visited_nodes"].append("cs101_agent")
        user_query = state["input"]
        user_id = state.get("user_id", "default_user")

        # Check if the query is relevant to CS101
        if not is_cs101_domain(user_query):
            state["response"] = "❌ This question is outside the scope of CS101. Please ask only relevant CS101 topics."
            state["agent_used"] = "CS101 Agent (Query Rejected)"
            return state

        # Process valid queries via the existing CS101 agent.
        response = get_final_answer(user_query, user_id)
        state["response"] = response
        state["agent_used"] = "CS101 Agent"
        return state

    def multimodal_agent(self, state: AgentState) -> AgentState:
        """Processes files via the Multimodal Agent and forwards extracted text to CS101 Agent."""
        state["visited_nodes"].append("multimodal_agent")
        file_data = state["input"]
        extracted_text = multimodal_agent.process_file(file_data["file_path"])
        state["input"] = extracted_text

        # Forward extracted text to the CS101 Agent.
        return self.cs101_agent(state)

    def quiz_agent(self, state: AgentState) -> AgentState:
        """Processes quiz/assignment requests using the Quiz Agent."""
        state["visited_nodes"].append("quiz_agent")
        user_query = state["input"]
        user_id = state.get("user_id", "default_user")
        
        # Call the new quiz/assignment generation function.
        response = generate_quiz_or_assignment(user_query, user_id)
        state["response"] = response
        state["agent_used"] = "Quiz Agent"
        return state

    def run(self, query_or_file, user_id="default_user"):
        """
        Runs the supervisor's decision-making flow and returns the final response and execution steps.
        """
        initial_state = {"input": query_or_file, "user_id": user_id, "visited_nodes": []}
        final_state = self.executor.invoke(initial_state)
        return final_state["response"], final_state["agent_used"], final_state["visited_nodes"]

# Initialize LangGraph-powered Supervisor
supervisor = SupervisorGraph()
