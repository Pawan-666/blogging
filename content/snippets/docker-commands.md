+++
title = "Docker Cleanup"
date = 2025-01-15
draft = false

[taxonomies]
tags = ["docker", "docker-compose"]
categories = ["snippets"]

[extra]
toc = false
comment = false
+++

get in

```bash
docker exec -it container_name sh
 ```


clean up Docker system resources:

```bash
# Remove all stopped containers
docker container prune -f

# Remove unused images
docker image prune -a -f

# Remove unused volumes
docker volume prune -f

# Nuclear option - clean everything
docker system prune -a --volumes -f
```

Always be careful with the nuclear option in production!
