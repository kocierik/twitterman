#FROM python:3.10.8
#RUN mkdir app
#WORKDIR /app
#COPY requirements.txt requirements.txt
#COPY main.py main.py
#RUN pip install flask
#RUN pip install flask-cors
#RUN pip install python-polyglot
#RUN pip install vaderSentiment
#RUN pip install pycld2
#RUN pip install pyicu
#RUN python3 -m pip install --upgrade pip setuptools wheel
#RUN curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh -s -- -y
#ENV PATH="/root/.cargo/bin:${PATH}"
#RUN pip install feel-it
#ENTRYPOINT ["python3"]
#CMD ["main.py"]
FROM ubuntu:latest
RUN mkdir app
WORKDIR /app
COPY . /app
RUN apt-get update
RUN apt-get install curl -y
RUN apt install software-properties-common -y
RUN apt-get install python3 python3-pip -y
RUN apt-get install pkg-config libicu-dev -y
RUN curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh -s -- -y
ENV PATH="/root/.cargo/bin:${PATH}"
RUN python3 -m pip install --upgrade pip setuptools wheel
RUN pip install -r requirements.txt
EXPOSE 5556
ENTRYPOINT ["python3"]
CMD ["main.py"]
