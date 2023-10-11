import './App.css';
import Home from './home';
import Overseers from './overseers';
import Docs from './documents';
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
          <Route path = "overseers"
                 element={<Overseers/>}/>
          <Route path = "planning"
                 element={<Overseers/>}/>
          <Route path = "docs"
                 element={<Docs/>}/>
        </Routes>
      </div>
      </div>

    </BrowserRouter>
  );
}
export default App;