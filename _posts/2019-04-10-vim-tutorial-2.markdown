## Tutorial Vim 2 Navigasi
Untuk memanfaatkan navigasi di Vim coba buka file hello.c tadi atau file yang lain. 
Disini saya mulai pakai Vim, untuk cara install vim dapat dilihat di distro masing-masing ;)
```console
user@localhost:~$ vim hello.c 
```

Isinya : 
```c
#include <stdio.h>

int main()
{
  printf("Hello World!\n");
  return 0;
}
```

untuk memanfaatkan keyboard sepenuhnya (pure keyboard) navigasi di vim sama seperti navigasi standard buat yang sering maen game Rogue (contoh : StoneSoup). yakni 

| tombol | keterangan |
|:-------|:-----------|
| h      | kanan      |
| j      | bawah      |
| k      | atas       |
| l      | kiri       |

tombol perlu diingat kalau perlu sering-sering maen game roguelike, karena hampir semua navigasi tanpa tombol kursor mengandalkan kursor diatas. Hal ini juga penting biar tangan gak nyasar kalau pakai tombol kursor

Tapi mungkin yang biasa kita cari itu yang efisien untuk ngoding ya (yang diatas itu tombol navigasi standar).

Untuk itu mungkin tombol dibawah ini berguna, huruf besar disini maksudnya pencet _shift_ dulu. Contoh: G itu sama dengan S-g

| tombol | keterangan                         |
|:-------|:-----------------------------------|
| e      | Maju ke akhir kata                 |
| b      | Mundur ke awal kata                |
| w      | Maju 1 kata                        |
| $      | Maju ke akhir (end)                |
| 0      | Mundur ke awal (home)              |
| )      | Maju 1 kalimat                     |
| (      | Mundur 1 kalimat                   |
| }      | Maju 1 paragraf                    |
| {      | Mundur 1 paragraf                  |
| G      | Maju ke akhir file (EOF)           |
| g      | Mundur ke awal file (BOF)          |
| %      | Buat programmer (bracket match)    |
| H      | Mundur ke bagian paling atas layar |
| M      | Ke tengah layar                    |
| L      | Maju ke bagian paling bawah layar  |

Coba aja pencet-pencet setiap perintah diatas biar ngerti. Sampai situ saja untuk navigasi. Masih banyak cara mengefisiensi waktu editting file. Di tutorial selanjutnya akan dibahas cara menggunakan macros di Vim ;)

## Tips 
Semua navigasi ini dilakukan pada mode NORMAL
