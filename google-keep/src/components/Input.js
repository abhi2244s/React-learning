import React, { useState } from 'react'


function Input(props) {

    const[note,setNote]= useState({
        title : "",
        content : "",
    })
    const inputhandler =(event)=>{
        const{name,value} = event.target;
        setNote((prev)=>{
            return{
                ...prev,
                [name]:value,
            }
        })

    }
    const addEvent = ()=>{
      props.passnote(note)
      setNote({
        title : "",
        content : "",
      })
    }
  return (
    <>
       <div>
        <div>
        <input type = "text" placeholder='add' onChange={inputhandler}
        value = {note.title}
        name = "title"/>
        </div>
        <textarea placeholder='item' onChange={inputhandler}
        value = {note.content}
        name = "content"></textarea>
        <button onClick={addEvent}>➕</button>
       </div> 
    </>
  
    
  )
}

export default Input