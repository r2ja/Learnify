# Learnify: AI-Powered Personalized Learning Platform

## Overview
Learnify is an AI-driven educational platform designed to transform learning by identifying individual learning styles and delivering personalized educational materials. The platform utilizes advanced AI technologies, including large language models (LLMs), to analyze student preferences through diagnostic assessments and generate tailored learning content such as text, images, and videos. Learnify aims to address the limitations of traditional education systems by offering engaging, efficient, and effective personalized learning experiences.

## Key Features

1. **Adaptive Learning Assessment**
   - Diagnoses a student’s preferred learning style (visual, auditory, or kinesthetic).
   - Uses this data to optimize the delivery method for better comprehension and retention.

2. **Personalized Content Generation**
   - Leverages advanced LLMs to dynamically create learning materials based on individual cognitive preferences.
   - Incorporates Retrieval-Augmented Generation (RAG) to deliver accurate and course-specific content.

3. **Dynamic Learning Pathways**
   - Creates personalized learning journeys that adapt to student progress and feedback.
   - Employs Context-Aware Generation (CAG) to retain and utilize user-specific insights, ensuring continuity and engagement.

4. **Intelligent Problem-Solving**
   - Features Chain of Thought reasoning for step-by-step explanations of complex problems.
   - Includes code interpretation capabilities for teaching mathematical and computational concepts interactively.

5. **Interactive Tutoring**
   - Allows real-time question-and-answer interactions with AI, simulating a tutor’s role for guidance and clarification.

## Diagnostic Test Model
The diagnostic test model, used to analyze and determine a student’s learning style, is hosted on Hugging Face. Access it via the following link:

[FS Diagnostic Model on Hugging Face](https://huggingface.co/r4jaa/FSDiagnosticModel)

## Technology Stack
- **Model Hosting:** [Amazon Bedrock](https://aws.amazon.com/bedrock/) for scalable and efficient hosting of LLMs.
- **Database Management:** [Amazon RDS (PostgreSQL)](https://aws.amazon.com/rds/) for secure and structured data storage.
- **Frontend Framework:** [Next.js](https://nextjs.org/) for creating an engaging and responsive user interface.

## Installation and Setup

### Prerequisites
- Node.js (v16 or higher)
- PostgreSQL
- AWS account for deploying services

### Steps
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd learnify
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure the environment variables:
   - Create a `.env` file in the root directory.
   - Add the required variables:
     ```env
     DATABASE_URL=<your-postgresql-database-url>
     MODEL_API_URL=https://huggingface.co/r4jaa/FSDiagnosticModel
     AWS_ACCESS_KEY_ID=<your-aws-access-key>
     AWS_SECRET_ACCESS_KEY=<your-aws-secret-key>
     ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Access the application at `http://localhost:3000`.

## Contributing
We welcome contributions to enhance Learnify. If you would like to report issues, suggest features, or contribute code:
1. Fork the repository.
2. Create a new branch for your changes:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Commit your changes and push to the branch:
   ```bash
   git commit -m "Add your message here"
   git push origin feature/your-feature-name
   ```
4. Open a pull request for review.

## License
This project is licensed under the MIT License. See the LICENSE file for details.

## Contact
For inquiries or support, please reach out to the Learnify team via email at [support@learnify.com](mailto:support@learnify.com).

---
Learnify: Empowering students with AI-driven personalized learning for a brighter educational future.

