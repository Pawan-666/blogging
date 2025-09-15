+++
title = "SSH"
date = 2025-02-13
draft = false

[taxonomies]
tags = ["ssh", "github", "linux"]
categories = ["snippets"]

[extra]
toc = false
comment = false
+++

Stop typing long SSH commands! Use `~/.ssh/config`:

```
Host prod-server
    HostName 192.168.1.100
    User deploy
    Port 2222
    IdentityFile ~/.ssh/prod_key
    ForwardAgent yes

Host dev-*
    User developer
    Port 22
    IdentityFile ~/.ssh/dev_key
```

Now just type: `ssh prod-server` or `ssh dev-anything`


```
Host frontend-github
    HostName github.com
    User git
    IdentityFile ~/.ssh/ssh-frontend
    IdentitiesOnly yes
```

`git clone git@frontend-github:repo_link.git  # replace github.com with frontend-github after key is added.`
