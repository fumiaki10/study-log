```js
window.addEventListener('load', function () {
  const ItemButton = document.getElementById("flex-button id1")
  const FlexItems = document.getElementById("flex-container")

  ItemButton.addEventListener('click', function () {
    FlexItems.setAttribute("style", "display:flex;")
  })
})

```
```js
FlexItems.setAttribute("style", "display:flex;")
```
この部分がずっと（"クラス名をつける","スタイルを設定する"）
と勘違いしていた

HTMLの書きかたで、cssをHTML上で付与する場合は

<div style=""><div>

みたいに書くもんだと

だからstyleくっつけて中身はdisplay:flex;

っていう書きかただった