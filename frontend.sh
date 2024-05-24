cd frontend;
npm install;
npm run build;
docker build -t testfrontend .;
docker tag testfrontend:latest  sameerbhat/testfrontend:latest;
docker push sameerbhat/testfrontend:latest;