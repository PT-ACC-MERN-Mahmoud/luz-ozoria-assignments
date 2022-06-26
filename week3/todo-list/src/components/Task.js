import React, { useState } from 'react'

const Task = (props) => {
    const { index, taskList, setTaskList } = props;
    
    let selectedTask = taskList[ index ];
    let taskStatus = taskList[ index ].isComplete;

    let textComplete = {
        textDecoration: "none",
    }

    let textNonComplete = {
        textDecoration: "line-through",
    }

    const checkHandler = (e) => {
        taskList[ index ].isComplete = !taskList[ index ].isComplete
        setTaskList([ ...taskList ])

    }

    const deleteHandler = (e) => {
        e.preventDefault();
        let filteredList = taskList.filter(task => taskList.indexOf(task) != index);
        setTaskList(filteredList);
    }

    return (
        <div>
            <form onSubmit = { deleteHandler }>
                <p style={taskStatus?textNonComplete:textComplete}> { selectedTask.name } <input type="checkbox" checked={ taskStatus } onChange={ checkHandler }/> <input type="submit" value="Delete"/></p>
            </form> 
        </div>
    )
}

export default Task