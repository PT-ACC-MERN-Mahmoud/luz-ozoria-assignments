import React, { useState } from 'react'

const Input = ( props ) => {

    const { taskList, setTaskList } = props;
    const [ taskName, setTaskName ] = useState("");

    const inputHandler = (e) => {
        setTaskName(e.target.value);
    }

    const formHandler = (e) => {
        e.preventDefault();
        let newTask = {name: taskName,isComplete: false}
        setTaskList([...taskList,newTask]);
        setTaskName("");
    }

    return (
        <div>
            <form onSubmit = { formHandler }>
                <div>
                    <input type="text" onChange={ inputHandler } name="task" value={taskName}/>
                </div>
                <input type="submit" value="Submit"/>
            </form>
            
        </div>
    )
}

export default Input
