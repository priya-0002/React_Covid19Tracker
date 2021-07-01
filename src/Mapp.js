import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import "leaflet/dist/leaflet.css";
import './map.css'


import {showDataOnMap} from "./util"
const Mapp = (props) => {
    const{zoom,center,countries,casesType}=props;
    console.log('center',center)
    return ( 
        <div className="map">
  
  <MapContainer key={center} style={{ height: "500px", width: "100%" }}  center={center} zoom={zoom} countries={countries} > 
  <TileLayer
    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
{showDataOnMap(countries,casesType)}

 
</MapContainer>
             
    
        </div>
    )
}

export default Mapp