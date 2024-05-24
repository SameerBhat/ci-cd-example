FROM node:latest

WORKDIR /app

COPY package.json /app

COPY server.js /app

RUN npm install


EXPOSE 3000

ENTRYPOINT ["node", "server.ts"]