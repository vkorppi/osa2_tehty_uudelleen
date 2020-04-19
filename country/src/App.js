import React, { useState,useEffect  } from 'react';
import axios from 'axios'


const Weather   = ({weather}) => {

  if(weather === null) {
    return null
  }

  return (
    <>
     <h2>Weather</h2>
    <div>Temperature: {weather.current.temp_c}</div>
  <div>Wind: mph {weather.current.wind_mph}</div>
    </>
  )
}


const Row   = ({country,setter}) => {

  const showHandler = (event) => {

    event.preventDefault()

    country = [country]
    
    setter(country)

  }

  return (

  <div> {country.name}   <button onClick={showHandler}>Show</button> </div> 
  )
}

const View   = ({result,setter,weather}) => {


  if(result === null) {
    return null
  }
  

  if(result.length > 10) {
    return (
    <div>
      Search returns too many result. Give new search criteria
    </div>
    )
  }
  else if(result.length > 1) {

    return (

      (result.map(country =>   

      
        <Row key={country.id} country={country} setter={setter}  />

      ))

    
      )
  }
  else if(result.length === 1) {

    
    

    return (
      <>
      <h2>{result[0].name}</h2>
      <br/>
    <div>Capital {result[0].capital}</div>
    <div>Population {result[0].population}</div>
    <br/>
    <h2>languages</h2>
    {
    (result[0].languages.map(language =>    <div
        key={language.id}
        >{language.name}  
        </div>
      ))
    }
<br/>
<br/>
<Weather weather={weather} />
<br/>
<br/>
    <div> <img src={result[0].flag} alt=""></img>  </div>
      </>
    )

  }
 

}


function App() {

  const [ result, setResult ] = useState(null)
  const [ weather, setWeather ] = useState(null)


  useEffect(() => {

    if(result !== null && result.length === 1) {
      axios.get(`https://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_KEY}&q=${result[0].capital}`).then(response => { 
        setWeather(response.data)
      })  
    }
      
    
  }, [result])

  const filterCountry = (event) => {
   
      axios.get(`https://restcountries.eu/rest/v2/name/${ event.target.value}`).then(response => { 
        setResult(response.data)
      })  
  }


  return (
    <div>
     
     <div>
        Filter country: <input name="filter"  onChange={filterCountry}/>
      </div>
      <View  result={result} setter={setResult} weather={weather}/>

      
    </div>
    
  );
}

export default App;
