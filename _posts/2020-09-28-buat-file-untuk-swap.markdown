---
author: Didik HS
title: Cara buat file swap tanpa partisi 
category: SWAP 
tags: harddisk partisi swap memory filesystem swapon mkswap 
---

Butuh swap tapi tidak mau otak atik partisi ?

Caranya tinggal buat

```console
root@localhost:~# dd if=/dev/zero of=/var/tambahan bs=1M count=1024 status=progress
root@localhost:~# mkswap /var/tambahan
root@localhost:~# swapon /var/tambahan
```

Itu aja

{% include disqus.html %}
