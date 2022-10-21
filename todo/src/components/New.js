import React from 'react'

function New(props) {
   
  return (
    <div className='space-x-5'>
        <span onClick={()=>{props.onsubmit(props.id)}} className=  "cursor-pointer mx-5">❌</span>
        <span>{props.title}</span>
    </div>
  )
}

export default New