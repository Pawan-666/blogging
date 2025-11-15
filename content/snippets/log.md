+++
title = "Bash logging"
date = 2025-09-29
draft = false

[taxonomies]
tags = ["bash", "linux"]
categories = ["snippets"]

[extra]
toc = false
comment = false
+++


Save output while still seeing it

```bash
bash build.sh | tee build.log
```


Check previous boot logs (most recent before current)

```bash
sudo journalctl -b -1 | grep -i "killed process\|out of memory\|oom"
```

Bash history timestamp
```bash
HISTTIMEFORMAT="%d/%m/%y %T "
```

