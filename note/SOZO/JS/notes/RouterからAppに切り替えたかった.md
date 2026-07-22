ReactRouterを勉強してページが変わっていたから、前のAppの学習用ページに切り替えたかった
* このへんでDB処理にしてしまって、URLつけるか悩んだ

### こうしたらできた 
```tsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import RouterApp from './routerApp.tsx'
import App from './App';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <RouterApp /> */}
    <App />
  </StrictMode>,
)

```
### 驚いた点
```tsx
import {App} from './App';
```
だと表示されなかった
```tsx
import App from './App';
```
だといけた

###　悩み解決
デフォルトエクスポートと名前付きエクスポートの違いだった
{}これは名前付きエクスポートを読み込むときのやつ

export default Appで出していたから今回はいらんかった

{}ついてるとconst exportとかになる。特定の関数とかexportするときに使っている


あと普通に重複できた
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