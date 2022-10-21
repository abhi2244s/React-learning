import React from 'react'

function New(props) {
    
  
  return (
    <div>
        <span onClick={()=>{props.onsubmit(props.id)}}>❌</span>
        <span>{props.title}</span>
    </div>
  )
}

export default New