from agent import get_final_answer

def main():
    print("\nCS101 Agent is ready! Type 'exit' to quit.")
    while True:
        query = input("\nYou: ")
        if query.lower() == "exit":
            print("Goodbye! 👋")
            break
        response = get_final_answer(query)
        print("\nAgent:", response)

if __name__ == "__main__":
    main()
