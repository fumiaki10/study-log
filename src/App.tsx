import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [pressCount, setPressCount] = useState(0)


  const handlePlus = () => {
    const nextPressCount = pressCount + 1
    const addPoint = nextPressCount % 10 === 0 ? 300 : 100
    setCount(prev => prev + addPoint)
    setPressCount(nextPressCount)
  }




  const handleMinus = () => {
    setCount(prev => Math.max(prev - 100, 0))
    setPressCount(prev => prev + 1)
  }

  const iconCount = Math.floor(pressCount / 10)

  return (
    <div>
      <h2>カウントを上げていくボタン</h2>
      <div className="button-counter">
        <button className="plus-button" onClick={handlePlus}>
          +ボタン
        </button>
        <button className="minus-button" onClick={handleMinus}>
          -ボタン
        </button>
        <div className="counter">{count}</div>
        <div className="pressCount">{pressCount}</div>
      </div>

      <div className="icon">
        {Array.from({ length: iconCount }).map((_, index) => (
          <span key={index}>★</span>
        ))}
      </div>
    </div>
  )
}

export default App
