import logo from './logo.svg';
import React, {useEffect,useState} from "react"
import './App.css';

function App() {
  const [data,setData] = useState([])
  const getJokes = async()=>{
    const res = await fetch('https://api.chucknorris.io/jokes/random');
    const actualData = await res.json()
    console.log(actualData)
    setData(actualData)
  }
  useEffect(()=>{
     getJokes()
  },[])


  return (
    <>
    {/* <img alt = "img" src={data.icon_url}/> */}
     <p>{data.value}</p>
     <button onClick={getJokes}>Get Random</button>
    </>
  );
}

export default App;
