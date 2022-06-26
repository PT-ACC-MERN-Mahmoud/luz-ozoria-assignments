import './App.css';
import React, {useState} from 'react';
import BoxForm from './components/Generator';
import Display from './components/Display';

function App() {
  const [allBoxes, setAllBoxes] =useState([])

  const addBox = (box) => {
    console.log(box);
    const addBox = [...allBoxes]
    addBox.push(box);
    setAllBoxes(addBox)
  }

  return (
    <div className="App">
      <BoxForm addBox={addBox}/>
      <Display allBoxes={allBoxes}/>
    </div>
  );
}

export default App;
