# Docker

## Docker basic command
```
docker ps
socker ps -a
docker ps -q (return id of running container)
docker ps -aq(return id of all container)
docker container rm $id
docker stop $id
docker run nginx:1.14 --name webapp
docker run -d nginx (run nginx in detached mode)
docker attach $id

docker images
docker images -q
docker rmi $imageId
docker pull image name
docker logs containerName
Docker inspect containerID

	
docker stop containerID - stop the running process (may give time to save etc )
docker kill containerID - kill the running process
```

* Run the command docker ps and look under the PORTS column. Ports on the right(after ->) are exposed on the container.
```
	0.0.0.0:3456->3456/tcp, 0.0.0.0:38080->80/tcp
	two ports of container(3456,80) is mapped with localhost
```

* Run an instance of kodekloud/simple-webapp with a tag blue and map port 8080 on the container to 38282 on the host.
```
	docker run -p 38282:8080 kodekloud/simple-webapp:blue
```


* Run a container named blue-app using image kodekloud/simple-webapp and set the environment variable APP_COLOR to blue. Make the application available on port 38282 on the host. The application listens on port 8080.
```
	docker run -p 38282:8080 --name blue-app -e APP_COLOR=blue -d kodekloud/simple-webapp

```

* docker container prune
```
docker system prune -a
  -all stopped containers
  - all networks not used by at least one container
  - all images without at least one container associated to them
  - all build cache
```
* docker system prune
```
  - all stopped container
  - all networks not used by at least one container
  - all dangling images
  - all dangling build cache
```



* Running another program inside running container
```
	docker exec -it containerID command
		-i -> for stdin
		-t -> for well formated output
		
docker build -t dockerid/projectname:version codeContext
```

* We can update a container and by adding some program feature and then create a new image to later use
```
	docker run -it alpine sh
	apk -add update-redis
	
	*Using second command window to take snapshot of running image*
	docker commit -c 'CMD ["redis-server"]' containerID
		This will return us new id of new image.
		-c to add default command on start up
```		
* Creating docker file
```
	name of docker file should be - Dockerfile
	Content : 
		FROM node:alpine
		WORKDIR /usr/app    *Now all path in container that we will use after this will be relative to /usr/app*
		COPY ./ ./      *path to copy from(relative)     path in container*
		RUN npm insall
		CMD ["npm","start"]

	To run the container we need to map the local port to container running port
	docker run -plocalhostport:portInWhichCcodeIsRunning imageID
	After making the work dir if we run below command in running container we will land on /usr/app. Means setting work directory will affect all future command in the container relative to its path	
		command - docker exec -it dockerID sh
		
		
	The above docker file will install npm depencies everytime we make changes in js file, but we do not want to install unless there is change in package.json
		content to resolve this issue: 
		FROM node:alpine
		WORKDIR: /usr/app
		COPY ./package.json ./
		RUN npm install
		COPY ./ ./
		CMD ["npm","start"]
		
		* since package.json is not changed, it is in cache and this step is skipped. all steps after the changes will execute again*
```		
## Docker Compose:
	
	* Seperate CLI that get installed with docker CLI
	* use to start seperate multiple container at same time
	* automate some of long wind argument we passed with docker run (such as conectivity between containers)
	
```	
	Docker-compose.yml:
		Version:'3'
		Services:
			redis-server:
				image:'redis'
			node-app:
				build .
				ports:
					-"4001:8001"
	In above file we have created two container with name redis-server and node-app. redis-server is built by image redis while node-app by using local dockerfile.
	Later we map localhost port 4001 to contAINER port 8001 in node app
	we can now call redis- server from node by using host name redis-server
```	
	
* Commands: (run from the path of docker compose file)
```
		docker-compose -f stack.yml up
		docker-compose up   *to start satrt compose file*
		docker-compose down *to stop all container*
		
		docker-compose up --build (to rebuild and then run the image)
		docker-compose ps - to get all status of all the container present in current directory yml file
		
```		
* Restart container:
```
		Policies:
			No: Never attempt to restart (by default)
			always:
			on-failure: exit code !=0
			unless-stopped:always restart unless we purposely stopped it (container stop,ctrl+c etc)
			
		yml file for restart:
		Version:'3'
		Services:
			redis-server:
				image:'redis'
			node-app:
				restart:on-failure
				build .
				ports:
					-"4001:8001"
					
					
```
	
## Docker for development:
```
	Docker file for development purpose should be named as Dockerfile.dev.
	to build the file now use - >Docker build -f Dockerfile.dev
	
	If we want to relect the changes in container if we change something in code without rebuild the image we need to map the volume of container with the current project folder.
	
	to do this use below command:
		docker run -p3000:3000 -v ${pwd}:/app imageID   *here it will map the current project directory to /app folder in container*
		
		Normally we delete the node_modules folder from code directory because we are installing dependencies in container and we do not want to copy it first and then install again. 
		In such case node_modules folder is present in container and absent in project folder and if we map everything in container to project folder, node_module will pointing to null and therefore start throwing error. In such case we need to bookmark the folder.
		
		docker run -p3000:3000 -v /app/node_modules -v $(pwd):/app imageID   *here it will map the current project directory to /app folder in container*
```		
* Compose file to run this command:
```
		version:'3'
		services:
			web:
				build:
					context: .
					dockerfile:Dockerfile.dev
				ports:
					- "3000:3000:
				volumes:
					-/app/node/modules
					-.:/app
```
	
* Recently, a bug was introduced with the latest Create React App version that is causing the React app to exit when starting with Docker Compose.
```
		To Resolve this:
			Add stdin_open property to your docker-compose.yml file
			web:
			stdin_open: true
			
		when running react-app using docker use -t to avoid exiting - docker run -it react-app
	
	
	
	If you are using any version of Windows and your React app is not automatically reloading after a code change, you can add this environment variable to your compose file:

		services:
		web:
			environment:
			- CHOKIDAR_USEPOLLING=true
			
			
```	
* We can create another container for executing test cases:
```
		version:'3'
		services:
			web:
				build:
					context: .
					dockerfile:Dockerfile.dev
				ports:
					- "3000:3000:
				volumes:
					-/app/node/modules
					-.:/app
			
			test:
				build:
					context: .
					dockerfile:Dockerfile.dev
				volumes:
					-/app/node/modules
					-.:/app
				command:["npm","run","test"]
```

## Docker for production:

* You->feature Branch-> pull request -> master branch -> Travis CI (run test cases) -> Aws hosting deployment
	
* We need to use multistep process to first run the build with node:alpine as base and then copy the content of build folder to nginx base image.
```
	-----------------------------------------------------------
	FROM node:alpine as builder
	WORKDIR /app
	COPY package.json .
	RUN npm install
	COPY . .
	RUN npm run build
	
	FROM nginx
	COPY --from builder /app/build /usr/share/nginx/html
	----------------------------------------------------------------
	
	
	to run nginx :
		docker run -p8080:80 containerID
	
		*everything in the first phase will be dumped and only build directory will be present in the folder.*
	
	
	
	Travis:
		It is application which helps in testing and deployment.
		Config File : should be named as .travis.yml
		---------------------------------------------------------------
			sudo:required
			services:
				-docker
			before_install:
				-docker build -t someName -f Dockerfile.dev
			script:
				- docker run someName npm run test -- --coverage
				OR
			-script:
				- docker run -e CI=true USERNAME/react-test npm test
		----------------------------------------------------------------------
		
		
		
		This test will return exit code. IN case of no error it will be 0 other wise non-zero number
		
		Due to a change in how the Jest library works with Create React App, we need to make a small modification:

		script:
		- docker run USERNAME/docker-react npm run test -- --coverage
		
		instead should be:
		
		script:
		- docker run -e CI=true USERNAME/docker-react npm run test
		Additionally, you may want to set the following property to the top of your .travis.yml file:
		
		language: generic 
		You can read up on the CI=true variable here:
		
		
```	
		
		
		
## Multicontainer application:
	
*	We have 6 images
*		server - node based app to server the frontend and connect with DB
*		worker - subscribe to DB, once new input comes find its fibbanacci value and store it in redis
*		Front - react based app.
*		postgress- DB
*		Redis - for cache purpose
*		nginx - routing req to fron or backend
```
----------------------------------------------------------------------------------------		
	Doker-compose file:
		version : '3'
		services:
			redis-server:
				image: 'redis'
			postgres:
				image: 'postgres'
				environment:
					- POSTGRES_PASSWORD=postgres_password
			nginx:
				depends_on:
					- api
					- client
				build:
					dockerfile: Dockerfile.dev
					context: ./nginx
				ports:
					- '3050:80'
			api:
				build:
					dockerfile: Dockerfile.dev
					context: ./server
				volumes:
					- /app/node_modules
					- ./server:/app
				environment:
					- CHOKIDAR_USEPOLLING=true
					- REDIS_HOST=redis
					- REDIS_PORT=6379
					- PG_HOST=postgres
					- PG_PORT=5432
					- PG_USER=postgres
					- PG_DATABASE=postgres
					- PG_PASSWORD=postgres_password
			client:
				stdin_open: true
				build:
					dockerfile: Dockerfile.dev
					context: ./client
				volumes:
					- /app/node_modules
					- ./client:/app
			worker:
				build:
					dockerfile: Dockerfile.dev
					context: ./worker
				volumes:
					- /app/node_modules
					- ./worker:/app
				environment:
					- REDIS_HOST=redis
					- REDIS_PORT=6379
-------------------------------------------------------------------------------------------------		
```

* for nginx:

```
		default.conf file:
	--------------------------------------------------------------------------------------	
upstream client {
  server client:3000;
}

upstream api {
  server api:5000;
}

server {
  listen 80;

  location / {
    proxy_pass http://client;
  }

  location /sockjs-node {
    proxy_pass http://client;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection "Upgrade";
  }

  location /api {
    rewrite /api/(.*) /$1 break;
    proxy_pass http://api;
  }
}
	-------------------------------------------------------------------------------
		Dockerfile:
			FROM nginx
			COPY ./default.conf /etc/nginx/conf.d/default.conf
	--------------------------------------------------------------------------------
	
```	




## KUBERNETES:
```
	WHAT: System of running many different container over multiple different machine
	WHY : When you need to run many different containers with many different machine
```	
	
*	The entire idea of kubernetes is that we tell Master the desire state and master runs continously to complete that desire. It pull the image from hub and run the instances.

```	
	IMPERATIVE DEPLOYMENT: DO exactly these steps do arrive at this container setup
	DECLARATIVE DEPLOYMENT:Our container setup should look like this, make it happen
```
	
*	Minikube: Use for managing the VM itself. It creates Kubernetes cluster in your local machine. BTS it will create VM whose sole purpose is to run some container.
*	Kubectl : Use for managing containers in the node(VM). 
	
	
	
	|DOCKER_COMPOSE    													|     KUBERNETES											|
	|-------------------------------------------------------------------|-----------------------------------------------------------|										
	|We can build image from within DC                                  |Kubernetes expect all images to be already built.          |
	|Each entry represents a container we want to create				|Need to have different file to create different OBJECT     |
	|All container created, have networking automatically defined 		|We have to manually setup all networking                   |
	|and they all can access each other as soon as they start           |                                                           |
	
* COMMANDS:
```
	minikube ip   -> to get minikube ip
	
	kubectl apply -f <filename>
	kubectl delete -f <filename>
	kubectl get pods
	kubectl get deployments
	kubectl get services   //port return format->port:nodePort
	kubectl describe objectType objectName
	kubectl logs nameOfPod
	kubectl exec -it nameOfPod sh
	
	kubectl get pods -o wide   // this will give more info of pod
	
	kubectl get storageclass
	kubectl describe storageclass
	kubectl get pvc
	kubectl get pv
	
	*PVC -> persistence volume claim*
```	
* minikube dashboard
```
	in case we are using minikube to run kubernetes, docker cli will connect with local installed docker not docker running in VM (node), to connect the terminal with the node:
		eval $(minikube docker-env)
```
* Types of object in k8s - >(k and 8 letters and s)

**	-pod
**	-service
**	-StatefulSet
**	-ReplicaController
**	-Secrets
	
**	apiVersion:v1
```
	-componentStatus
	-configMap
	-Endpoints
	-Event
	-Namespace
	-Pod
	-service
```	
**	apiVersion:apps/v1
```
	-StatefulSet
	-Conttroller Revision
	-Deployment
```	
	
	
* PODS:
	* We cannot run container directly inside a VM(Node), We need to create a pod first and then we can run container inside it. We use multiple container inside a pod, only if they are very tightly coupled. We normally use single container for single POD
	
* SERVICE:
	* service can be of many types:
	 * -ClusterIP -> for internal access (communication between different component)
	 * -NodePort  -> Expose the container for outside world (use only for development server)
	 * -LoadBalancer -> legacy system to manage request
	 * -Ingressb -> better than load balancer
	 
	 ** we will use nginx ingress and not kubernete ingress
	 ingress config -> ingress controller -> something that accept the incoming request
		
	 
	** WE CAN USE SINGLE FILE FOR MULTIPLE OBJECTS BY DIVIDING TWO CONFIG BY THREE DASH 
	```
		config1
		---
		config2
	```
	
* Example yaml file
```
	=================================================================
	service.yaml:
	apiVersion: v1
	kind: service
	metadata:
		name: client_node_port             //if we pass new data with same name and kind, master will update the config for it otherwise create a new one
	spec:
		type: NodePort
		ports:
			- port: 3050
			  targetPort: 3000
			  nodePort: 31515
		selector:
			component: web
	// port -> use to connect other pod/services to this service. Let say, we have another component who wants to talk to client, then it can connect it via port 3050
	// targetPort -> port of target component i.e component:web in our case.
	//nodePort -> to access the service using browser	
	==================================================================

	pod.yaml
	apiVersion: v1
	kind: Pod
	metadata:
		name:client_pod
		labels:
			component: web
	spec:
		containers:
			-name: client
			image: nsaqui4c/fibanocci_client
			ports:
				- containerPort: 3000
			
		
	
	=====================================================================================	
```


*	Browser -> kube proxy (minikube ip) -> service (here port,nodeport and targetPort defined) -> target (component :web)

********Kind: Pod  ***************
	* We cannot update port, number of containers(instances) or name
	* We can however change the image of container
	
	***********************************
	
	* To resolve this we need to use Deployment instead of POD
	
	
		* Pods ->  Run one or more closely related container
		* Services -> Setup networking in kubernetes cluster
		* Deployment - > Maintain a set of identical pods, ensure that they have correct config and that the right number exists


* Example with type deployment
```	
	==================================================================================
	Deployment.yaml
	apiVersion: apps/v1
	kind: Deployment
	metadata:
		name: client-deployment
	spec:
		replicas: 1
		selector:
			matchLabels:
				components: web

		template:
			metadata:
				labels:
					component: web
			spec:
				container:
					- name: client
					  image: nsaqui4c/fibonacci_client
                      ports:
						- containerPort: 3000
==================================================================================================
```

* Why use service?

	* Any time we create a new pod new IP is assigned to it, so we use service to avoid that pain 
	
* How to update image with latest update using k8s config file
```
	- Delete current pod and apply config file again
	- Always add version number in docker image and update version in config file and apply
	- tag image with new version and oush it to hub and run kubectl command to force deployment to use new version( not from config)
		imperatively updtate the deployment with latest version
			kubectl set image <object Type|Deployment>/<object name|client-deployment> <container name|client>=<new image|nsaqui4c/fibonacci_client:v4>
```			

* HOW TO CREATE SECRETS OBJECT:
```
		kubectl create secret <type of secret can also be of type docker-registry or tls|generic>  <secret name> --from-literal(not from file but cli)	 <key=value> 
```			
			
			
			
			
			
* PVC -> persistence volume claim

	* Volume in generic container terminology: mechanism that allow a container to access volume outside its file system 
	* Volume in kubernets -> OBJECT that allow container to store data at pod level (Object type similar to Deployment or Service)
	* Persistent Volume -> Lies outside of POD.
	* Persistent Volume claim -> shows different available options. It is basically a method to claim persistent volume. 
		* statically provisioned persistent volume: volume already created
		* Dynamically provisioned persistence volume: Volume created on the fly
	
	* Storage option in cloud
		* gcp: Google cloud persistence disk
		* azure: Azure file, azure disk 
		* aws: AWS Block store
	
	* AccessMode:
		* ReadWriteOnce -> Can be used by single Node
		* ReadOnlyMany ->  Multiple node can read from this
		* ReadWriteMany -> Can read and written by many nodes
		
* Example for PVC
```
	==============================================================================================
	apiVersion: v1
	kind: PersistentVolumeClaim
	metadata: 
	  name: persistent-vol-claim
	spec:
	  accessMode:
		- ReadWriteOnce
	  resources:
		requests:
		  storage: 2Gi

	==================================================================================================
```
	
* TO SETUP INGRESS

* https://kubernetes.github.io/ingress-nginx/deploy/#docker-desktop
* kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v0.48.1/deploy/static/provider/cloud/deploy.yaml

* to setup ingrss with nginx which use the below config file to route our request to specific componentStatus
* purpose of using nginx-ingress instead of just nginx to route is that:
	* it has some extra configuration already setup which help in smooth running of routin such as in case of multi instances it send the request to same instance if coming from same user. (it basic by passes the cluster IP service and directly interact with the node)
	
* Example of Ingress yaml
```
	ingress-service.yaml   //https://kubernetes.io/docs/concepts/services-networking/ingress/
	apiVersion: networking.k8s.io/v1
	# UPDATE API
	kind: Ingress
	metadata:
	  name: ingress-service
	  annotations:
		kubernetes.io/ingress.class: 'nginx'
		nginx.ingress.kubernetes.io/use-regex: 'true'
		# ADD ANNOTATION
		nginx.ingress.kubernetes.io/rewrite-target: /$1
		# UPDATE ANNOTATION
	spec:
	  rules:
		- http:
			paths:
			  - path: /?(.*)
				# UPDATE PATH
				pathType: Prefix
				# ADD PATHTYPE
				backend:
				  service:
					# UPDATE SERVICE FIELDS
					name: client-cluster-ip-service
					port:
					  number: 3000
			  - path: /api/?(.*)
				# UPDATE PATH
				pathType: Prefix
				# ADD PATHTYPE
				backend:
				  service:
					# UPDATE SERVICE FIELDS
					name: server-cluster-ip-service
					port:
					  number: 5000
=============================================================================================================
```

* Example of Skaffold
```
skaffold:
	apiVersion: skaffold/v2beta12
	kind: Config
	deploy:
	  kubectl:
		manifests:
		  - ./k8s/*
	build:
	  local:
		push: false
	  artifacts:
		- image: cygnetops/client-skaffold
		  context: client
		  docker:
			dockerfile: Dockerfile.dev
		  sync:
			manual:
			  - src: "src/**/*.js"
				dest: .
			  - src: "src/**/*.css"
				dest: .
			  - src: "src/**/*.html"
				dest: .
		- image: cygnetops/worker-skaffold
		  context: worker
		  docker:
			dockerfile: Dockerfile.dev
		  sync:
			manual:
			  - src: "*.js"
				dest: .
		- image: cygnetops/server-skaffold
		  context: server
		  docker:
			dockerfile: Dockerfile.dev
		  sync:
			manual:
			  - src: "*.js"
				dest: .
```


* Steps to run skaffold
```
Replace my DockerHub username and image names with yours making sure the images in the k8s server, worker, and client deployment configs manifests match what is shown in the Skaffold yaml.

Then, update your client/Dockerfile.dev to add the CI=true variable:

FROM node:alpine
ENV CI=true
 
WORKDIR "/app"
COPY ./package.json ./
RUN npm install
COPY . .
CMD ["npm", "run", "start"]
Finally, run skaffold dev in your terminal (this may take several minutes to build initially since all four servers will be involved).
```




















