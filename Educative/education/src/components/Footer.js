function Footer(props){
    return(
        <>
         <div >
            <h1 className="text-[14px] font-semibold text-white leading-[20px]">{props.title}</h1>
            <div className="mt-5">
                <a href="#" className="text-[14px] font-normal leading-[24px] text-[#EBEBEC]">{props.a1}</a>
            </div>
            <div className="mt-3">
                <a href="#" className="text-[14px] font-normal leading-[24px] text-[#EBEBEC]">{props.a1}</a>
            </div>
            <div className="mt-3">
                <a href="#" className="text-[14px] font-normal leading-[24px] text-[#EBEBEC]">{props.a3}</a>
            </div>
            <div className="mt-3">
                <a href="#" className="text-[14px] font-normal leading-[24px] text-[#EBEBEC]">{props.a4}</a>
            </div>
           
         </div>
        </>
    )
}
export default Footer