+++
title = "Grep commands"
date = 2025-09-14
draft = false

[taxonomies]
tags = ["grep", "linux"]
categories = ["snippets"]

[extra]
toc = false
comment = false
+++

ignore commented and empty lines

```bash
grep -v "^#\|^$"  /path/to/dir
 ```
