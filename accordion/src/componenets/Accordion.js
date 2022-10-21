import React, { useState } from 'react'
function Accordion(props) {
    const[show,setShow] = useState(false)
    const showItems = ()=>{
        setShow(!show)
    }

  return (
    <div className=''>
      
        <div className='flex space-x-5 mt-5 jsutify-between text-center mx-auto border border-solid border-emerald-300 rounded p-2'>
            <div>
                <h1 onClick={showItems} className="cursor-pointer">{show?"➖":"➕"}</h1>
            </div>
            <div>
                <h2>{props.question}</h2>
            </div>
        </div>
        <div className='   '>
            {show&&   <p className='bg-red-400 p-2 rounded'>{props.answer}</p>}
          
        </div>
    </div>
  )
}

export default Accordion