cd backend;
npm install;
npm run build;
docker build -t testbackend .;
docker tag testbackend:latest  sameerbhat/testbackend:latest;
docker push sameerbhat/testbackend:latest;