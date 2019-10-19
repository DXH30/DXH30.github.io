---
title: Menggunakan XDG untuk membuka semua file lewat terminal
author: Didik
category: linux
tags: linux terminal gui commandline via no environment
---

Untuk menjalankan dan mengatur semua 
X Desktop Group atau XDG merupakan

```console
user@localhost:~$ xdg-open fileapapunitu
```

contohnya

```console
user@localhost:~$ xdg-open musik.mp3
user@localhost:~$ xdg-open video.mp4
user@localhost:~$ xdg-open gambar.jpeg
user@localhost:~$ xdg-open sesuatu.exe
```

Untuk mengubahnya kita harus ketahui dulu jenis mime typenya dapat dengan perintah, contohnya adalah :
```console
user@localhost:~$ xdg-mime query filetype namafile.jpeg
```

maka hasilnya sebagai berikut :
```console
image/jpeg
```

untuk mengganti aplikasi pembukanya menjadi feh dapat dengan cara :
```console
user@localhost:~$ xdg-mime default feh.desktop image/jpeg
```
