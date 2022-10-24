
import './App.css';
import Navabr from './components/Navbar';
import IntroPorgramming from './components/IntroProg';
import Course from './components/CourseOverview';
import Learn from './components/HowToLearn';
import Data from './components/Data';
import Footer from './components/Footer';
import FinishCourse from './components/FinishCourse';
import FinishCourseData from './components/FinishCourseData';
import AccordionData from './components/AccordionData';
import Accordion from './components/Accodion';


function ncard(val){
  return (
    <>
      <Footer 
       id = {val.id}
       title = {val.title}
       a1 = {val.a1}
       a2 = {val.a2}
       a3 = {val.a3}
       a4 = {val.a4}
      />
    </>
  )
}
function nval(elem){
  return(
    <>
     <FinishCourse
      id = {elem.id}
      img = {elem.img}
      title = {elem.title}
      heading = {elem.heading}
     />
    </>
  )
}
function Accdata(element){
  return(
    <>
     <Accordion
     id= {element.id}
     basic = {element.basic}
     variable = {element.variable}
     h1 = {element.h1}
     pointer = {element.pointer}
     code = {element.code}
     printing = {element.printing}
     />
    </>
  )
}
function App() {
  const date = new Date().getFullYear();
  return (
    
    <>
    <Navabr/>
    <IntroPorgramming/>
    <Course/>
    <Learn/>
    <div className='container mx-auto w-5/6 mt-12'>
      <div>
        <h1 className='text-[28px] font-bold leading-[40px]'>Course Content</h1>
      </div>
    <section className='gird grid-cols-1 divide-y mt-8'>
    {AccordionData.map(Accdata)}
    </section>
    </div>

  
    <div>
      <div className='container mx-auto w-5/6 mt-12'>
        <h1 className='text-[24px] font-bold leading-[33px]'>
        Recommended after you finish this course
        </h1>
      </div>
      <section className='w-5/6 container mx-auto grid lg:grid-cols-3 gap-4 md:grid-cols-2 grid-cols-1 mt-5'>
      {FinishCourseData.map(nval)}
    </section>
    </div>
  
    <div className=' mt-12 bg-[#14142F]'>
      <div className='container mx-auto w-5/6 md:pt-20 pt-12'>
      <div className="flex">
              <svg fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" height="26px" className="text-logo dark:text-white"><path d="M333 0H67A67 67 0 000 67v266a67 67 0 0067 67h266a67 67 0 0067-67V67a67 67 0 00-67-67zm29 325a37 37 0 01-37 37H75a37 37 0 01-37-37V162h324zm0-201H38V75a37 37 0 0137-37h250a37 37 0 0137 37z"></path><rect x="68" y="63" width="38.1" height="38.1" rx="2.4"></rect><rect x="126" y="63" width="38.1" height="38.1" rx="2.4"></rect><rect x="184" y="63" width="38.1" height="38.1" rx="2.4"></rect><rect x="200" y="295" width="114.3" height="38.1" rx="3.3"></rect><path d="M109 331a3 3 0 005 0l61-68a3 3 0 001-4l-59-69a3 3 0 00-4-1l-20 17a3 3 0 00-1 5l40 47a3 3 0 010 4l-43 47a3 3 0 001 4z"></path></ svg>
              <a href="#" className="text-[22px] font-medium leading-[21px] pt-1 px-1 text-white">educative</a>
              </div>
      </div>
      <div className='container mx-auto w-5/6 mt-5'>
        <p className='text-[26px] font-normal leading-[22px] text-white'>Learn in-demand tech skills in half the time</p>
      </div>
      <div className='border-b container mx-auto w-5/6 mt-5'></div>
     
      <section className='grid lg:grid-cols-4 gap-6  grid-cols-2 container mx-auto w-5/6 mt-8'>
      {Data.map(ncard)}
      </section>
      <div className='border-b container mx-auto w-5/6 mt-5'>

      </div>
      <div className='container mx-auto w-5/6 flex justify-between mt-5 md:flex-row flex-col'>
        <div>
          <h1 className='text-[22px] text-white'>Social Links</h1>
        </div>
        <div>
          <p className='text-[12px] font-semibold text-[#92AB94]'>Copyright ©{date} Educative, Inc. All rights reserved.</p>
        </div>

      </div>
    </div>
 
    </>
  );
}

export default App;
