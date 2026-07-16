```html
  <button class="flex-button" id="flex-button id1">切り替えボタン</button>
```



```js
window.addEventListener('load', function () {
  const ItemButton = document.getElementById("id1")

  ItemButton.addEventListener('click', function () {
    console.log("click NOW")
  })
})

```

htmlのidを拾って来ようとしたが、全部取得しなかった結果読み込んだけどないみたいな結果が返ってきた

⇓

ので
```js
window.addEventListener('load', function () {
  const ItemButton = document.getElementById("flex-button id1")

  ItemButton.addEventListener('click', function () {
    console.log("click NOW")
  })
})

```
にして全部取得してきた