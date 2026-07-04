import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [pressCount, setPressCount] = useState(0)

  const [iconCounter, setIconCounter] = useState(0)

  const handlePlus = () => {
    const nextPressCount = pressCount + 1

    let nextCount = count + 100

    if (nextPressCount % 10 === 0) {
      nextCount += 200
      setIconCounter(iconCounter + 1)
    }
    setCount(nextCount)
    setPressCount(nextPressCount)
  }

  const handleMinus = () => {
    const nextPressCount = pressCount + 1
    let nextCount = count - 100

    if (nextCount < 0) {
      nextCount = 0
    }
    if (nextPressCount % 10 === 0) {
      setIconCounter(iconCounter + 1)
    }
    setCount(nextCount)
    setPressCount(nextPressCount)
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

      <div className="icon">
        {Array.from({ length: iconCounter }).map((_, index) => (
          <span key={index}>★</span>
        ))}
      </div>

    </div>

  )
}

export default App