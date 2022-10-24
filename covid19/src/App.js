
import React,{useEffect,useState} from "react"
import './App.css';

function App() {
  const[data,setData]= useState([])

  const getCovid = async ()=>{
  const res = await fetch('https://api.apify.com/v2/key-value-stores/tVaYRsPHLjNdNBu7S/records/LATEST?disableRedirect=true')
  const actualData = await res.json();
  setData(actualData)
  console.log(actualData)
  }
  useEffect(()=>{
   getCovid()
  },[])
  return (
    <>
     <h1>India</h1>
    
      {data.map((val,index)=>{
        return(
          <div className="bg" key={index}>
            <h3>{val.country}</h3>
            <p>{val.recovered}</p>
            <p>{val.deceased}</p>
          </div>
        )
      })}
    
    </>
  );
}

export default App;
