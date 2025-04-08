import os
import requests
from langchain.llms.base import LLM
from typing import Optional, List, Mapping, Any, ClassVar
from dotenv import load_dotenv

load_dotenv()

class FriendliAI(LLM):
    max_tokens: int = 2048
    top_p: float = 0.9
    temperature: float = 0.6
    hf_api_token: str = os.getenv("HF_API_TOKEN")
    # Updated API URL to include the proper path for chat completions.
    API_URL: str = "https://r057vgbt5tvc0592.us-east-1.aws.endpoints.huggingface.cloud/v1/chat/completions"

    SYSTEM_PROMPT: ClassVar[str] = (
        "You are a highly intelligent AI assistant designed to be a great teacher. "
    )

    def _call(self, prompt: str, stop: Optional[List[str]] = None) -> str:
        # Prepare the messages payload as expected by the chat completions API.
        messages = [
            {"role": "system", "content": self.SYSTEM_PROMPT},
            {"role": "user", "content": prompt}
        ]
        
        payload = {
            "model": "tgi",  # adjust the model if needed
            "messages": messages,
            "top_p": self.top_p,
            "temperature": self.temperature,
            "max_tokens": self.max_tokens,
            "stream": False
        }
        
        headers = {
            "Authorization": f"Bearer {self.hf_api_token}",
            "Content-Type": "application/json"
        }
        
        response = requests.post(self.API_URL, headers=headers, json=payload)
        response.raise_for_status()
        data = response.json()
        
        # Extract the message content from the response.
        if "choices" in data and len(data["choices"]) > 0:
            # The chat API returns a dict under "message" in each choice.
            return data["choices"][0]["message"]["content"].strip()
        else:
            return "Error: Unexpected response format."

    def invoke(self, prompt: str) -> str:
        return self._call(prompt)

    @property
    def _identifying_params(self) -> Mapping[str, Any]:
        return {"model": "FriendliAI", "max_tokens": self.max_tokens, "top_p": self.top_p}

    @property
    def _llm_type(self) -> str:
        return "friendli-ai"
