---
author: Didik HS
title: Masalah Centos 8 instal paket tidak ketemu ketemu
tags: centos linux centos8 centos paket aplikasi program notfound not found tidakketemu tidak ketemu
category: linux
---
Mungkin ada beberapa dari kamu, menghadapi masalah dimana centos 8 tidak dapat menginstalasi paket yang umumnya mudah di instalasi pada distro linux lain. Untuk beberapa aplikasi seperti elinks, mplayer dan beberapa aplikasi penting agar bisa terinstall di linux centos 8 ini kita harus meng-enable repository PowerTools terlebih dahulu. Hal ini dapat dilakukan dengan mengetikan opsi --enable-repo=PowerTools pada perintah yum. Contohnya adalah sebagai berikut :

```
user@localhost:~$ sudo yum --enablerepo=PowerTools install mplayer
```

Maka setelah klik enter, seharusnya mplayer itu bisa ketemu, dan bisa di install. Sekian, terima kasih.

{% include disqus.html %}
