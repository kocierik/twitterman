# 1. Base image
FROM python:latest

WORKDIR /src

# 2. Copy files
COPY . .

RUN curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh -s -- -y
ENV PATH="/root/.cargo/bin:${PATH}"

RUN pip install --upgrade pip
# 3. Install dependencies
RUN pip install -r requirements.txt

ENTRYPOINT [ "python3", "main.py" ]