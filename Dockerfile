FROM node
WORKDIR /client/twitterman/
COPY client/twitterman/package.json .
RUN npm install --force
COPY . .
EXPOSE 5173
CMD ["npm", "run", "dev"]

