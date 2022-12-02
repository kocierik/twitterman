FROM node
WORKDIR /app
COPY client/Twitterman/package.json .
RUN npm install --force
COPY . .
EXPOSE 5173
CMD ["npm", "run", "dev"]

