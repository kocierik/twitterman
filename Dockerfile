# FROM node:alpine
# WORKDIR /app
# COPY client/TwitterMan/* /app/
# RUN npm install --force
# COPY . .
# EXPOSE 5173
# CMD ["npm", "run", "dev"]

FROM alpine:edge

RUN apk add --no-cache mongodb

VOLUME /data/db
EXPOSE 27017 28017

COPY run.sh /root
ENTRYPOINT [ "/root/run.sh" ]
CMD [ "mongod", "--bind_ip", "0.0.0.0" ]