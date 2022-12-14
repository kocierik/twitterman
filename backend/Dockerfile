# FROM node:alpine
# WORKDIR /app
# COPY client/TwitterMan/* /app/
# RUN npm install --force
# COPY . .
# EXPOSE 5173
# CMD ["npm", "run", "dev"]

# FROM golang:alpine
# 
# COPY . ./app
# WORKDIR ./app
# RUN mkdir -p /data/db
# WORKDIR ./server
# RUN go mod tidy
# EXPOSE 8080 27017
# CMD ["sh", "../run.sh"]

# syntax=docker/dockerfile:1

# FROM golang:1.18-alpine
# 
# WORKDIR /app
# 
# COPY twitterman-backend ./
# RUN go mod tidy
# 
# RUN go build -o twitterman-backend
# 
# EXPOSE 8080
# 
# CMD [ "/app/twitterman-backend" ]
FROM golang:1.18-bullseye as builder

RUN go install golang.org/dl/go1.18@latest \
    && go1.18 download

WORKDIR /build

COPY . .

RUN CGO_ENABLED=0 GOOS=linux GOARCH=amd64 GOAMD64=v3 go build -o ./app -tags timetzdata -trimpath .

FROM gcr.io/distroless/base-debian11

COPY --from=builder /build/app /app

ENTRYPOINT ["/app"]

