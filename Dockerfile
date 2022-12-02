FROM node
WORKDIR /app
COPY client/TwitterMan/* .
RUN npm install --force
COPY . .
EXPOSE 5173
CMD ["npm", "run", "dev"]

