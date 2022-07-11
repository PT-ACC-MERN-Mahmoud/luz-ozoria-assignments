import './App.css';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Home from "./components/Home";
import Params from "./components/Params";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/:value" element={<Params />}/>
        <Route path="/:value/:text/:background" element={<Params />}/>

      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
