+++
title = "Kubernetes CLI Cheat Sheet"
date = 2025-03-14
draft = false

[taxonomies]
tags = ["kubernetes"]
categories = ["snippets"]

[extra]
toc = false
comment = false
+++


 Context & Namespace

```bash
k config get-contexts                       # List all contexts
k config current-context                    # Show current context
```


 Pods

```bash
k exec -it pod_name -c container_name -n namespace -- bash   # Exec into a container shell
k logs pod_name -c container_name -n namespace                # View logs for container
k logs --previous pod_name -c container_name -n namespace     # View logs from previous crash
k logs pod_name --all-containers -n namespace                 # View logs from all containers
k top po pod_name --containers -n namespace                   # Show CPU & memory usage per container
k delete po pod_name -n namespace                             # Delete pod
```


 Deployments

```bash
k rollout restart deploy deploy_name -n namespace   # Restart a deployment
```


 HPA & Events

```bash
k describe hpa hpa_name -n namespace                # Describe HPA details
k get ev --field-selector involvedObject.name=obj_name -n namespace   # Get events for specific object
```
