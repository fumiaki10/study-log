import { BrowserRouter, Link, Routes, Route } from "react-router-dom";

import { Home } from './components/react-router/Home'
import { Page1 } from './components/react-router/Page1'
import { Page2 } from './components/react-router/Page2'
import { Page3 } from './components/react-router/Page3'

function RouterApp() {
  return (
    <BrowserRouter>
      <div className="App">
        <Link to='/'>Home</Link>
        <br />
        <Link to='/page1'>Page1</Link>
        <br />
        <Link to='/page2'>Page2</Link>
        <br />
        <Link to='/page3'>Page3</Link>
        <br />

        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/Page1" element={<Page1 />} />
          <Route path="/Page2" element={<Page2 />} />
          <Route path="/Page3" element={<Page3 />} />


        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default RouterApp