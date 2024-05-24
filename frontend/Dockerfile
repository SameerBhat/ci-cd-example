FROM node:latest

WORKDIR /app
COPY package.json /app/package.json
RUN npm install

COPY dist/todos.js /app/todos.js

EXPOSE 8081

ENTRYPOINT [ "node", "todos.js" ]

