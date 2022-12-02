FROM node
WORKDIR /app
COPY client/TwitterMan/* /app/
RUN npm install --force
COPY . .
EXPOSE 5173
CMD ["npm", "run", "dev"]

