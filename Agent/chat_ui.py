import streamlit as st
import tempfile
import os
from supervisor_graph import supervisor
import re

st.set_page_config(page_title="Learnify", page_icon="📚", layout="centered")
st.title("Learnify (dev. v0.5)")

st.markdown("### Adherence to Multi-Agentic Flow")

import re

def extract_main_content(response: str):


    # ✅ Step 1: Remove the first instructional <think>...</think> block (if present)
    response = re.sub(r"^\s*<think>.*?</think>\s*", "", response, count=1, flags=re.DOTALL)

    # ✅ Step 2: Find everything between <think> and the next </think> (reasoning)
    reasoning_match = re.search(r"<think>(.*?)</think>", response, flags=re.DOTALL)

    if reasoning_match:
        reasoning_content = reasoning_match.group(1).strip()  # Extract reasoning text
        response = response[reasoning_match.end():]  # Everything after </think> is response
    else:
        reasoning_content = "No reasoning provided."

    # ✅ Step 3: Ensure markdown_content contains the final clean response
    markdown_content = response.strip()

    return markdown_content, reasoning_content



# User input box
user_input = st.text_area("🔍 Ask a question:", height=100)

# File uploader
uploaded_file = st.file_uploader("📂 Upload a PDF or an Image (JPG, PNG)", type=["pdf", "jpg", "jpeg", "png"])

if st.button("Submit"):
    agent_used = None
    execution_path = []

    if user_input or uploaded_file:
        with st.spinner("Routing to the appropriate agent..."):
            try:
                # Handle file uploads
                if uploaded_file:
                    temp_file_path = os.path.join(tempfile.gettempdir(), uploaded_file.name)
                    with open(temp_file_path, "wb") as f:
                        f.write(uploaded_file.read())
                    query_or_file = {"file_path": temp_file_path}
                else:
                    query_or_file = user_input

                # Invoke LangGraph Supervisor
                response, agent_used, execution_path = supervisor.run(query_or_file)

                print("📝 RAW Response from Agent:", response)
                print("🔄 Activated Nodes:", execution_path)

                # Extract content for UI display
                final_answer, reasoning_content = extract_main_content(response)

                # ✅ Show Final Answer
                st.markdown("### 📝 Answer (with Reasoning):")
                st.markdown(f"💡 {final_answer}", unsafe_allow_html=True)

                # ✅ Show Agent Used
                st.success(f"✅ Query processed by: {agent_used}")

                # ✅ Show Execution Flow
                st.markdown("### 🔄 Activated Nodes:")
                for step in execution_path:
                    st.markdown(f"- ✅ `{step}` activated.")

            except Exception as e:
                st.error(f"⚠️ Error processing request: {str(e)}")