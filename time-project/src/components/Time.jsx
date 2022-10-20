import React from 'react'
import { useState } from 'react'

function Time() {
    let time = new Date().toLocaleTimeString();
    const[curtime,setCurtime] = useState(time)
    const Details = ()=>{
        time = new Date() .toLocaleTimeString();
        setCurtime(time)
    }
  
  return (
    <div>
      <h1>{curtime}</h1>
      <button onClick={Details}>Get time</button>
    </div>
  )
}

export default Time