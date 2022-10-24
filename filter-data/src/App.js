import logo from './logo.svg';
import './App.css';
import Searche from './Searche';
import { useState } from 'react';

function App() {
  const [data,setData] = useState('')
  const inputHandler = (event)=>{
    const set = event.target.value
    setData(set)
  }
  return (
    <>
     <h1>Filter</h1>
     <input type = "text" onChange = {inputHandler}
     value = {data}/>
     <div>
    <Searche
    img = {data}
    />
     </div>
    </>
  );
}

export default App;
