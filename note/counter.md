# どうやって10回ボーナスのコードを書こうか

## 何で困った？
+ボタンを押すとカウントは増えるんだが、10回ボーナスが入らない、反映されない

## 原因
setCountを二回呼んでいた
pressCountは押す前の回数⇒pressCount % 10 = 0にすると0もカウントされてずれる

## 解決
次の回数を予約
nextPressCount = pressCount + 1で先に予約を作る
nextCount をif文でまとめて最後にsetCount(nextCount)にする

## 一言でいうと
Reactのstateはその場ですぐ変わらない。次の値を変数で作ってからset

## 次に同じ場面で見るコード
const nextPressCount = pressCount + 1
let nextCount = count + 100

if (nextPressCount % 10 === 0) {
  nextCount += 200
}

setCount(nextCount)
setPressCount(nextPressCount)