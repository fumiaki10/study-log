## ボタンを押す⇒遷移みたいな表現するときの候補
**1.Next.js**
* Reactのフレームワーク
* railsのようなページのフルリロードに近づけたい
* SEOを強く意識する場合お勧め
* about.jsやcontact.jsなどファイルを作ると自動的に/about /contactなどのページとして機能する
* 体感はrailsに近くなる
**2.React router**
* react-router-domというライブラリ
* URLが変わると、それに対応するコンポーネントだけを入れ替えて表示する

## どっちの方がいいみたいな
React routerは導入が楽

yarn add react-router-domでパッケージのインストールができる


## つまずいたところ
```
PS C:\Users\fumia\MyProjects\study-log> yarn add react-router-dom
yarn: The term 'yarn' is not recognized as a name of a cmdlet, function, script file, or executable program.
Check the spelling of the name, or if a path was included, verify that the path is correct and try again.
```
yarnがインストールされてないという構文

もしくは環境変数が反映されていない

node.js入っているのでnpm install react-router-dom
した

###　yarnとnpmの違い
yarnの方が圧倒的高速かつ安全性が高い時代があったが、最近はあまりない

機能的な差がなくなってきている

### yarnを使う主なメリット
* installの安全性
yarn.lockの仕組みが昔優秀だったが、package-lock.jsonで同じようなことができる
* コマンドが少し短い
npm install        ⇔　　yarn

このくらいの差
* 大規模開発の効率
物レポという高度な開発に置いてyarn,Yarn v2が強い

**react routerの学習段階なのでいったんnpmで進める**