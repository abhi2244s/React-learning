import logo from './logo.svg';
import './App.css';
import Data from './components/CardData';
import Card from './components/Card';

function App() {

  return (
        
        <>
           <h1 className='text-center mt-3'>Netflix Series</h1>
           <div className='container mt-5'>
            <div className='d-flex gap-4'>
             
                      {Data.map((elem,index)=>{
                        
                        return(
                          <Card
                            key = {elem.id}
                            image = {elem.image}
                            title = {elem.title}
                            desc = {elem.desc}
                            button = {elem.button}
                          />
                        )
                      })}
     
            </div>
           </div>
        </>
  );
}

export default App;
