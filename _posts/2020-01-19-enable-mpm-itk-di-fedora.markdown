---
author: Didik HS
title: Enable HTTPD MPM ITK di Fedora
tags: userid httpd server linux fedora centos redhat red hat terminal apache2 http
category: httpd
---

MPM ITK dapat digunakan untuk memberikan hak akses pada directory di virtualhost httpd. Misalnya ketika ingin memberikan hak akses ke user user di VirtualHost /mnt/user, dapat dimasukkan argumen AssignUserID user user di tag VirtualHost apache. 

Cara ini dilakukan di distro linux fedora (mungkin untuk keturunan redhat yang lain bisa, seperti centos dan lain-lain). Langsung saja install terlebih dahulu module nya dengan perintah
```console
user@localhost:~$ sudo dnf install httpd-itk
```

Untuk mengenable terlebih dahulu harus mengedit file /etc/httpd/conf.modules.d/00-mpm.conf. Di file ini uncomment #LoadModule mpm\_prefork\_module modules/mod\_mpm\_prefork.so, dan comment baris LoadModule mpm\_event\_module modules/mod\_mpm\_event.so.

Setelah itu edit file /etc/httpd/conf.modules.d/00-mpm-itk.conf, dengan uncomment baris #LoadModule mpm\_itk\_module modules/mod\_mpm\_itk.so. Setelah itu restart apache dengan perintah

```console
user@localhost:~$ sudo systemctl restart httpd
```

{% include disqus.html %}
