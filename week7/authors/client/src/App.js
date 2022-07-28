import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';

import Authors from './components/Authors';
import NewAuthor from './components/NewAuthor';
import EditAuthor from './components/EditAuthor';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Authors/>}/>
          <Route path='/new' element={<NewAuthor/>}/>
          <Route path='/edit/:id' element={<EditAuthor/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;