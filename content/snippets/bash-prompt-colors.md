+++
title = "Bash prompt colors"
date = 2025-01-13
draft = false

[taxonomies]
tags = ["ssh", "bash", "linux"]
categories = ["snippets"]

[extra]
toc = false
comment = false
+++

### 🎨 Bash Prompt in 10 Colors

| Color Name       | ANSI Code | Prompt Line                                         |
| ---------------- | --------- | --------------------------------------------------- |
| **Red**          | `0;31`    | `export PS1='\[\e[0;31m\]\u@myhost:\w\$ \[\e[0m\]'` |
| **Green**        | `0;32`    | `export PS1='\[\e[0;32m\]\u@myhost:\w\$ \[\e[0m\]'` |
| **Yellow**       | `0;33`    | `export PS1='\[\e[0;33m\]\u@myhost:\w\$ \[\e[0m\]'` |
| **Blue**         | `0;34`    | `export PS1='\[\e[0;34m\]\u@myhost:\w\$ \[\e[0m\]'` |
| **Magenta**      | `0;35`    | `export PS1='\[\e[0;35m\]\u@myhost:\w\$ \[\e[0m\]'` |
| **Cyan**         | `0;36`    | `export PS1='\[\e[0;36m\]\u@myhost:\w\$ \[\e[0m\]'` |
| **White**        | `0;37`    | `export PS1='\[\e[0;37m\]\u@myhost:\w\$ \[\e[0m\]'` |
| **Bright Red**   | `1;31`    | `export PS1='\[\e[1;31m\]\u@myhost:\w\$ \[\e[0m\]'` |
| **Bright Green** | `1;32`    | `export PS1='\[\e[1;32m\]\u@myhost:\w\$ \[\e[0m\]'` |
| **Bright Blue**  | `1;34`    | `export PS1='\[\e[1;34m\]\u@myhost:\w\$ \[\e[0m\]'` |

---
