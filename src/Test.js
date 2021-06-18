import React from 'react'
import {useEffect} from 'react'
const Test = () => {

    useEffect(() => {
        const data=[0,1,2,3,4,]
        const p=data.map((x)=>{
            console.log("that",x)
            return x *2
           
        }
        
     
        )
        console.log("this",p)
       
    }, [])
    return (
        <div>
            
        </div>
    )
}

export default Test
