import React from 'react'
import { useState } from 'react'

function Input() {
  const [name,setName]= useState('')
  const[fullname,setFullame] = useState()

  const InputHandler =(event)=>{
   setName(event.target.value)
 
  }
  const Update = ()=>{
     setFullame(name)
  }
  return (
    <div>
        <h1>Hello {fullname}</h1>
        <input placeholder='Enter your name' onChange={InputHandler}
        value= {name}/>
        <button onClick={Update}>Click</button>
    </div>
  )
}

export default Input