import logo from './logo.svg';
import './App.css';
import Input from './components/Input';
import Header from './components/Header';
import Card from './components/Card';
import { useState } from 'react';

function App() {
  const [add,setAdd]= useState([]);
  const addItem = (note)=>{
   setAdd((old)=>{
    return [...old,note]
   })
  }
  const deleted = (id)=>{
    setAdd((val)=>{
      return val.filter((arr,index)=>{
        return index!==id;
      })
    })
  }
  return (
    
   <>
   <Header/>
   <Input
   passnote = {addItem}/>
   {add.map((items,index)=>{
    return <Card
    title = {items.title}
    titles = {items.content}
    key = {index}
    id = {index}
    onsumbit = {deleted}/>
   })}
 
   </>
  );
}

export default App;
