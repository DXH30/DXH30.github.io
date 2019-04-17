---
layout: post
title: "Tutorial GDB 2"
author: Didik
tags: debugger gdb tutorial part1 bagian flag reverse engineering assembly bagian 2 dua 
categories: jekyll update
---

Tutorial GDB kali ini hanya membahas tampilan interaktif menggunakan GDB, yang saya baru tau dari yutub. Langsung saja, buat program sederhana


```c
#define APPNAME "bufaddr.c"
#include <stdio.h>
#include <string.h>

int main(int argc, char *argv[]) {
	char *buf[10];
	printf("Insert buffer : ");
	scanf("%s", &buf);
	printf("Buffer content : %s\n", buf);
	printf("Buffer address : %p\n", &buf);
	printf("\n");
	return 0;
}
```

Compile program berikut dengan menggunakan.

```console
user@localhost:~$ gcc -g bufaddr.c -o bufaddr
```

Lalu buka program menggunakan gdb

```
user@localhost:~$ gdb ./bufaddr
```

Coba deh penjet C-x 2 (yang ngerti emacs pasti tau), atau lebih jelasnya pencet Ctrl+x, terus lepas, setelah itu penjet 2 (Ctrl+x digabung, 2 dipisah). Coba start programnya

```console
(gdb) C-x 2
```

```gdb
| Register Value Unavailable |
|____________________________|
| disini list nya            |
(gdb) start
```

coba next, instruksinya.

```gdb
(gdb) next
```

disitu sudah kelihatan kalau instruction pointer dan instruksi nya berlanjut ke perintah berikutnya. Untuk melihat disasembler nya, ketik C-x 2 lagi. Buat balik, ketik C-x 2 lagi sekali. ok
