import React from 'react';
import "./CurrentWeather.css";


const CurrentWeather = ({data}) => {




  return (
    <>
    <div className='Weather'>
        <div className='top'>
           <div>
           <p className='city'>{data.city}</p>
            <p className='weather_description'>{data.weather[0].description}</p>
           </div>
           {/* <img alt='weather' className='weather_icon' src={Sunny} /> */}
           <img alt='weather' className='weather_icon' src={`icons/${data.weather[0].icon}.png`} />

        </div>
        <div className='bottom'>
            <p className='temperature'>
                {Math.round(data.main.temp)}°C
            </p>
            <div className='details'>
                <div className='parameter_row'>
                    <span className='parameter_label para_top'>
                        Details
                    </span>
                </div>
                <div className='parameter_row'>
                    <span className='parameter_label'>
                        Feels like
                    </span>
                    <span className='parameter_value'>
                    {Math.round(data.main.feels_like)}°C
                    </span>
                </div>
                <div className='parameter_row'>
                    <span className='parameter_label'>
                        Wind
                    </span>
                    <span className='parameter_value'>
                     {data.wind.speed}m/s
                    </span>
                </div>
                <div className='parameter_row'>
                    <span className='parameter_label'>
                       Humidity
                    </span>
                    <span className='parameter_value'>
                    {data.main.humidity}%
                    </span>
                </div>

                <div className='parameter_row'>
                    <span className='parameter_label'>
                        Pressure
                    </span>
                    <span className='parameter_value'>
                    {data.main.pressure} hPa
                    </span>
                </div>

            </div>
        </div>
    </div>
    </>
  )
}

export default CurrentWeather;