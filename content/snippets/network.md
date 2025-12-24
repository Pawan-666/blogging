+++
title = "networking"
date = 2025-12-22
draft = false

[taxonomies]
tags = ["network"]
categories = ["snippets"]

[extra]
toc = false
comment = false
+++

current iptables rules

```bash
iptables -vnL
```

used ports windows

```powershell
netstat -anob

netstat -anob | findstr :8088

@(Get-NetTCPConnection -State Listen | Select-Object LocalAddress, LocalPort, @{N='Proto';E={'TCP'}}, @{N='Process';E={(Get-Process -Id $_.OwningProcess).ProcessName}}) + @(Get-NetUDPEndpoint | Select-Object LocalAddress, LocalPort, @{N='Proto';E={'UDP'}}, @{N='Process';E={(Get-Process -Id $_.OwningProcess).ProcessName}}) | Sort-Object LocalPort | Format-Table -AutoSize
```
