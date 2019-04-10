---
author: DXH30
---
## Tutorial Vim 1 Basic Editing
Editor vim biasanya dapat ditemukan di Linux pada umumnya. Namun jika tidak ditemukan dengan nama vim, dapat dibuka dengan perintah

```console
user@localhost:~$ vi namafile
```
Coba keluar dari vim dengan cara mengketik colon(:) lalu q, btw \<RET\> disini maksudnya enter
```console
:q <RET>
```

Coba ketikkan script hello world ini, untuk memulai ngetik, ubah ke INSERT Mode dengan menekan tombol i
```console
user@localhost:~$ vi hello.c
```
Setelah dalam mode INSERT. Ketikkan (jangan copy paste)
```c
#include <stdio.h>

int main()
{
  printf("Hello World\n");
  return 0;
}
```

Untuk keluar dari mode INSERT ke mode NORMAL tekan \<ESC\>

Setelah dalam mode NORMAL. Untuk menyimpan file. Ketikkan
```console
:w <RET>
```

Lalu untuk keluar dari vim. Ketikkan
```console
:q <RET>
```

Atau bisa juga sekalian
```console
:wq <RET>
```

Untuk menyimpan dengan nama lain, atau tidak sengaja ketik perintah vim tanpa namafile

```console
:wq sesuatu.c <RET>
```

Segini saja sudah cukup untuk menggunakan vim untuk keperluan editting teks biasa (.txt) atau koding ringan.

Tutorial selanjutnya adalah cara navigasi di vim


Tips vim Hang : 
> Jika tidak sengaja menekan C-s, dapat dilepas dengan menggunakan C-q.
> Btw fitur ini namanya [Software Flow Control](https://en.wikipedia.org/wiki/Software_flow_control) ( buat yang sering program Serial mungkin ngerti) (coba penjet C-s di terminal ;) )

