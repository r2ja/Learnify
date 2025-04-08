# quiz_agent.py
import os
from friendli_llm import FriendliAI
from agent import is_cs101_domain

# Initialize the FriendliLLM instance
friendli_llm = FriendliAI()

def generate_quiz_or_assignment(user_query: str, user_id: str = "default_user") -> str:
    """
    Generates a quiz or assignment exclusively for CS101 topics.
    Guard rails ensure that the request is relevant to CS101.
    """
    if not is_cs101_domain(user_query):
        return "❌ This quiz/assignment request is outside the scope of CS101. Please ask only relevant CS101 topics."
    
    # Compose a prompt tailored for quiz/assignment generation.
    full_prompt = f"""
User Request for Quiz/Assignment: {user_query}

<think>
Generate a comprehensive quiz or assignment based on CS101 course material. 
Include a variety of question types (multiple-choice, short answer, true/false) with answers or answer keys as appropriate.
Ensure the content aligns with the CS101 learning objectives.
</think>
"""
    # Invoke the LLM using the FriendliAI instance.
    response = friendli_llm.invoke(full_prompt)
    return response
