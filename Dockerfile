FROM node
WORKDIR /client/twitterman/
COPY client/Twitterman/package.json .
RUN npm install --force
COPY . .
EXPOSE 5173
CMD ["npm", "run", "dev"]

