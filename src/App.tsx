import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [pressCount, setPressCount] = useState(0)

  const handlePlus = () => {
    setCount(count + 100)
    setPressCount(pressCount + 1)
  }

  const handleMinus = () => {
    const nextCount = count - 100
    if (nextCount < 0) {
      setCount(0)
    } else {
      setCount(nextCount)
    }

    setPressCount(pressCount + 1)
  }

  return (
    <div>
      <h2>カウントを上げていくボタン</h2>
      <div className="button-counter">
        <button
          className="plus-button"
          onClick={
            handlePlus
          }>
          +ボタン
        </button>
        <button
          className="minus-button"
          onClick={
            handleMinus
          }
        >
          -ボタン

        </button>
        <div className="counter">{count}</div>
        <div className="pressCount">{pressCount}</div>
      </div>

    </div>

  )
}

export default App