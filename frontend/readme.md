npm run build
docker build -t testfrontend .

docker run  -d -p 8081:8081 testfrontend

node /app/todos.ts