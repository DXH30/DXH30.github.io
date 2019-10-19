---
layout: post
author: Didik
title: Mencari error dengan strace
category: linux debugging error
tags: error debug bug linux command terminal library pustaka not found command file or directory
---

Punya pengalaman buruk compile program linux yang butuh dependency library yang gak ketemu-ketemu salahnya apa ?
Atau pusing debug program temen yang linker nya gak jelas karena beda laptop ?
Cara untuk mengetahui error ketika menjalankan perintah di linux cukup mudah :

strace namaprogram

Lalu cari dimana errornya dan mengapa, biasanya akan langsung ketemu
