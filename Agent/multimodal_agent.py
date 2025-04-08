import os
import fitz  # PyMuPDF for PDF text extraction
import pytesseract  # OCR for images
from PIL import Image
# We still import get_final_answer in case you need it elsewhere, but we won't call it here.
from agent import get_final_answer  
import tempfile

class MultimodalAgent:
    """
    The Multimodal Agent handles image and PDF inputs by extracting text
    and passing it to the domain-specific agent for processing.
    """

    def process_file(self, file_path: str):
        """
        Detects file type (PDF/Image) and extracts text accordingly.
        """
        if file_path.lower().endswith(".pdf"):
            extracted_text = self.extract_text_from_pdf(file_path)
        elif file_path.lower().endswith((".png", ".jpg", ".jpeg")):
            extracted_text = self.extract_text_from_image(file_path)
        else:
            return "Unsupported file format. Please upload a PDF or an image."

        # If text extraction is successful, simply return the extracted text.
        if extracted_text.strip():
            print("📄 Extracted Text:", extracted_text[:500])  # Debugging (show first 500 chars)
            return extracted_text
        return "No readable text found in the file."

    def extract_text_from_pdf(self, file_path: str):
        """
        Extracts text from a PDF using PyMuPDF.
        """
        try:
            doc = fitz.open(file_path)
            text = "\n".join([page.get_text("text") for page in doc])
            return text
        except Exception as e:
            return f"Error extracting text from PDF: {str(e)}"

    def extract_text_from_image(self, file_path: str):
        """
        Extracts text from an image using Tesseract OCR.
        """
        try:
            image = Image.open(file_path)
            text = pytesseract.image_to_string(image)
            return text
        except Exception as e:
            return f"Error extracting text from image: {str(e)}"

# Initialize the Multimodal Agent
multimodal_agent = MultimodalAgent()
