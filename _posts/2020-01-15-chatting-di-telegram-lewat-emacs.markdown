---
author: Didik Hadumi Setiaji
title: Cara chatting di telegram lewat emacs
category: emacs
tags: chatting telegram terminal lewat emacs linux console chat
---

Emacs bisa dipakai juga sebagai chatting client dengan menggunakan package yang bernama telega. Cara install telega ini memang cukup merepotkan, dan kita harus mau recompile emacs kita dari awal (jika versi emacs kurang dari 26.3). Jadi jika kita lihat versi emacs kita masih 26.1 (kebanyakan kasus), jadi tetap harus kita recompile ulang.

Alasan kita harus recompile ulang adalah karena beberapa library persyaratan telega itu membutuhkan imagemagick-devel dan pada emacs yang lama (26.1) tidak ada, sedangkan emacs yang baru (26.3) ada. Untuk merecompile emacs cari caranya di blog ini ada. Nah untuk instalasi telega kita bisa lakukan dengan :

```console
M-x package-install RET telega
```

Setelah perintah diatas dijalankan maka emacs langsung akan mendownload program telega dari repositori. Setelah terdownload baca cara konfigurasinya di github yang buat langsung nih https://github.com/zevlg/telega.el

Setelah telega terinstall kita dapat langsung menjalankan

```console
M-x telega RET
```

Setelah itu telega akan menanyakan nomor telpon dan kode verifikasi dari telegram, masukkan keduanya. Lalu akan muncul tampilan list chat telegram. Package ini sangat bermanfaat, karena dapat membuat kita membuka telegram tanpa harus repot-repot membuka tampilan grafis pada Linux.

Sekian itu saja untuk artikel hari ini, selamat mencoba..

{% include disqus.html %}
