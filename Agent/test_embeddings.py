from agent import get_embedding

sample_text = "What is recursion?"
embedding = get_embedding(sample_text)

print(f"Embedding shape: {len(embedding)}")  # ✅ Should print: 384
print(f"First 10 values: {embedding[:10]}")  # Preview first 10 numbers
