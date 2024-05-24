<!--  Networks -->

docker exec -it a7146eb05f53 sh



docker network create my_bridge_network
docker network ls

docker run -d --name testbackend  --network my_bridge_network testbackend



docker run  -p 8080:8080 -d --name testfrontend --network my_bridge_network testfrontend


1. Pods -> smallest deployment units.-> containers
 kubectl get pods

 kubectl delete pod pod-id

 kubectl apply -f testfrontend.yaml

// tag the images first
docker tag testfrontend:latest sameerbhat/testfrontend:latest
docker tag testbackend:latest sameerbhat/testbackend:latest

// then push to dockerhub
docker push sameerbhat/testfrontend:latest
docker push sameerbhat/testbackend:latest