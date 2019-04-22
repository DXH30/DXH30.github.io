---
layout: post
author: Didik
title: Software Organizer ?
category: jekyll update
---

Awalnya sering pakai software organizer Android yang tampilannya menarik, tetapi karena tidak ingin terpaku dengan satu platform (Android). Ini skenario organizer yang sekarang saya pakai.

1. Menggunakan Emacs ORG-MODE dan save dengan nama myagenda.org ke dalam akun dropbox menggunakan tramp-mode dan dropbox

TRAMP (Transparent Remote Access Multi Protocol) berfungsi untuk mengakses dan mengedit secara langsung file remote. (Disini protokolnya bisa ditambah dan tidak hanya FTP, SSH, SMB)

Dropbox (dropox-mode) M-x package-install \<RET\> dropbox. **Ini** merupakan binder untuk Dropbox agar dapat diakses melalui tramp mode dengan pertama-tama melakukan konfigurasi token dan disetting dengan

```lisp
(require 'dropbox)
(customize-group 'dropbox)
```

Lalu nanti di sana akan ada kotak untuk input token. Kopas token API dari dropbox lalu ganti di situ. Tinggal di buka

C-x C-f \<RET\> /db:Documents/Orgzly/myagenda.org

2. Menggunakan Orgzly untuk membuka dan menjadikannya Aplikasi untuk Habit Tracker dan Organizer pada HP Android

3. Kelebihan menggunakan skenario ini adalah kita dapat dengan nyaman mengedit dengan hanya memahami Markdown dan Org-Mode, dan karena konfigurasi ini menggunakan ORG-Mode, sehingga sangat powerful.
