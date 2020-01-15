---
author: Didik HS
title: Membaca (cat) file dengan output hexadesimal
tags: cat file hex concatenate concatenation terminal lihat baca file linux
category: linux
---

Untuk membaca file dengan output hexadesimal sederhananya dapat menggunakan perintah xxd.

```console
xxd namafile
```

Contoh pentingnya kita dapat melakukan dump pada input device untuk melihat nilai hex dari event mouse, caranya adalah sebagai berikut

```console
xxd /dev/input/mouse0
```

Dapat juga menggunakan hexdump, dengan cara

```console
hexdump -C namafile
```

Hexdump juga bisa digunakan untuk menampilkan event sebagaimana halnya xxd. Caranya juga sama.

```console
hexdump /dev/input/mouse0
```

Atau Hexedit sebagai editor untuk hexadesimal. Hexedit lebih kepada proses editing daripada menampilkan.

```console
hexedit namafile
```

Atau dapat juga menggunakan vim dengan xxd. Caranya harus di edit .vimrc vim nya dulu, dan hanya bisa buka jika ekstensi nya *.bin. Cara konfigurasinya ada di vim nya langsung.

```console
:h hex-editing
```

Kalau mau tau konfignya skrip dibawah ini di dikopas dan ditaruh di akhir baris file .vimrc

```vi
" vim -b : edit binary using xxd-format!
augroup Binary
	au!
	au BufReadPre *.bin let &bin=1
	au BufReadPost *.bin if &bin | %!xxd
	au BufReadPost *.bin set ft=xxd | endif
	au BufWritePre *.bin if &bin | %!xxd -r
	au BufWritePre *.bin endif
	au BufWritePost *.bin if &bin | %!xxd
	au BufWritePost *.bin set nomod | endif
augroup END

```

Kalau mau dicoba pastikan file yang diedit berekstensi *.bin

```console
vim namafile.bin
```

{% include disqus.html %}
