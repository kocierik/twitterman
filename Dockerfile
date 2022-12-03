# FROM node:alpine
# WORKDIR /app
# COPY client/TwitterMan/* /app/
# RUN npm install --force
# COPY . .
# EXPOSE 5173
# CMD ["npm", "run", "dev"]

FROM golang:alpine

RUN echo 'http://dl-cdn.alpinelinux.org/alpine/v3.6/main' >> /etc/apk/repositories
RUN echo 'http://dl-cdn.alpinelinux.org/alpine/v3.6/community' >> /etc/apk/repositories
RUN apk update
RUN apk add --no-cache mongodb
RUN apk add --no-cache mongodb-tools

COPY . ./app
WORKDIR ./app
RUN mkdir -p /data/db
WORKDIR ./server
RUN go mod tidy
EXPOSE 8080 27017
CMD ["sh", "../run.sh"]