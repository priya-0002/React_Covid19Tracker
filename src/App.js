import logo from './logo.svg';
import './App.css';
import { FormControl,InputLabel,Input,FormHelperText, Select,MenuItem } from '@material-ui/core';
import {useState,useEffect} from 'react'
import Test from './Test';

function App() {
  const[countries, setCountries]=useState([])
  const[country, setCountry]=useState("worldwide")
  useEffect(() => {
    fetch("https://disease.sh/v3/covid-19/countries")
    .then((response)=>{ return response.json()})
    .then((data)=>{
    
    const countries=data.map((country)=>({
    name:country.country,
    value:country.countryInfo.iso2
    }));
    setCountries(countries)
    })
  
  }, [])
  
  const onCountryChange=(e)=>{
   setCountry(e.target.value);
  
  }
  console.log("countrychange",country)
  
  return (
    <div className="app">
      <div className="app_heaader">
      <h1>Covid tracker</h1>
     <FormControl className="app_dropdown">
       <Select
       variant="outlined"
       onchange={onCountryChange}
       value={country}>
           <MenuItem value="worldwide">Worldwide</MenuItem>
       {countries.map((country)=>(
          <MenuItem value={country.value}>{country.name}</MenuItem>
        ) )}
 
  </Select>
  
</FormControl>
      </div>
    
    </div>
  );
}

export default App;
