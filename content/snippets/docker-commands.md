+++
title = "Docker"
date = 2025-01-15
draft = false

[taxonomies]
tags = ["docker", "docker-compose"]
categories = ["snippets"]

[extra]
toc = false
comment = false
+++

run the image

```bash
docker run -d -p 8000:8000 --name  cont_name image_name_id
 ```

build image

```bash
docker build -t myimage:latest .
 ```


exec

```bash
docker exec -it container_name sh
 ```

tag

```bash
docker tag existing_img_:tag new_image_tag
 ```


build platform specific images

```bash
docker buildx build --platform linux/amd64 -t docker1234/ml:amd64 .
docker buildx build --platform linux/arm64 -t docker1234/ml:arm64 .
 ```


Inspect & Debug

```bash
docker inspect myapp          # Show container metadata
docker inspect myimage:latest # Show image metadata
docker top myapp              # Show processes inside container
docker stats                  # Live CPU/mem/disk stats
docker diff myapp             # Show filesystem changes in container
docker events                 # Stream real-time events from Docker daemon
```

Docker Cleanup

```bash

docker system df              # Show disk usage
docker container prune -f     # Remove all stopped containers
docker image prune -a -f      # Remove unused images
docker volume prune -f        # Remove unused volumes
docker system prune -a --volumes -f # Nuclear option - clean everything
```

