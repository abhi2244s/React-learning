import React,{useState} from "react"
import useCollapse from 'react-collapsed'
function Course(){
    const [isExpanded, setExpanded] = useState(false)
    const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded })
    return(
        <>
        <div className="container mx-auto w-5/6 md:mt-12 mt-8">
            <div>
                <h1 className="text-[28px] font-bold leading-[36px]">Course Overview</h1>
            </div>
            <div className="mt-3 md:w-4/6">
                <h1 className="text-[16px] font-normal leading-[24px]">As Moore’s Law is reaching the end of its lifecycle, the need for concurrency is rising and consequently, the need for a programming language that enables effective implementation of concurrent programs is rising too. For this reason, Go has become one of the most popular languages in ...</h1>
                <h1 {...getCollapseProps()}>recent times. This course aims to provide a detailed introduction to Go for beginners. Furthermore, it also articulates how Go is different from traditional programming languages that programmers are accustomed to in order to acquaint programmers getting ready to delve into Go with the language too.</h1>
                <button className="bg-[#F5F5F5] p-4 px-8 border-[#F5F5F5] rounded  hover:bg-gray-300 mt-3"
                 {...getToggleProps({
                 onClick: () => setExpanded((prevExpanded) => !prevExpanded),
                 })}
                 >
                 {isExpanded ? 'See Less' : 'See More'}
                </button>
            </div>
            
       </div>
        </>
    )
}
export default Course