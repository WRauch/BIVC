import './App.css';
import Home from './home';
import Meetings from './meetings';
import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";

function App() {
  return (
    <BrowserRouter>
    <div className='bg-dark min-vh-100'>

      <div className="container">
        <Routes>
          <Route path = "/*"
                 element={<Home/>}/>
          <Route path = "meetings"
                 element={<Meetings/>}/>
        </Routes>
      </div>
      </div>

    </BrowserRouter>
  );
}
export default App;