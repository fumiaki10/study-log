import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h2>カウントを上げていくボタン</h2>
      <div className="button-counter">
        <button className="button" onClick={() => setCount(count + 100)}>
          ボタン
        </button>
        <div className="counter">{count}</div>
      </div>

    </div>

  )
}

export default App