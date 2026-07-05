#　子から親へpropsの受け渡し

## どこが難しかった
処理の流れを覚えるのが難しい
頭に入らない

## 実際の処理の流れ見ないで書いてみる
```jsx
function Parent(){
  const [changeText,setChangeText] = useState("まだ押してないよ")
  return(
    <div>
      <Child  setChange={handleChange}/>
    </div>
  )
}



function Child(props){
  return(
    <button onChange=setChange({handleChange})>押すと変わるボタン</button>
  )
}

```
## 修正点
onChangeはテキスト入力欄に文字がうちこまれた時に使うイベント
onClickと間違えている

子にhandleChangeを渡しているが、肝心のhandleChangeという関数がそもそもない
親から処理情報を渡す
setChange={handleChange}
⇓
<TextChange ~~~~={handleChange}/>

const handleChange = (data) => {
  setChangeText(data);
};
こうすると返ってきた変数がdataに引数として入る⇒setChangeText(data)このdataに入れられる
結果更新される

<button onClick = {() => props.onSendMessage("子から来ました")}>親の文字を変えるボタン</button>

## 再度書きなおし
```jsx
import {useState} from 'react'
import Child from './components/Child'
function Parent(){
  const [changeText,setChangeText] = useState("まだ押されていない")
  const handleChange = (data) => {
    setChangeText(data)
  };

  return(
    <div>
    <h1>親のテキスト{changeText}<h1/>

    <Child onSendMessage={handleChange}/>
    </div>
  );
}

export default Parent
```
```jsx
function Child(props){
  return(
  <button onClick = {() => props.onSendMessage("子から来ました")}>親の文字を変えるボタン</button>
  );
}

export default Child
```

```
## コンポーネントの流れとして
<TextChange />⇒これをくれってなってる
<TextChange　onSendMessage={handleChange} />この型を利用して作ってくれ
<TextChange　
onSendMessage={handleChange} 
sendText="Aから来ました"
text="ボタンA"
/>こういう情報も使ってくれ、使っていいよ

子の方で利用
<button onClick={() => props.onSendMessage=(props.sendText)>
{props.text}
</button>
⇓
この状態で返すよ
⇓
TextChangeがこれになる


```

## 気づいたこと
```
最初
親が子に情報を与え注文

⇓

子が型にはめて親に返す
この際、子が情報を持って親に送り返す状態がある
onSendMessage=("子から来ました")
<button>親の文字を変えるボタン</button>

次のパターン
親が子にすべて、情報を渡す

⇓

子が型にはめて親に返す
この時使っている情報はすべて親から来た情報

text="Aボタン"
SendText="Aボタンから来ました"
```