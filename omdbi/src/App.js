import logo from './logo.svg';
import React, {useEffect,useState} from 'react'
import './App.css';
import Card from './Card';
function App() {
  const[data,setData] = useState('titanic')
  const[movie,setMovie]= useState([])
  const API = ("https://www.omdbapi.com/?apikey=1505b45b")

  const getMovies = async(url)=>{
   const res = await fetch(url);
   const actualData = await res.json();
   const finalData = actualData.Search;
   setMovie(finalData)
  
  }
  // console.log(data)
  // console.log(movie)
  useEffect(()=>{
   getMovies(`${API}&s=${data}`)
  },[data])
  
  return (
    
    <>
   <h1>Movies</h1>
   <input type= "text" placeholder='search' onChange={(e)=>setData(e.target.value)}
    value = {data}/>
   <div>
    {movie.map((item)=>{
      return (
        <Card
        key = {item.imdbID}
        title = {item.Title}/>
      )
    })}
   </div>
      
    </>
  );
}

export default App;
