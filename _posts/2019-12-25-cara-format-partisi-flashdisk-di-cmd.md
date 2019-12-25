---
author: Didik HS
title: Cara format partisi flashdisk di cmd
tags: cmd format flashdisk partition partisi tidak
---

Pernah install ulang, terus partisi flashdisk jadi ukuran 17Mb ? Buka Disk manager juga tidak mempan (tidak bisa dihapus partisinya). Coba pakai Diskpart, buka CMD lalu ketikkan

```console
C:\Users\myself> diskpart
```
Pilih yes, kemudian muncul prompt seperti dibawah ini
```console
DISKPART> 
```
Coba ketikkan list disk
```console
DISKPART> list disk
```
Setelah itu ketikkan select disk 1 untuk memilih disk flashdisk (dilihat berdasarkan Size nya)
```console
DISKPART> select disk 1
```
Coba list partition
```console
DISKPART> list partition
```
Untuk menghapus partisi 1, kita ketikan perintah select lalu delete dengan penulisan sebagai berikut
```console
DISKPART> select partition 1
DISKPART> delete partition
```
Dengan begitu kita bisa langsung create partition
```console
DISKPART> create partition
```
Nanti di eksplorer akan muncul satu partisi flashdisk, silahkan di quick format untuk mendapatkan partisi dengan ukuran yang penuh.
Tools seperti diskpart ini tidak perlu dilakukan instalasi, karena sudah ada di windows, kalau mau eksplorasi ketik help
```console
DISKPART> help
```
maka akan muncul petunjuk, dan cara penggunaannya. Sekian itu saja. Terima kasih

{%include disqus.html %}