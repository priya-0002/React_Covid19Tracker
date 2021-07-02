import React from 'react'
import{Card,Typography,CardContent}from '@material-ui/core';
import "./infobox.css"
const Infobox = (props) => {
    const{title,cases,total}=props;
    return (
        <div>
       <Card className="infoBox" >
      <CardContent>
        <Typography className="infoBox_title" color="textSecondary">
        {title}
        </Typography>
        
        <h2 className="infoBox_total">{cases}</h2>
  
        <Typography className="infoBox_total" color="textSecondary">
         {total} 
        </Typography>
       
       
      </CardContent>
      
    </Card>
        </div>
    )
}
 
export default Infobox
