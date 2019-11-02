---
title: Setel youtube audio saja di terminal linux
author: Didik
tags: youtube commandline cli command line terminal console tty pts linux stream music video
category: multimedia
---

Pernah buka video youtube cuma buat denger lagu ? Ngapain buka browser kalau cuma buat denger lagu youtube. Udah berat ngelambatin, harus buka browser, ganggu isi tab browser, dan banyak gangguan lain.

Mending pakai MPS (Music Player Stream). Sebenarnya sih dipakai bukan cuma buat youtube. Terus kalau mau bisa youtube harus di install mps-youtube nya dulu.

Installnya bermacam macam, kalau di ubuntu dan sejenisnya

```console
user@localhost:~$ sudo apt-get update
user@localhost:~$ sudo apt-get install mps mps-youtube
```

Kalau lewat source juga bisa

```console
user@localhost:~$ git clone https://github.com/mps-youtube/mps-youtube
```

atau lewat python3 aja sekali-kali (mungkin termasuk yang paling gampang)

```console
user@localhost:~$ sudo python3 -m pip install mps-youtube
```

Ikutin dah tutorial installnya disitu, cara jalaninnya (ada sih di git nya, tapi bawah banget)


```console
user@localhost:~$ mpsyt
```

Tinggal cari aja yang mau di play misal kalau kita mau cari relaxing

```console
>/relaxing
```

Ntar muncul kok dia nomornya, tinggal kita pilih aja misal kita pilih urutan nomor 1 tinggal

```console
>1
```

{% include disqus.html %}
