import logo from './logo.svg';
import './App.css';
import Accordion from './componenets/Accordion';
import AccordionData from './componenets/AccordionData';

function App() {
  return (
    <>
    <section className="border border-solid w-[500px]  text-center mx-auto bg-white border border-solid border-white rounded shadow-lg">
      <main className='m-5 '>
      <div>
                <h1>React Question</h1>
        </div>
        {AccordionData.map((items)=>{
          return  <Accordion
          key={items.id}
          question = {items.question}
          answer = {items.answer}
          />
          
        })}
      </main>
        
    </section>
       
    </>
  );
}

export default App;
