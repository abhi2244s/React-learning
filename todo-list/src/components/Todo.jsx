import React from 'react'
import { useState } from 'react'
import New from './New'

function Todo() {
  const[list,setLsit]= useState("")
  const [todo,setTodo]= useState([])

  const addTodo = (event)=>{
    setLsit(event.target.value)

  }
  const update = ()=>{
     setTodo((oldvalue)=>{
        return[...oldvalue,list]
     })
     setLsit("")
  }
  const Del = (id)=>{
    console.log('deleted')
    setTodo((oldvalue)=>{
        return oldvalue.filter((arr,index)=>{
            return index!==id;
        })
    })
   }


  return (
    <div>
        <h1>Todo List</h1>
        <input placeholder='add todo' onChange={addTodo}
        value = {list}/>
        <button onClick={update}>➕</button>
        <div>
        
            {todo.map((item,index)=>{
                return <New title= {item}
                key = {index}
                id = {index}
                onsubmit = {Del}
                />
              
            })}
        </div>
    </div>
    
  )
}

export default Todo