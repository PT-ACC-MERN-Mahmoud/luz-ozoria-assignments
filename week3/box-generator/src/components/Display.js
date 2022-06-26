import React from 'react';

const Display = (props) => {
  return (
    <div>
        { props.allBoxes.map( (box,index) => {
            return (
                <div key={index} style={{backgroundColor: box.backgroundColor, width: box.width, height: box.height, display:'inline-block', margin: '20px'}}>{box.backgroundColor}</div>
        )
        })
    }
    </div>
  )
}

export default Display