### main.jsxやApp.jsxをとおしてindexに表示しているのはなぜか
* 切り分けることで役割の分離
```
index.html：ただの「空っぽの箱（入れ物）」です。
main.jsx：Reactを起動して、その箱に「画面をはめ込む」だけの仕事人です。
App.jsx：実際の「画面の中身（ボタンやテキストなど）」を作る主役です。
```
* viteが管理しやすい

###　流れ
rootフォルダのindex.html
```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>study-log</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>

```
```html
 <script type="module" src="/src/main.tsx"></script>
```
ここで読み込む
```tsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import RouterApp from './routerApp.tsx'
import App from './App';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterApp />
    <App />
  </StrictMode>,
)

```
ここの内容
```tsx
import { useState } from 'react'
import './App.css'
import CountUp from './components/CountUp'
import TextChange from './components/TextChange'
import Timer from './components/Timer'

function App() {


  const [message, setMessage] = useState("まだ押されていません");

  const handleUpdate = (childData: string) => {
    setMessage(childData);
  };





  return (
    <div>
      <div>
        <h1>React学習用</h1>
        <CountUp />

        <h1>親の画面: {message}</h1>
        <TextChange
          text="Aボタン"
          SendText="Aボタンから来ました"
          onSendMessage={handleUpdate} />

        <TextChange
          text="Bボタン"
          SendText="Bボタンから来ました"
          onSendMessage={handleUpdate} />
      </div>

      <div>
        <Timer />
      </div>


    </div>
  );
}

export default App
```
ここだったり、他にも読込先があれば読む

バケツリレーしている