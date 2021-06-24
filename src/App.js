import logo from './logo.svg';
import './App.css';
import { FormControl,InputLabel,Input,FormHelperText, CardContent,Select,MenuItem,Card} from '@material-ui/core';
import {useState,useEffect} from 'react'
import Test from './Test';
import Infobox from './Infobox';
import Map from './Map';

function App() {
 
  const[countries, setCountries]=useState([])
  const[changeCountry, setChangeCountry]=useState("worldwide")
  const[countryInfo, setCountryInfo]=useState({})
  
  useEffect(() => {
    fetch("https://disease.sh/v3/covid-19/all")
    .then((response)=>{ return response.json()})
    .then((data)=>{
      setCountryInfo(data)
  
    })
    
  }, [])


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

  
  const onCountryChange=(e) => {

 const countryCode= e.target.value;
setChangeCountry(countryCode)
 
  
  console.log("test",changeCountry)
  
  const url= 
  countryCode ==='worldwide'
  ?"https://disease.sh/v3/covid-19/all"
  :`https://disease.sh/v3/covid-19/countries/${countryCode}`
  
  fetch(url)
  .then((response)=>{ return response.json()})
  .then((data=>{
   console.log(data)
    setCountryInfo(data)
   
  
  }))
}
  
  
  
  
  return (
    <div className="app">
      <div className="app__left">
      <div className="app__header">
      <h1>Covid tracker</h1>
     <FormControl className="app_dropdown">

       <Select
       variant="outlined"
       onChange={onCountryChange}
       value={changeCountry}>
           <MenuItem value="worldwide">Worldwide</MenuItem>
       {countries.map((country)=>(
          <MenuItem value={country.value}>{country.name}</MenuItem>
        ) )}
       </Select>
  
</FormControl>
      </div>
      <div className="app__stats">
        <Infobox title="Coronavirus cases" total={countryInfo.cases} cases={countryInfo.todayCases}/>
        <Infobox title="Recovered" total={countryInfo.recovered} cases={countryInfo.todayRecovered}/>
        <Infobox title="Deaths" total={countryInfo.deaths} cases={countryInfo.todayDeaths}/>
      </div>
     
      <Map/>
      </div>
    
    <Card className="app_right">
    <CardContent>
       <h3>Worldwide new cases</h3>
       
       
      </CardContent>
      

    </Card>
    </div>
  );
}

export default App;
