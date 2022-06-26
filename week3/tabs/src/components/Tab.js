import React from 'react'

const Tab = (props) => {
    
    const {tab,index,setIndex} = props;
    const {label,content} = tab;

    const tabClicked = (e, index) => {    
        setIndex(index);

    }
    return (
        <>
            <button onClick = { e => tabClicked(e, index) }>{label}</button>
        </>
    )
}
export default Tab