import React from 'react'
import { useState } from 'react'

function Forms() {
    const [name,setName] = useState("")
    const[fullname,setFullname]= useState()
    const [lastname,setLastname] = useState("")
    const[lastnamenew,setLastnamenew]= useState()

   const submit = (event)=>{
    event.preventDefault();
    setFullname(name)
    setLastnamenew(lastname)
   }
    const inputHandler = (event)=>{
    setName(event.target.value)
    }
    const inputHandler2 = (event)=>{
    setLastname(event.target.value)
    }
  return (
    <div>
        <form onSubmit={submit}>
            <h1>Hello {fullname} and password is {lastnamenew}</h1>
            <input placeholder='enter name'
             onChange={inputHandler}
             value={name}/>
            <br/>
            <input placeholder='enter password'
            onChange={inputHandler2}
            value ={lastname}/>
             <br/>
            <button type='submit'>Submit me</button>
        </form>
    </div>
  )
}

export default Forms