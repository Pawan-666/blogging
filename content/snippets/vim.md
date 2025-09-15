+++
title = "Vim"
date = 2025-09-14
draft = false

[taxonomies]
tags = ["vim", "linux"]
categories = ["snippets"]

[extra]
toc = false
comment = false
+++

delete

```
:g/^#/d       # delete all the lines starting with #  g=>global d=>delete
:g/^\s*$/d    # deleting all lines that are empty or that contain whitespace only
:g!/^\s*#/d     # delete all the lines that are not comment
```

substitution

```
:%s/old/new/gc  # substitute with prompt
&   = repeat last substitution, in the current line
g&  = repeat last substitution on all lines 
```






repeat something 
```
30i/I/a/A   #horizontally
3o/O        #vertically     
```


extras

```
:set paste          # allows pasting w/o indentation mess

C-x C-f         # completing file names too, as well as
C-x C-l         # completing entire lines.
```
