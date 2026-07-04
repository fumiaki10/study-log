# prevコードの書きかた

## 何で困った？
prevの書きかたがわからなかった

## 書きかたの違い
prevなし
setCount(count + 1)

count = 500
の場合setCountで更新して
setCount(count + 1)で
600が返ってくる

prevあり
setCount(prev => prev + 100)
prevは別に何でもいい
Reactが管理している直前の最新のstateを受け取って計算する書きかた

## 書きかたの例

**prevあり**
const nextPressCount = pressCount + 1
const addPoint = nextPressCount % 10 === 0 ? 300 : 100
setCount(prev => prev + addPoint)
setPressCount(nextPressCount)

**prevなし(if文だけで書く)**
const nextPressCount = pressCount + 1

if(nextPressCount % 10 === 0){
  setCount(count + 300)
}else{
  setCount(count + 100)
}
setPressCount(nextPressCount)
