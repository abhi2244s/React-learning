import React, { useState } from 'react'
import New from './New'

function Todo() {
    const[inputlist,setInputlist]= useState("")
    const[list,setList] = useState([])
    const inputHandler = (event)=>{
        setInputlist(event.target.value)
    }
    const addTodo = ()=>{
       setList((oldvalue)=>{
         return[...oldvalue,inputlist]

       })
       setInputlist('')
    }
    const del = (id)=>{
     setList((oldvalue)=>{
         return oldvalue.filter((arr,index)=>{
            return index!==id;
         })
     })
    }
  return (
    <>
    <section className='text-center'>
            <div>
                <h1 className='text-center'>Todo List</h1>
            </div>
            <div className='m-5 space-x-6'>
                
                <input type = "text" className='bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="add todo" required>'
                onChange={inputHandler} placeholder = "add todo"
                value={inputlist}/>
                
                
                <button onClick={addTodo}>➕</button>
                
            </div>
            <div>
                {/* <li>{inputlist}</li> */}
                {
                    list.map((items,index)=>{
                        return <New
                        title = {items}
                        key = {index}
                        id = {index}
                        onsubmit = {del}
                        />
                    })
                }
            </div>
    </section>
    
    </>
   
  )
}

export default Todo