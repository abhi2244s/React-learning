import logo from './logo.svg';
import './App.css';
import SlotMachine from './components/SlotMachine';


function App() {
  return (
    <>
    <div>
        <h1>🎰 Welcome to Slot Machine Game 🎰</h1>
          <SlotMachine
          x = '😄'
          y = '😄'
          z = '😄'
          />
          <SlotMachine
          x = '🍌'
          y = '🍎'
          z = '😄'
          />
    </div>
       
    </>
  );
}

export default App;
