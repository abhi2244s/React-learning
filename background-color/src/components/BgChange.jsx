import React from 'react'
import { useState } from 'react'
import "./BgChange.css"

function BgChange() {
let purple = "purple"
const[bg,setBg] = useState(purple)
const [name,setName] = useState('Click Me')

const ChangeBg = ()=>{
    purple = "teal"
    setBg(purple)
    setName("Hello 😄")
}
const Double = ()=>{
    purple = "purple"
    setBg(purple)
    setName("Wow 🤗")
}

  return (
    <div style={{backgroundColor:bg}}>
        <button onClick={ChangeBg} onDoubleClick={Double}>{name}</button>
    </div>
  )
}

export default BgChange