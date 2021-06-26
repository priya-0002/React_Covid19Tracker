import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import "leaflet/dist/leaflet.css";
import './map.css'
const Mapp = (props) => {
    const{zoom,center}=props;
    console.log('center',center)
    return ( 
        <div className="map">
  
  <MapContainer style={{ height: "500px", width: "100%" }}  center={center} zoom={zoom} >
  <TileLayer
    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
 
</MapContainer>
             
    
        </div>
    )
}

export default Mapp
