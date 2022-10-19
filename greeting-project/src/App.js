import logo from './logo.svg';
import './App.css';

function App() {
  let curDate = new Date()
  curDate = curDate.getHours(2022,10,10,20);
  let greeting = ""
  const cssColor= {}
  if(curDate>=1 && curDate<12){
    greeting = "Good Morning"
    cssColor.color = "Green"
  }
  else if (curDate>=12 &&curDate<19){
    greeting = "Good Afternoon"
    cssColor.color = "Blue"
  }
  else{
    greeting = "Good Night"
    cssColor.color = "Orange"
  }
  return (
     <>
       <h1>Hello Abhishek, <span style ={cssColor}>{greeting}</span></h1>
     </>
  );
}

export default App;
