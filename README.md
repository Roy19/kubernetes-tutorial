Build the docker image first:
docker build <image tag> ./nodeService

To run the app:
1. Deploy the Deployment
kubectl apply -f ./service.yaml

2. Deploy the Node port Service
kubectl apply -f ./nodeportdeploy.yaml

3. Get the public IP of the cluster
kubectl cluster-info

4. Get the nodeport of the service
kubectl describe service <service name>

5. Make a GET request to http://publicip:nodeport/hello