docker build -t testbackend .

docker run -d -p 3000:3000 --name testbackend testbackend

docker exec -it testbackend sh