+++
title = "Python One-Liners I Love"
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

# Pretty print JSON
python -m json.tool file.json

# Check if port is open
python -c "import socket; print(socket.create_connection(('localhost', 8080)))"

# Generate random password
python -c "import secrets, string; print(''.join(secrets.choice(string.ascii_letters + string.digits) for _ in range(12)))"
```

