Lambda Calculus merupakan teori yang berkaitan erat dengan Turing Machine. Dimana Lambda Calculus ini menyerupai Turing Machine dalam sisi Algoritma. Secara ekspresi Lambda Calculus memiliki tiga konstruksi yang disebut **Variabel**, **Abstraksi**, dan **Aplikasi**.

| Syntax | Nama      | Deskripsi                              |
|:-------|-----------|----------------------------------------|
| x      | Variabel  | Karakter atau kata yang memiliki nilai |
| (\x.M) | Abstraksi | Definisi Fungsi                        |
| (M N)  | Aplikasi  | Menerapkan fungsi                      |
|        |           |                                        |

Agar dapat memahami Lambda, berikut adalah penjelasan singkatnya. (Di Lambda Calculus tidak ada + - x /, disini hanya untuk kemudahan penjelasan)

| No | Matematika               | Lambda                       |
|:---|--------------------------|------------------------------|
| 1  | f(x) = x                 | \x.x                         |
| 2  | f(x) = x + 1             | \x.x+1                       |
| 3  | f(x) = x^2 + 1           | \x.x^2+1                     |
| 4  | f(x,y) = x^2 + y^2       | \x.(\y.(x^2 + y^2))          |
| 5  | f(x,y,z) = x + y^2 + z^3 | \x.(\y.(\z.(x + y^2 + z^3))) |

Di persamaan no 4 dan 5, kenapa f(x,y) = x^2 + y^2, menjadi \x.(\y.(x^2 + y^2)) ? Saya perjelas ya.

```
f(x, y) = x + y
ini dapat dituliskan dalam bentuk

f(x) = f(y) = x + y

lah kok ? dapat darimana itu ? kasih contoh aja langsung
x = 1, y = 2

f(1) = f(2) = (1) + (2)

maka hasilnya f(x) = 3, jika y juga terdefinisi

mungkin akan lebih mudah dipahami kalau bentuknya dikurung seperti ini

f(x) = (f(y) = x + y)

atau mungkin karena ada 2 = (samadengan) jadi aneh, yaudah, coba bentuk ini

f(x) = f(y)

Perlu diketahui bahwa pada fungsi lambda setiap notasi fungsi tidak terdefinisi (anonymous function), jadi f pada f(x) berbeda dengan f pada f(y).

Sehingga akan lebih mudah dipahami dalam bentuk seperti ini (f(y) diganti g(y))

f(x) = g(y)

dimana g(y) = x + y

sehingga

f(x) = x + y

dan kita bisa mendefinisikan y pada g(y) dan x pada f(x), sehingga sama saja dengan

f(x,y) = x + y

f(x) = (g(y) = (x + y))

Sehingga masuk akal jika kita buat dengan notasi berikut

\x.(\y.(x + y))

```

Oke untuk pendahuluan Lambda singkatnya seperti itu, mungkin tutorial selanjutnya, akan diperjelas
