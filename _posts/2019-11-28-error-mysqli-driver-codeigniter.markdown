---
author: Didik
layout: posts
category: codeigniter
tags: php error mysqli driver not found mysqli_init codeigniter php index
---

Ketika kita menemukan error seperti ini

```console
Severity: Error
Message: Call to undefined function mysqli_init()
Filename: mysqli/mysqli_driver.php
Line Number: 135
Backtrace:
```

Biasanya solusinya coba cari php.ini di /etc/php/, cara carinya

```console
user@localhost:/etc/php/$ find /etc/php/ -name "*.ini" -print
```

Nanti ketemu dia lokasi php.ini nya, disitu hilangin komentarnya tanda ; di bagian

```ini
extension=mysqli
```

Setelah itu coba restart server httpnya, terus buka lagi localhostnya

{% include disqus.html %}
