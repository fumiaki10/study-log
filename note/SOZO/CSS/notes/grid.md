## グリッドとは
行と列を定義する水平線と垂直線の集合が交差したもの。マス目、方眼紙

### grid-template-columnsプロパティ
```html
<div class="wrapper">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
  <div>Four</div>
  <div>Five</div>
</div>
```
```css
.wrapper {
  display: grid;
  grid-template-columns: 200px 200px 200px;
}
```
200px幅の要素を3つ生成している。
```css
grid-template-columns: 200px 200px 200px;
```
等分するための数を複数書くことで、その数に適応する。２００pxを３つ書いているので３等分。数字を変えれば長さだけ変わる

###　fr
グリッドで使える単位。1f 2f 1fとかになると1:2:1の比率で表示される

500px 1fr 2fr とすると５００pxを描画し、そのあと余った部分を1:2で分ける

## repeat()
```css
.wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
```
↕　同じ意味
```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
```
repeatしたい回数、frで決めている

repeat(5, 1fr 2fr);　だと1fr 2frと続くトラックが５回リピートされる。計１０個となる

20px repeat(6,1fr) 20px で２０pxで挟むこともできる

### grid-auto-rowsの:minmax(100px,auto);
これautoしか使うところなくないかと

## gap
グリッドセル間の溝、路地といった隙間を作れる
```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 10px;
  row-gap: 1em;
}
```

