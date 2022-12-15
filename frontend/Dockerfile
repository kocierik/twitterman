FROM node:19-alpine AS builder

WORKDIR /app

COPY . .

RUN npm install --force

RUN npm run build

FROM nginx:alpine

WORKDIR /usr/share/nginx/html

RUN rm -rf *

COPY --from=builder /app/dist .

EXPOSE 5137

ENTRYPOINT ["nginx", "-g", "daemon off;"]