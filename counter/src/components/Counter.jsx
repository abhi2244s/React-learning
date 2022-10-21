import React from 'react'
import { useState } from 'react'


function Counter() {
    const[count,setCount]= useState(0)
    const Increment = ()=>{
        setCount(count+1)
    }
    // setInterval(Increment,1000)
    const Decrement = ()=>{
       
        if(count>0){
         
            setCount(count-1)
        }
        else{
            alert("you reacher at zero")
        }
    }
  return (
    <div className='border border-solid bg-white w-[300px] h-[300px]'>
        <div className='bg-cyan-700 h-[40px] border border-solid border-cyan-700 rounded text-center mt-16'>
            <h1 className=' text-3xl'>{count}</h1>
        </div>
        <div className='text-center space-x-3 mt-12'>
            <button className='border p-2 px-6 bg-indigo-400 rounded' onClick={Increment}>Increment</button>
            <button className='border p-2 px-6 bg-indigo-400 rounded 'onClick={Decrement}>Decrement</button>
        </div>
    </div>
  )
}

export default Counter