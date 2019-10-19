---
layout: post
title:  "Tutorial GDB 1"
author: Didik
tags: debugger gdb tutorial part1 bagian flag reverse engineering assembly 
categories: jekyll update
---
GDB (Gnu Debugger) dapat dimanfaatkan dengan menambah flag -g saat mengkompile program. Tutorial singkatnya

1. Buat program dengan nama hello.c

	```c
	#include <stdio.h>

	int main() {
		char *name;
		printf("Insert name : ");
		scanf("%s", &name);
		printf("Hello %s\n", &name);
		return 0;
	}
	```

2. Save program lalu compile dengan menggunakan flag -g di gcc

	```console
	user@localhost:~$ gcc -g hello.c -o hello
	```

3. Setelah itu debug programmnya dengan gdb

	```console
	user@localhost:~$ gdb ./hello
	```

4. Untuk menjalankan program ketikkan run

	```gdb
	(gdb) run
	```

5. Agar bisa di debug programmnya ketikkan start, dimana perintah ini melakukan debug dengan breakpoint di fungsi main

	```gdb
	(gdb) start
	```

6. Untuk melihat isi program, gunakan perintah

	```gdb
	(gdb) list
	```

7. Untuk melihat isi register saat ini, gunakan perintah

	```gdb
	(gdb) info registers
	```

8. Coba lanjutkan program, dengan ketikkan

	```gdb
	(gdb) continue
	```

9. Maka program akan langsung berlanjut sampai selesai, coba start ulang program, dan ikuti perintah berikut

	```gdb
	(gdb) start
	```

	```gdb
	(gdb) info registers
	```

	```gdb
	(gdb) next
	```

	```gdb
	(gdb) info reg
	```

10. Bisa dilihat perbedaan, di register rip, saat dilanjutkan alamatnya berubah, disini rip maksudnya adalah INSTRUCTION POINTER, atau bahasa gampangnya PROGRAM COUNTER. Untuk melihat isi dari alamat memori dapat menggunakan perintah x (Examine Memory), disini saya ngeprint alamat dari Register rip.

	```gdb
	(gdb) x 0x555555555161
	```

11. Untuk melihat kedepan memory, ketikkan perintah x/4 untuk 4 byte kedepan memori

	```gdb
	(gdb) x/4 0x555555555161
	```

12. Untuk melihat kebelakang memory, ketikkan perintah x/-4 untuk 4 byte kebelakang memori

	```gdb
	(gdb) x/-4 0x555555555161
	```

13. Disini kita coba loncatin printf dan scanf yang pertama, kita lihat apa yang terjadi

	```gdb
	(gdb) continue
	```

	```gdb
	(gdb) start
	```

	```gdb
	(gdb) next
	```

	```gdb
	(gdb) next
	```

	```gdb
	(gdb) next
	```

	```gdb
	Insert Name : ABC
	```

	```gdb
	(gdb) info registers
	```

14. Lihat rip nya dimana

	```gdb
	rax            0x1                 1
	rbx            0x0                 0
	rcx            0x7ffff7f203e0      140737353221088
	rdx            0x7ffff7f71730      140737353553712
	rsi            0x1                 1
	rdi            0x0                 0
	rbp            0x7fffffffd6b0      0x7fffffffd6b0
	rsp            0x7fffffffd6a0      0x7fffffffd6a0
	r8             0xa                 10
	r9             0x0                 0
	r10            0x0                 0
	r11            0x7ffff7f203e0      140737353221088
	r12            0x555555555060      93824992235616
	r13            0x7fffffffd790      140737488344976
	r14            0x0                 0
	r15            0x0                 0
	rip            0x555555555199      0x555555555199 <main+64>
	eflags         0x206               [ PF IF ]
	cs             0x33                51
	ss             0x2b                43
	ds             0x0                 0
	es             0x0                 0
	fs             0x0                 0
	gs             0x0                 0
	```

15. Dari hasil keluaran perintah diatas, dapat diketahui isi dari rip nya adalah 0x555555555199, jadi kita continue lagi, terus start

	```gdb
	(gdb) continue
	```

	```gdb
	(gdb) start
	```

16. Kita coba ganti konten rip dengan cara (disini tanda $ menandakan register)

	```gdb
	(gdb) set $rip=0x555555555199
	```

17. Coba dilihat yang sudah kita ganti, dengan cara

	```gdb
	(gdb) info registers
	```

18. Dapat dilihat rip nya berubah menjadi 0x555555555199, coba next

	```gdb
	(gdb) next
	```

19. Maka akan muncul

	```gdb
	Hello �����
	```

Cukup itu untuk dasar-dasar gdb, kalau kurang ditunggu Tutorial selanjutnya. Pemahaman gdb sangat dibutuhkan untuk memulai CTF, karena bakal banyak kepake ilmunya
{% include disqus.html %}
