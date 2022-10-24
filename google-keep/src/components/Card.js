import React from 'react'

function Card(props) {
    const deleteItem = ()=>{
     props.onsumbit(props.id)
    }
  
  return (
    <>
        <div>
            <he>{props.title}</he>

            <h3>{props.titles}</h3>
        <button onClick={deleteItem}>❌</button>
    </div>
    
    </>

  )
}

export default Card