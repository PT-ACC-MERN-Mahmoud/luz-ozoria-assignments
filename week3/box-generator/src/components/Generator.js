import React, { useState } from 'react';

const BoxForm = ( {addBox} ) => {
    const [ box, setBox ] = useState ({
        backgroundColor: "",
        height: '125px',
        width: '125px',
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        addBox(box);
        e.target.reset();
    }

    const onChange = (e) => {
        setBox({
            ...box,
            backgroundColor: e.target.value
        })
    }

    return (
        <div>
            <form onSubmit={ handleSubmit }>
                <label>Color:</label>
                <input text="text" onChange={onChange} value={box.backgroundColor}/>
                <button className='button'>Submit</button>
            </form>
        </div>
    )
}

export default BoxForm