import { useEffect, useState } from 'react'
import '../assets/Timer.css'

function Timer() {

  const [countTimer, setCountTimer] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCountTimer((prevCount) => prevCount + 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [])

  return (
    <>
      <div className="timer-content">

        <div className="main-count">
          <div className="count-timer">{countTimer}</div>
        </div>

        <div className="numbers">
          <div className="timers-button">
            <button className='timer-button' onClick={() => setCountTimer(countTimer + 1)}>+1秒</button>
            <button className='timer-button' onClick={() => setCountTimer(countTimer - 1)}>-1秒</button>
            <button className='timer-button' onClick={() => setCountTimer(countTimer + 60)}>+1分</button>
            <button className='timer-button' onClick={() => setCountTimer(countTimer - 60)}>-1分</button>
            <button className='timer-button' onClick={() => setCountTimer(countTimer + 3600)}>+1時間</button>
            <button className='timer-button' onClick={() => setCountTimer(countTimer - 3600)}>-1時間</button>
          </div>
        </div>

      </div>
    </>
  )
}

export default Timer