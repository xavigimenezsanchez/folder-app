#!/bin/sh
docker build --tag folder-app-e2e . 
docker run -it --name folder-app-e2e --rm folder-app-e2e:latest
docker rmi folder-app-e2e:latest
