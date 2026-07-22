## App.tsx(今回はrouterApp)
```tsx
 <BrowserRouter>
      <div className="App">
        <Link to='/'>Home</Link>
        <br />
        <Link to='/page1'>Page1</Link>
        <br />
        <Link to='/page2'>Page2</Link>
        <br />
        <Link to='/page3'>Page3</Link>
        <br />

        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/Page1" element={<Page1 />} />
          <Route path="/Page2" element={<Page2 />} />
          <Route path="/Page3" element={<Page3 />} />


        </Routes>

      </div>
    </BrowserRouter>
```
* BrowserRouterを使うことで、Reactアプリにルーティングを導入する

ルーティング：ユーザーがブラウザに入力したURL（またはアプリ内のページ遷移）に応じて、**どのUIコンポーネントを表示するか**を切り替える仕組み

**ポイント**
* BrowserRouter:URLの変更を監視、対応するコンポーネントを表示
* routes:複数のルートをまとめるためのコンテナ
* Route:pathに一致するURLが呼ばれると、指定したコンポーネントを表示
```tsx
<Route path="/" element={<Home />} />
```

* Link：aタグの代わりに使う。ページ全体をリロードせずに画面遷移が可能になる
```tsx
<Link to='/'>Home</Link> 
```

## URLパラメータの利用
```tsx
import { useParams } from 'react-router-dom';

function UserProfile() {
  const { id } = useParams(); // URLからidを取得
  return <h1>User ID: {id}</h1>;
}
```
```tsx
<Routes>
  <Route path="/user/:id" element={<UserProfile />} />
</Routes>
```
ユーザーIDなどのパラメータを渡すルートを作成できる

## ４０４ページの設定
```tsx
function NotFound() {
  return <h1>404 - Page Not Found</h1>;
}

<Routes>
  <Route path="*" element={<NotFound />} />
</Routes>
```
* Route path='*' で全ページ対応

## ネストされたルートの実装
```tsx
import { Outlet } from 'react-router-dom';

function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <Outlet /> {/* 子ルートがここにレンダリングされる */}
    </div>
  );
}

<Routes>
  <Route path="dashboard" element={<Dashboard />}>
    <Route path="settings" element={<h2>Settings</h2>} />
  </Route>
</Routes>
```

## ナビゲーション
```tsx
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  const goToAbout = () => {
    navigate('/about');
  };

  return <button onClick={goToAbout}>Go to About</button>;
}

export default Home;
```
