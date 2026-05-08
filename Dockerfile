FROM python:3.10-slim

# Install system dependencies (Node.js, npm, git)
RUN apt-get update && apt-get install -y nodejs npm git

WORKDIR /app

# Copy the entire workspace
COPY . /app

# Install Python dependencies
# There is no requirements.txt, so we install the ones used in app.py
RUN pip install flask flask-cors requests openai json_repair

# Ensure the sandbox directory has write permissions
RUN mkdir -p /app/sandbox && chmod -R 777 /app/sandbox

# Set working directory to where app.py lives
WORKDIR /app/info_gathering

# Set environment variables
ENV FLASK_APP=app.py

# Expose port for Hugging Face Spaces (7860)
EXPOSE 7860

# Run Flask on the correct port
CMD ["flask", "run", "--host=0.0.0.0", "--port=7860"]
