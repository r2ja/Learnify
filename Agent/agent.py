import os
import requests
import time
import numpy as np
from dotenv import load_dotenv
from langchain_pinecone import PineconeVectorStore
from pinecone import Pinecone as PineconeClient
from friendli_llm import FriendliAI
from user_profile import get_user_profile

load_dotenv()

friendli_llm = FriendliAI()

api_key = os.getenv("PINECONE_API_KEY")
if not api_key:
    raise ValueError("PINECONE_API_KEY is not set.")

pc = PineconeClient(api_key=api_key)
index_name = "cs101-rag"
index = pc.Index(index_name)

HF_API_TOKEN = os.getenv("HF_API_TOKEN")
if not HF_API_TOKEN:
    raise ValueError("HF_API_TOKEN is not set.")
HF_API_URL = "https://api-inference.huggingface.co/pipeline/feature-extraction/sentence-transformers/all-MiniLM-L6-v2"

def get_embedding(text, max_retries=5, retry_delay=10):
    """
    Fetches text embedding from Hugging Face API.
    Handles both new and old response formats.
    """
    headers = {"Authorization": f"Bearer {HF_API_TOKEN}"}

    for attempt in range(max_retries):
        response = requests.post(HF_API_URL, headers=headers, json={"inputs": text})

        if response.status_code == 200:
            try:
                embedding = response.json()
                
                # Check if response is directly a vector (new format)
                if isinstance(embedding, list) and all(isinstance(num, float) for num in embedding):
                    return embedding  
                
                # Check if response is nested (old format)
                if isinstance(embedding, list) and len(embedding) > 0 and isinstance(embedding[0], list):
                    return embedding[0]
                
                raise ValueError(f"Unexpected response format from HF API: {embedding}")

            except Exception as e:
                raise Exception(f"Error parsing HF API response: {str(e)}")

        elif response.status_code == 503:
            time.sleep(retry_delay)  # wait and retry if server is overloaded

    raise Exception("Max retries reached for embedding request.")

class HFEmbeddings:
    def embed_query(self, text: str):
        return get_embedding(text)

    def embed_documents(self, texts: list[str]):
        return [get_embedding(t) for t in texts]

embedding_instance = HFEmbeddings()
vector_store = PineconeVectorStore(index, embedding_instance, "text")

def retrieve_rag_data(query: str) -> str:
    results = vector_store.similarity_search(query, k=2)
    return "\n\n".join([doc.page_content for doc in results]) if results else "No relevant data found."

def is_cs101_domain(query: str) -> bool:
    """
    Checks if the query is within the domain of CS101 using keyword matching.
    You can extend or replace this with a more sophisticated check if needed.
    """
    cs101_keywords = [
        "cs101", "computer science", "programming", "data structure", "algorithms",
        "python", "c++", "java", "software", "computing", "binary", "code",
        "fundamentals of programing", "recursion", "functions", "prototype functions"
    ]
    query_lower = query.lower()
    for keyword in cs101_keywords:
        if keyword in query_lower:
            return True
    return False

def get_final_answer(user_query: str, user_id: str) -> str:
    # 🚨 Check if the query is within the CS101 domain
    if not is_cs101_domain(user_query):
        return "❌ This question is outside the scope of CS101. Please ask only relevant CS101 topics."

    # Retrieve user profile
    user_profile = get_user_profile(user_id)
    learning_style = f"Active/Reflective: {user_profile['active_reflective']}, " \
                     f"Sensing/Intuitive: {user_profile['sensing_intuitive']}, " \
                     f"Visual/Verbal: {user_profile['visual_verbal']}, " \
                     f"Sequential/Global: {user_profile['sequential_global']}"

    retrieved_docs = retrieve_rag_data(user_query)

    full_prompt = f"""
    User Query: {user_query}

    User Learning Style: {learning_style}

    Context from Knowledge Base:
    {retrieved_docs}

    <think>
    Answer the user's question based on the knowledge retrieved, tailoring the explanation to their learning style.
    </think>
    """

    print("🚀 Sending this prompt to FriendliAI:\n", full_prompt)
    response = friendli_llm.invoke(full_prompt)
    print("📝 FriendliAI Response:", response)

    return response
