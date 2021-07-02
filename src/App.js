import logo from './logo.svg';
import './App.css';
import { FormControl,InputLabel,Input,FormHelperText, CardContent,Select,MenuItem,Card} from '@material-ui/core';
import {useState,useEffect} from 'react'
import Test from './Test';
import Infobox from './Infobox';
import Mapp from './Mapp';
import Table from './Table';
import './table.css'
import {sortData} from"./util"





function App() {
 
  const[countries, setCountries]=useState([])
  const[changeCountry, setChangeCountry]=useState("worldwide")
  const[countryInfo, setCountryInfo]=useState({})
  const[tableData,setTableData] = useState([])
  const[mapCenter,setMapCenter] = useState([34.80746,-40.4796])
  const [mapZoom,setMapZoom] = useState(3)
  const [mapCountries,setMapCountries] = useState([])
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

    const sortedData=sortData(data);
    setCountries(countries)
    setTableData(sortedData);
    console.log("check",data)
    setMapCountries(data)
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
   console.log("checking",data)
    setCountryInfo(data)
   setMapCenter([data.countryInfo.lat,data.countryInfo.long])
   setMapZoom(4)
  
  
  }))
}

console.log("priya",mapCenter)
  
  
  
  
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
     
      <Mapp countries={mapCountries} center ={mapCenter}  zoom={mapZoom}/>
      </div>
    
    <Card className="app_right">
    <CardContent>
      <h3>Live Cases by Country</h3>
       <Table countries={tableData}/>

      </CardContent>
      

    </Card>
    <Test/>
    
    </div>
  );
}

export default App;
