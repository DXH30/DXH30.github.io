---
layout: post
title: Alasan menggunakan Emacs
author: Didik
tags: emacs tutorial hacking server easy editor config cara teknik serbaguna vim vscode visual studio code sublime text pakai lisp organizer mode org tramp repl daemon service 
category: jekyll update
---
Saya sudah menggunakan vim sejak SMK kelas 2 atau sekitar tahun 2012, dan suka dengan fitur navigasi, perintah, dan regex, yang sering saya gunakan untuk update configurasi server secara instan.

Mulai sejak 2019 Januari saya mencoba emacs, dan sejak saat itu saya mencoba beberapa fitur yang sering saya gunakan di vim yakni macros, dan regex. Dan hasilnya memang agak mengecewakan dikarenakan untuk memanggil regex kita harus repot-repot ngetik **M-x replace-regex** dan sejenisnya hanya untuk mengetikkan regex sederahana. Belum lagi macrosnya yang kita harus define menggunakan keystroke **C-(** untuk record, dan **C-)** untuk stop, yang berasa aneh di jari.

Saya mulai berpikir untuk tidak menggunakan emacs dan beralih ke vim lagi. Kemudian saya ingat-ingat dan coba cari di youtube tentang evil-mode. Sejak saat itu saya mulai sering menggunakan emacs setiap hari. 

Seiring berjalannya waktu, banyak fitur yang saya pelajari di emacs yang dapat dipertimbangkan. Berikut ini adalah fiturnya;

1. **ORG MODE**

   Atau sering disebut organizer mode, merupakan fitur yang sangat vital di emacs. Merupakan jenis bahasa Markup yang dapat digunakan untuk membuat jadwal maupun habit yang berulang.
   
   <center><img src="/assets/img/2019/04/16/2019-04-16-235236_757x696_scrot.png"></center>
   
   fitur yang dapat dikerjakan di org-mode, **export to HTML, Md, Latex**, **Agenda**, **Spreadsheet** (bisa hitung dengan rumus), dan banyak yang belum saya explore.
   
2. **EMACS LISP**
   
   Emacs itu LISP Interpreter.

   <center><img src="/assets/img/2019/04/16/2019-04-17-005434_672x700_scrot.png"></center>

   Bahasa utama dan konfigurasi untuk emacs menggunakan **LISP**. Dan merupakan salah satu dari Dialek Lisp yang sudah lama.

3. **REPL**
   
   Read-Eval-Print loop atau bahasa simpel nya **Shell**, menggunakan M-x ielm untuk mengeluarkan shell ELISP, dan dapat juga menggunakan M-x eshell-mode untuk menggabungkan fungsi emacs dengan shell. atau M-x ansi-term untuk menggunakan terminal murni

   <center><img src="/assets/img/2019/04/16/2019-04-17-010543_663x701_scrot.png"></center>

4. **Banyak fitur**
   
   Serial access, environment, Windows Splitter, GNU debugger mode, Compiler make -k, dired (file manager), Neotree (Tree di kiri buat program), Magit (Git Interface untuk emacs), TRAMP (Transparent Remote Access, Multiple Protocols) mode untuk remote access editing.

5. **Tips**
   
   Tramp mode : C-x C-f \<RET\> /su::/etc/sesutu, atau bisa juga /sudo::/etc/sesuatu, atau /ssh:root@123.123.123.1:/etc/sesuatu, dan lain-lain
   Magit : M-x magit-status, c untuk commit, C-c untuk simpan, s untuk staging, ? untuk help
   
6. **EVIL**

   Bagi para pengguna vim, di emacs dapat di installkan Vim dengan menggunakan evil-mode, jadi lebih mudah buat bikin macros seperti di vim, tinggal q, atau bisa menggantikan M-x jadi :

   <center><img src="/assets/img/2019/04/16/2019-04-17-010849_528x92_scrot.png"></center>

7. **TIDAK PERLU DI CLOSE**
   Emacs dapat dijalankan sebagai Daemon, dan dapat diakses dengan emacs-client. Caranya adalah dengan menjalankan emacs dengan perintah emacs --daemon, lalu mengaksesnya dengan emacs-client -c

Untuk tutorial Emacs ini akan dibagi menjadi, **Tutorial Org-Mode**, **Tutorial Emacs Lisp**, **Tips menggunakan nama_app di emacs**.
{% include disqus.html %}
