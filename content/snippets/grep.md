+++
title = "Grep"
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


count number of empty lines
```bash
grep -c "^$"  ..
 ```


only IP address
```bash
grep -Eo '[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}'
```


returning lines before and after match (e.g. 'bbo')
```bash
# return also 3 lines after match
grep -A 3 'bbo'

# return also 3 lines before match
grep -B 3 'bbo'

# return also 3 lines before and after match
grep -C 3 'bbo'
```

lines without word (e.g. 'bbo')
```bash
grep -v bbo filename
```

grep all content of a fileA from fileB
```bash
grep -f fileA fileB
```
