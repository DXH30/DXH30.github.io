---
layout: post
author: Didik
title: Konfigurasi IP lewat Netsh Windows
tags: windows dos msdos cmd command line prompt shell netsh netshell ip address interface setting konfigurasi config alamat
category: jekyll update
---

Berikut ini adalah cara konfigurasi ip melalui Netsh di Windows.

Buka Command Line, dan Ketikkan perintah berikut untuk melihat list nama koneksi

```console
C:\Users\Home\> netsh show interfaces
```

Kemudian ketikkan perintah.

```console
C:\Users\Home\> netsh interface ip set address "Ethernet Connection 1" static 192.168.1.100 255.255.255.0 192.168.1.1
```

Dimana 192.168.1.100 adalah IP mu, dan 192.168.1.1 adalah Gateway

Untuk setting DNS google

```console
C:\Users\Home> netsh interface ip add dns "Ethernet Connection 1" 8.8.8.8
```

Postingan ini saya buat hanya untuk ingat-ingat


