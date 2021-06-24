import React from 'react'
import { useState,useEffect } from 'react';
import{Line} from "react-chartjs-2";


const LineGraph = () => {
    const[data,setData]=useState({})
   
useEffect(() => {      
  fetch('https://disease.sh/v3/covid-19/historical/all?lastdays=120')
  .then((response)=>{ return response.json()})
  .then((data=>{
   console.log("line",data)
  }))
       
    }, [])
    return (
        <div>
          <h1>I am a graph</h1>  
        </div>
    )
}

export default LineGraph
