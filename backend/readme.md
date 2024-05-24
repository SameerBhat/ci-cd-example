SETPS TO RUN THE BACKEND
npm install

npm run build
docker build -t testbackend .

docker run -d -p 3000:3000 --name testbackend testbackend

docker tag testbackend:latest  sameerbhat/testbackend:latest

docker push sameerbhat/testbackend:latest

docker exec -it testbackend sh