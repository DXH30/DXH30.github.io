---
title: Cara agar bisa copy paste di vim
author: Didik
category: vim
tags: vim tutorial copy paste buffer windows browser
layout: post
---

Untuk copy paste di vim bisa dengan perintah y (yank), dan p (paste).
Tapi bagaimana jika kita ingin copas ke browser ? Tentu tidak bisa karena yank dan paste hanya dapat digunakan di vim saja (vim punya clipboard sendiri).
Sebelum menggunakan perintah fitur native dibawah, kita dapat langsung menggunakan copy paste dengan memanfaatkan xsel dengan menambahkan baris berikut ini di dalam .vimrc kita dan untuk melakukan copy dapat dengan Ctrl+c

```console
map <C-c> :%w !xsel -i -b<ENTER><ENTER>
map <M-v> :r !xsel -o -b<ENTER><ENTER>
```

Dengan mapping diatas kita dapat melakukan copy di normal mode dengan Ctrl+c dan paste di normal mode dengan Alt+v. Selanjutnya adalah menggunakan fitur clipboard native milik vim (tanpa xsel, karena xsel adalah bagian dari xorg bukan vim)

1. Agar vim dapat menggunakan copy paste dengan clipboard kita harus memastikan
vim sudah bisa clipboard dengan perintah
	```console
	user@localhost:~$ vim --version | grep clipboard
	```
	Jika ada muncul output seperti dibawah ini, maka bisa lanjut ke step B
	```console
	+clipboard
	+xterm_clipboard
	```

	Jika ada muncul output seperti dibawah ini, maka lanjut ke step 2
	```console
	-clipboard
	-xterm_clipboard
	```

2. Karena vim kita tidak support clipboard (-clipboard) maupun xterm\_clipboard (-xterm\_clipboard). Maka kita harus recompile ulang vim. Langkahnya adalah kita download dulu vim source nya.

	```console
	user@localhost:~$ git clone https://github.com/vim/vim.git
	```

3. Lalu cd ke vim, kemudian build dengan opsi sebagai berikut (lama build nya pertama, sabar). (Kalau ada perintah dibawah not found, coba pakai root (bukan sudo))

	```console
	user@localhost:~$ cd vim
	user@localhost:~/vim$ ./configure --with-x
	user@localhost:~/vim$ make
	user@localhost:~/vim$ sudo make install
	```

4. Kalau sudah. Coba pastikan dulu yang tadi nya -clipboard -xterm\_clipboard, jadi +clipboard +xterm\_clipboard.

	```console
	user@localhost:~$ vim --version | grep clipboard
	```

5. Sudah ada +clipboard dan +xterm\_clipboard nya ?. Maka selanjutnya adalah mengkonfigurasi agar vim menggunakan X sebagai clipboard defaultnya. Caranya adalah dengan mamasukkan perintah berikut ini dalam .vimrc

	```console
	set clipboard=unnamedplus
	```

Note : Kalau tidak bisa backspace di insert mode coba masukkan set backspace=2 di dalam .vimrc lalu buka ulang vim
