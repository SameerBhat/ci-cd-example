npm run build
docker build -t testfrontend .

docker run  -d -p 8081:8081 testfrontend

docker tag testfrontend:latest  sameerbhat/frontend:latest
docker push sameerbhat/frontend:latest

node /app/todos.ts