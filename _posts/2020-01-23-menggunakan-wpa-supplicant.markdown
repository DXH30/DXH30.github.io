---
author: Didik HS
title: Menggunakan wpa supplicant untuk koneksi wifi di linux terminal
tags: terminal linux text cli wifi wlan koneksi internet
category: tips
---

Untuk menggunakan wpa supplicant pertama-tama kita harus memastikan wpa\_supplicant.conf ada. Isi file /etc/wpa\_supplicant/wpa\_supplicant.conf dengan skrip sebagai berikut :
```console
ctrl_interface=/var/run/wpa_supplicant
ctrl_interface_group=wheel
update_config=1
```

Sebelum dapat terkoneksi kita harus menjalankan wpa supplicant dengan perintah berikut :

```console
user@localhost:~$ sudo wpa_supplicant -Dnl80211 -iwlp2s0 -c/etc/wpa_supplicant/wpa_supplicant.conf
```

Setelah perintah itu diketikkan buka terminal baru lalu jalankan wpa\_cli. Untuk menambah mencari koneksi coba ketikkan scan di prompt >
```console
user@localhost:~$ sudo wpa_cli
> scan
OK
<3>CTRL-EVENT-SCAN-RESULTS
> scan_results
bssid / frequency / signal level / flags / ssid
00:00:00:00:00:00 2462 -49 [WPA2-PSK-CCMP][ESS] MYSSID
11:11:11:11:11:11 2437 -64 [WPA2-PSK-CCMP][ESS] ANOTHERSSID
```
Untuk mengkoneksikan ke ssid kita dapat menggunakan perintah sebagai berikut

```console
> add_network
0
> set_network 0 ssid "MYSSID"
> set_network 0 psk "passphrase"
> enable_network 0
<2>CTRL-EVENT-CONNECTED - Connection to 00:00:00:00:00:00 completed (reauth) [id=0 id_str=]
```

Itu saja mungkin. Terima kasih

{% include disqus.html %}
