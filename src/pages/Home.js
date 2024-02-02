import React, { useState } from 'react';
import Forecast from '../components/forecast/Forecast';
import CurrentWeather from '../components/current-weather/CurrentWeather';
import Search from '../components/search/Search';
import { WEATHER_API_KEY, WEATHER_API_URL } from '../Api';
import './Home.css';
import Banner from '../components/sections/Banner';

const Home = () => {

    const [currentWeather, setCurrentWeather] = useState(null);
    const [foreCast, setForeCast] = useState(null);
  
    const handleOnSearchChange = (searchData) => {
      console.log(searchData);
      const [lat, lon] = searchData.value.split(" ");
  
      const currentWeatherFetch = fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`)
  
      const forecastFetch = fetch(`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=matric`)
  
      Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const foreCastResponse = await response[1].json();
  
        setCurrentWeather({city: searchData.label, ...weatherResponse});
        setForeCast({city: searchData.label, ...foreCastResponse});
      })
      .catch((err) => {
        console.log(err);
      })
      
    }
  
    console.log(currentWeather);
    console.log(foreCast);
  


  return (
      <>
      <section className='Home_section col-10 py-5'>
       
      <Search onSearchChange={handleOnSearchChange} />
    { currentWeather && <CurrentWeather data={currentWeather} />}
    { foreCast &&  <Forecast data={foreCast} />}
      </section>
      </>
  )
}

export default Home