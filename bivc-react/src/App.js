import './App.css';
import Home from './home';
import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";

function App() {
  return (
    <BrowserRouter>
    <div className='bg-dark'>

      <div className="container">
        <Routes>
          <Route path = "/*"
                 element={<Home/>}/>
        </Routes>
      </div>
      </div>

    </BrowserRouter>
  );
}
export default App;