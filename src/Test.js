import React from 'react'
import {useEffect} from 'react'
const Test = () => {

    useEffect(() => {
        const data=[0,1,2,3,4,]
        const p=data.map((x)=>{
            //console.log("that",x)
          
            return x
           
        }
       
         )
         const spreadArr=[1,2,3,4]
         const noSpread=[spreadArr]
         const withSpread=[...spreadArr,5]
         const newArr=spreadArr
       // console.log("this",p)
       console.log("spread",withSpread)
       
       console.log("nospread",noSpread)
       console.log("onlyspread",newArr)
       
       
    }, [])
    return (
        <div>
            
        </div>
    )
}

export default Test
