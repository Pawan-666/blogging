+++
title = "Database"
date = 2025-12-22
draft = false

[taxonomies]
tags = ["db", "rds"]
categories = ["snippets"]

[extra]
toc = false
comment = false
+++

postgres dump

```bash 
telnet  rds.cqzmh.us-east-1.rds.amazonaws.com 5432
nc -zv  rds.cqzmh.us-east-1.rds.amazonaws.com 5432

pg_dump -h rds.cqzmh.us-east-1.rds.amazonaws.com -p 5432 -U db_user -d db_name > db$(date -I).sql
pg_dump -h rds.cqzmh.us-east-1.rds.amazonaws.com -p 5432 -U db_user -d db_name -Fc > db$(date -I).dmp      #custom binary format


docker run --rm -it postgres:17 pg_dump -h rds.cqzmh.us-east-1.rds.amazonaws.com -p 5432 -U db_user -d db_name > db$(date -I).sql
```

db size
```
SELECT pg_size_pretty(pg_database_size('db_name'));      # db size

## all db sizes
SELECT datname, pg_size_pretty(pg_database_size(datname)) AS size 
FROM pg_database 
ORDER BY pg_database_size(datname) DESC;
```
