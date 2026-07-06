import { useEffect, useState } from 'react'
import '../assets/Timer.css'

function Timer() {

  const [countTimer, setCountTimer] = useState(0)
  const [isActive, setIsActive] = useState(false)



  useEffect(() => {
    const intervalId = setInterval(() => {
      if (isActive === true) {
        setCountTimer((prevCount) => {
          if (prevCount <= 1) {
            setIsActive(false);
            return 0
          }
          return prevCount - 1
        });
      }
    }, 1000);

    return () => clearInterval(intervalId);

  }, [isActive])

  return (
    <>
      <div className="timer-content">

        <div className="main-count">
          <div className="count-timer">{countTimer}秒</div>
        </div>

        <div className="numbers">
          <div className="timers-button">
            <button className='timer-button' onClick={() => setCountTimer((prev) => prev + 1)}>+1秒</button>
            <button className='timer-button' onClick={() => setCountTimer((prev) => prev > 0 ? prev - 1 : 0)}>-1秒</button>
            <button className='timer-button' onClick={() => setCountTimer((prev) => prev + 60)}>+1分</button>
            <button className='timer-button' onClick={() => setCountTimer((prev) => prev >= 60 ? prev - 60 : 0)}>-1分</button>
            <button className='timer-button' onClick={() => setCountTimer((prev) => prev + 3600)}>+1時間</button>
            <button className='timer-button' onClick={() => setCountTimer((prev) => prev >= 3600 ? prev - 3600 : 0)}>-1時間</button>
          </div>
        </div>
        <button className="stop-button" onClick={() => setIsActive(true)}>
          START
        </button>
        <button className="stop-button" onClick={() => setIsActive(false)}>
          STOP
        </button>
      </div>
    </>
  )
}

export default Timer