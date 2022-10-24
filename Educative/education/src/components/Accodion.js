import { useState } from "react"

function Accordion(props){

    const [show,setShow] = useState(false)
    return(
        <>
         <div className="flex justify-between lg:w-4/6 w-5/6 hover:bg-[#FAFAFA] p-2">
            <div>
                <h1 className="text-[18px] font-bold leading-[30px]">{props.h1}</h1>
            </div>
            <div>
                <p onClick={()=>setShow(!show)} className="cursor-pointer text-[25px] transition">{show? "-" : "+"}</p>
            </div>

         </div>
         {show && <div className="grid grid-cols-1 divide-y lg:w-4/6 w-5/6  transition-shadow ease-linear ">
            <div className="mt-5 ">
             <input type="radio"/>
             <label name = "varibale" className="mx-5 text-[16px] font-normal leading-[24px]">{props.basic}</label>
             <b/>
            </div>
            <div className="pt-5">
             <input type="radio"/>
             <label name = "basic" className="mx-5 text-[16px] font-normal leading-[24px]">{props.variable}</label>
             <b/>
            </div>
            <div className="pt-5">
             <input type="radio"/>
             <label name = "basic" className="mx-5 text-[16px] font-normal leading-[24px]">{props.pointer}</label>
             <b/>
            </div>
            <div className="pt-5">
             <input type="radio"/>
             <label name = "basic" className="mx-5 text-[16px] font-normal leading-[24px]">{props.code}</label>
             <b/>
            </div>
            <div className="pt-5">
             <input type="radio"/>
             <label name = "basic" className="mx-5 text-[16px] font-normal leading-[24px]">{props.printing}</label>
             <b/>
            </div>
      
         </div>}
         
        </>
    )
}
export default Accordion