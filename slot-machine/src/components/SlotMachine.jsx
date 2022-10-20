import React from 'react'


function SlotMachine(props) {
    const{x,y,z}= props
     

    if((x===y)&&(y===z)){
        return (
            <div>
                <h1>
                    {x} {y} {z}
                </h1>
                <h1>This is matching</h1>
        
            </div>
            
        )
    }
    else{
        return (
            <div>
                <h1>
                    {x} {y} {z}
                </h1>
                <h1>This is not matching</h1>
        
            </div>
        )
    }
  
}

export default SlotMachine
