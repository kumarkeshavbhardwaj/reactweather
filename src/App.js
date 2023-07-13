import React, { useState, useEffect } from 'react';

import '../src/App.css';
import axios from 'axios';
const API_KEY = '2601b2282c03c60e5f6ab89cfd3f7f92';




function App () {
  const [inputValue, setInputValue] = useState('');
  const [city, setCity] = useState('');
  const [temp, setTemp] = useState([]);
  const [weatherType, setWeatherType] = useState([]);
  const [typedCity, setTypedCity] = useState('New Delhi');

  const getWeather = () => {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${typedCity}&units=metric&appid=${API_KEY}`).then((response) => {
     console.log(response.data.name)
     setTemp(response.data.main)
     setCity(response.data.name)
     setWeatherType(response.data.weather[0].main)
   })
 }
  

  useEffect(()=> {
  getWeather();

  
  }, []);


  const handleKeyPress = (e) => {
    if (e.keyCode === 13) {
      // handleSubmit(e)
      getWeather();

    }
  };


  return(
    
  <>
  
  <div className='input-container'>
    <input onKeyDown={handleKeyPress} value={inputValue} onChange={(e) => {
      setInputValue(e.target.value)
      setTypedCity(e.target.value)
    }}></input>
  </div>
  <div className="card">
        <h4>{city}</h4>
        <h6>{weatherType}</h6>
        <h1>{temp.temp}<sup>&deg;</sup>C</h1>
        <div className="container">
            <div className="details">
                 <p>max</p>
                 <span>{temp.temp_max}<sup>&deg;</sup>C</span>
            </div>
            <div className="details">
                 <p>min</p>
                 <span>{temp.temp_min}<sup>&deg;</sup>C</span>
            </div>
        </div>
    </div>
  </>
  )
}

export default App;