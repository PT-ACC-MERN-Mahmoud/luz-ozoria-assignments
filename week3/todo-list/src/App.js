import React, { useState } from 'react';
import './App.css';
import Input from './components/Content';
import Task from './components/Task';

function App() {

    const [taskList, setTaskList] = useState([]);

    return (
        <div>
          <div>
          <h2>Todo List</h2>
            <h4>Add New Task:</h4>
            <Input taskList={taskList} setTaskList={setTaskList} ></Input>
          </div>
          <div>
            <h4>Pending Tasks:</h4>
            { taskList.map((task,i) => 
              <Task key={i} index = {i} taskList={taskList} setTaskList={setTaskList} ></Task>
            )}
          </div>
        </div>
    );
}

export default App;