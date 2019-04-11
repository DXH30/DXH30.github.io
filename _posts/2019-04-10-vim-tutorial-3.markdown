## Tutorial Vim 3 Macros
Untuk yang belum tau macros itu apa ? Nih link [wikipedia](https://en.wikipedia.org/wiki/Macro_(computer_science))
Gimana cara pakai nya di vim ?
Sederhananya, misalkan kita punya file dengan isi

```html
Ayam
Kambing
Kelinci
Kerbau
```

Kita mau buat menjadi

```html
- Ayam
- Kambing
- Kelinci
- Kerbau
```

kita bisa buat macrosnya sederhana. Caranya, arahkan kursor ke huruf A di Ayam lalu ketikkan (langsung ketikkan, jangan pencet i) di NORMAL mode

```vim
qw0i- <ESC>jq 
```
Keterangan

| No | Perintah | Keterangan                              |
|:---|----------|-----------------------------------------|
| 1. | qw       | mendefinisikan macro dengan nama w      |
| 2. | 0        | mengarahkan cursor ke awal baris        |
| 3. | i        | mengubah menjadi INSERT mode            |
| 4. | \-       | mengetik strip dan spasi                |
| 5. | \<ESC\>  | masuk ke NORMAL mode                    |
| 6. | j        | mengarahkan cursor ke baris selanjutnya |
| 7. | q        | mengakhiri recording macros             |

coba panggil dengan mengetikkan

```vim
@w
```

untuk memanggil macros berulang kali coba ketikkan

```vim
3@w
```

Apa gunanya kita buat macro ?
Membuat macros akan sangat membantu jika ada ribuan baris yang harus di edit dengan format yang sama.
Berikut ini adalah contohnya, terdapat source :

```html
Satu
Dua
Tiga
Empat
Lima
Enam
Tujuh
Delapan
Sembilan
Sepuluh
```

Dengan macros kita bisa membuat teks sebelumnya menjadi seperti ini :

```html
<ol>
11
<li name="satu" value="1">Satu</li>
<li name="dua" value="2">Dua</li>
<li name="tiga" value="3">Tiga</li>
<li name="empat" value="4">Empat</li>
<li name="lima" value="5">Lima</li>
<li name="enam" value="6">Enam</li>
<li name="tujuh" value="7">Tujuh</li>
<li name="delapan" value="8">Delapan</li>
<li name="sembilan" value="9">Sembilan</li>
<li name="sepuluh" value="10">Sepuluh</li>
</ol>
```

Sebelum menggunakan macro kita buat dulu kondisi awal dan bisa dimanfaatkan

```html
1
<ol>
Satu
Dua
Tiga
Empat
Lima
Enam
Tujuh
Delapan
Sembilan
Sepuluh
<ol>
```

Arahkan kursornya ke huruf S di Satu, terus coba ikutin pencetan ini, percaya aja ikutin satu satu

```vim
qa0"bywi<li name=" <ESC>h"bpbg~lea" value="<ESC>gg"cyw<C-a>``"cpa"><ESC>ldl$a</li><ESC>jq
```
Keterangan:

| No  | Perintah    | Keterangan                                                                |
|:----|-------------|---------------------------------------------------------------------------|
| 1.  | qa          | mendefinisikan macros dengan nama a                                       |
| 2.  | 0           | navigasi ke awal baris                                                    |
| 3.  | "byw        | menyimpan (yank) dari cursor saat ini sampai w (akhir kata) ke register b |
| 4.  | i           | pindah ke INSERT mode                                                     |
| 5.  | \<li name=" | ini isinya                                                                |
| 6.  | \<ESC\>     | pindah ke NORMAL mode                                                     |
| 7.  | h           | ke kiri 1 kali                                                            |
| 8.  | "bp         | mempaste dari register b                                                  |
| 9.  | b           | ke awal kata                                                              |
| 10. | g~l         | toggle case ke kanan 1 kali                                               |
| 11. | e           | pindah ke akhir kata                                                      |
| 12. | a           | pindah ke INSERT mode depan cursor (sebut saja append)                    |
| 13. | " value="   | ini isinya                                                                |
| 14. | \<ESC\>     | pindah ke NORMAL mode                                                     |
| 15. | gg          | pergi ke awal file (BOF)                                                  |
| 16. | "cyw        | yank 1 kata ke register c                                                 |
| 17. | \<C-a\>     | nambahin angkanya                                                         |
| 18. | \`\`        | pergi ke titik yang terakhir diedit                                       |
| 19. | "cp         | paste dari register c                                                     |
| 20. | a           | append                                                                    |
| 21. | "\>         | ini isinya                                                                |
| 22. | \<ESC\>     | pindah ke NORMAL mode                                                     |
| 23. | l           | ke kanan 1 kali                                                           |
| 24. | dl          | hapus 1 char ke kanan                                                     |
| 25. | $           | pindah ke akhir baris                                                     |
| 26. | a           | append                                                                    |
| 27. | \</li\>     | ini isinya                                                                |
| 28. | \<ESC\>     | pindah ke NORMAL mode                                                     |
| 29. | j           | ke bawah 1 baris                                                          |
| 30. | q           | sudahi rekaman macros nya                                                 |

Gimana, jelas ? gampang kan ?

Gak percaya macros diatas udah bener ?
Atau salah-salah melulu dari tadi mencetnya ?
Atau males ? >:(

Ketik : terus kopas dari map sampai j (**perintah dibawah dikopas selain tanda : diawal**)

```vim
:map <F3> 0"bywi<li name=" <ESC>h"bpbg~lea" value="<ESC>gg"cyw<C-a>``"cpa"><ESC>ldl$a</li><ESC>j
```

Arahin kurosrnya ke huruf S di Satu, terus coba ikutin pencetan ini

```vim
qa<F3>q
```
Maka terdefinisi sudah macrosnya, siap dihidangkan
buat jalain macrosnya 9x ketika aja
```vim
9@a
```

Gimana ?

Selamat anda sudah menjadi pengguna vim :D

Mau yang lebih menantang, coba ke [vimgolf](https://www.vimgolf.com){target="_blank"}
