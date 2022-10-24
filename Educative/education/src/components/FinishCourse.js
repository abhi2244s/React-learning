function FinishCourse(props){
    return (
        <>
          <div className="transition transform hover:-translate-y-1.5 shadow-md hover:shadow:xl duration-500 xl:w-[300px] lg:w-[280px] w-auto overflow-hidden ">
            <img src={props.img} alt="card-img" className="xl:h-[200px] h-auto" />
            <div className="m-5">
                <h1 className="text-[14px] font-normal leading-[22px]">{props.title}</h1>
            </div>
            <div className="m-5">
                <p className="text-[20px] font-bold leading-[27px] ">{props.heading}</p>
            </div>
            <div className="text-end m-3">
                <button className="border border-solid p-3 px-6 hover:bg-[#F5F5F5] hover:border hover:border-solid hover:border-black">
                    Preview
                </button>
            </div>
          </div>
        </>
    )
}
export default FinishCourse