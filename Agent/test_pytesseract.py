import pytesseract
from PIL import Image

# Test image with text
test_image_path = "test.png"  # Provide a path to a sample image with text

try:
    # Open Image
    img = Image.open(test_image_path)

    # Perform OCR
    extracted_text = pytesseract.image_to_string(img)

    print("\n✅ Tesseract OCR Test Successful! Extracted Text:\n")
    print(extracted_text)

except pytesseract.pytesseract.TesseractNotFoundError:
    print("\n❌ ERROR: Tesseract is not installed or not found in PATH.")
    print("🔹 Install it using:")
    print("   - Ubuntu: `sudo apt install tesseract-ocr`")
    print("   - MacOS: `brew install tesseract`")
    print("   - Windows: Download from https://github.com/UB-Mannheim/tesseract/wiki")
    print("   - Then, add it to PATH.")

except Exception as e:
    print(f"\n❌ An unexpected error occurred: {e}")
