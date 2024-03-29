import './App.css';
import Home from './home';
import Overseers from './overseers';
import Docs from './documents';
import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";
import Planning from './planning';
import Org from './organization';
import Guide from './guide';

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
                 element={<Planning/>}/>
          <Route path = "docs"
                 element={<Docs/>}/>
          <Route path = "orginization"
                 element={<Org/>}/>
          <Route path = "guide"
                 element={<Guide/>}/>
        </Routes>
      </div>
      </div>

    </BrowserRouter>
  );
}
export default App;