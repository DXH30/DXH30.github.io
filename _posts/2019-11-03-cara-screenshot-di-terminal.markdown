---
title: Cara screenshot lewat terminal (dengan ImageMagick)
author: Didik
category: terminal
tags: tips trik screenshot screen capture shot terminal linux imagemagick import howto
---
Sebelum bisa screenshot pastikan imagemagick sudah terinstall di linux nya.

Di ubuntu atau debian

Untuk mencari package sudah ada di repository
```console
user@localhost:~$ sudo apt-cache search imagemagick
```

Untuk menginstall package dari repository
```console
user@localhost:~$ sudo apt-get install imagemagick
```

Di ArchLinux atau Manjaro

Untuk mencari package sudah ada di repository
```console
user@localhost:~$ sudo pacman -Qs imagemagick
```

Untuk menginstall package dari repository
```console
user@localhost:~$ sudo pacman -S imagemagick
```

Cara screenshot lewat terminal singkatnya adalah dengan menggunakan perintah import dari imagemagick, contoh :

```console
user@localhost:~$ import > gambar.png
```

Nanti cursor berubah jadi bentuk crosshair, drag dah sampai mencakup yang ingin di screen capture, nanti gambarnya masuk ke file gambar.png

{% include disqus.html %}

