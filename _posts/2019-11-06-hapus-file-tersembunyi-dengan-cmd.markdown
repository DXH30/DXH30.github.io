---
title: Cara hapus virus sembunyi di flashdisk dengan cmd
author: Didik Hadumi Setiaji
tags: windows virus hapus sembunyi cmd command prompt terminal power shell
category: windows
---

Sebelum memformat flashdisk di windows coba perhatikan ukuran flashdisk nya dan periksa apakah ada isinya atau tidak. Jika isi flashdisk penuh tapi isi flashdisk kosong, flashdisk kemungkinan terkena virus. Untuk mengembalikan semua file yang hilang kita bisa cek dengan menggunakan CMD.

1. Buka Command Prompt dengan Run As Administrator
2. Coba ketikkan huruf flashdisknya ditambah tanda : (misal F:) di command lina
   ```console
   C:\Windows\> F:
   F:\>
   ```
3. Jika sudah seperti itu coba ketikkan DIR
   ```console
   F:\> DIR
   ```
4. Harusnya akan muncul sesuatu, di bawahnya yang menandakan ada sebuah Folder yang tersembunyi tanpa nama. Coba ketikkan CD spasi lalu di Tab. Kalau otomatis muncul tanda aneh seperti dibawah disebelah CD nya, langsung klik enter.
   ```console
   F:\> CD ' '
   ```
5. Setelah mengklik enter, maka anda akan berada di folder yang disembunyikan. Untuk masuk ke folder ini kita dapat mengetikkan explorer di CMD
   ```console
   F:\ \> explorer
   ```
6. Silahkan hapus yang aneh, dan pindahkan data-data yang seharusnya ada disitu

{% include disqus.html %}
