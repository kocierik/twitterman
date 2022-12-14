FROM ubuntu:latest
RUN mkdir app
WORKDIR /app
COPY . /app
RUN apt-get update
RUN apt-get install curl -y
RUN apt-get install python3 -y
RUN apt-get install python3-pip -y
RUN curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh -s -- -y
ENV PATH="/root/.cargo/bin:${PATH}"
RUN pip install -U -r requirements.txt
EXPOSE 5556
ENTRYPOINT ["python"]
CMD ["main.py"]
