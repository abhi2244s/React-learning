import React from 'react'
import { useState } from 'react';

function Digital() {
    let time = new Date().toLocaleTimeString();
    const[ctime,setCtime]= useState(time)

    const UpdatedTime = ()=>{
        time = new Date ().toLocaleTimeString();
        setCtime(time)
    }
    setInterval(UpdatedTime,1000)
  return (
    <div>
        <h1>{ctime}</h1>
    </div>
  )
}

export default Digital