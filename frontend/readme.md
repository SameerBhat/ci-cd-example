docker build -t testfrontend .

docker run -p 8080:80 testfrontend

node /app/todos.ts