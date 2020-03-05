---
author: Didik
title: Cara menggunakan torify sebagai proxy
tags: proxy anonymous tor
---

1. Install tor, tsocks, dan torsocks
2. Pastikan konfigurasi nya di /etc/tor/torrc
3. Pastikan user tor ada (buat baru kalau tidak ada)
4. Pastikan permission /var/log/tor /var/run/tor dimiliki user tor
5. Jalankan tor dengan mengetik tor di console (biasanya binding ke port 9050)
6. Cek portnya dengan 'netstat -ntlp'
7. Coba cek ip luar tanpa tor dengan perintah
```console
user@locahost:~$ curl ifconfig.me
```
8. Coba cek ip luar dengan tor dengan perintah
```console
user@localhost:~$ torify curl ifconfig.me
```
9. Jika IP berbeda, selamat tor sudah dapat digunakan, untuk mengecek cara penggunaannya dapat pakai man torify


{% include disqus.html %}
