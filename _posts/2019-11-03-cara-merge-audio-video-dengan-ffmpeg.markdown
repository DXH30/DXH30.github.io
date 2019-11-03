---
title: Cara merge audio dan video dengan ffmpeg
author: Didik
category: multimedia
tags: linux multimedia ffmpeg combine gabung merge audio video terminal commandline cli console term
---

Langsung saja.

```console
user@localhost:~$ ffmpeg -i video.mp4 -i audio.wav -c:v copy -c:a aac -strict output.mp4
```

{% include disqus.html %}
