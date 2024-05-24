FROM node:latest

WORKDIR /app

COPY package.json /app

COPY dist/server.js /app/server.js

RUN npm install


EXPOSE 3000

ENTRYPOINT ["node", "server.js"]