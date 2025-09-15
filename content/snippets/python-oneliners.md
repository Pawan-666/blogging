+++
title = "Python One-Liners"
date = 2025-01-12
draft = false

[taxonomies]
tags = ["python", "shell"]
categories = ["snippets"]

[extra]
toc = false
comment = false
+++

Python one-liners :

```python
# Start a simple HTTP server
python -m http.server 8000

# Generate random password
python -c "import secrets, string; print(''.join(secrets.choice(string.ascii_letters + string.digits) for _ in range(12)))"
```

