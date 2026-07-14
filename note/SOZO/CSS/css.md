## cssとは
* Cascading Style Sheetsの略
* ウェブページのスタイリング、レイアウトをするのにつかわれる
* 色、大きさ、文字、余白、列、アニメーションをつけるといったことができる


## lvhaの法則
:link 飛んだことないリンク
:visited　飛んだことあるリンク
:hover　カーソルがリンクにあっているとき
:active　クリック時

他の要素で上書きされることがある要素
```
a:hover {
  color: blue;
}

a:link {
  color: red;
}

a:visited {
  color: green;
}
```
みたいな順番だと、文字にマウスを合わせてもhoverがvisitedに上書きされて、色が青にならない
```
a:link {
  color: red;
}

a:visited {
  color: green;
}
a:hover {
  color: blue;
}
a:active{
  color:black;
}
```
Link > visited > hover > active

の順番だと正しく表示されるようになる