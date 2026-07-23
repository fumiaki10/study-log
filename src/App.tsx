import { useState } from 'react'
import './App.css'
import CountUp from './components/CountUp'
import TextChange from './components/TextChange'
import Timer from './components/Timer'
import GridItem from './components/GridItem'

function App() {


  const [message, setMessage] = useState("まだ押されていません");

  const handleUpdate = (childData: string) => {
    setMessage(childData);
  };





  return (
    <div>
      {/* <div>
        <h1>React学習用</h1>
        <CountUp />

        <h1>親の画面: {message}</h1>
        <TextChange
          text="Aボタン"
          SendText="Aボタンから来ました"
          onSendMessage={handleUpdate} />

        <TextChange
          text="Bボタン"
          SendText="Bボタンから来ました"
          onSendMessage={handleUpdate} />
      </div>

      <div>
        <Timer />
      </div> */}
      <div>
        <GridItem />
      </div>

    </div>
  );
}

export default App