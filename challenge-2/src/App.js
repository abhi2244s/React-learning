import logo from './logo.svg';
import './App.css';

function App() {
  const date = new Date().toLocaleDateString();
  const time = new Date().toLocaleTimeString();
  return (
   <>
    <h1>Abhishek Singh</h1>
    <h3>
      Current Date is : {date}
    </h3>
    <h3>
      Current time is : {time}
    </h3>
   </>
  );
}

export default App;
