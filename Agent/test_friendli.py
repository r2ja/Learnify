from friendli_llm import FriendliAI

friendli = FriendliAI()

test_prompt = "What is recursion in C++?"

print("\n🔍 Sending test prompt to Friendli AI...")
response = friendli._call(test_prompt)

print("\n📝 Response from Friendli AI:")
print(response)
