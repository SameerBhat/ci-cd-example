FROM node:latest

WORKDIR /app
COPY package.json /app/package.json
RUN npm install

COPY todos.js /app/todos.ts

EXPOSE 8080

ENTRYPOINT [ "node", "todos.ts" ]

