import React from 'react'
import { TiWeatherCloudy } from "react-icons/ti";
import { FaTemperatureThreeQuarters } from "react-icons/fa6";
import PreviousWeather from '../pages/PreviousWeather';



const infoCard = ({ weatherData }) => {
    return (
        <>
            <div className="flex  items-center justify-center flex-col">
                <h2 className='text-white font-semibold mb-5'>Weather Information</h2>

                {weatherData ? (
                    <div className="bg-blend-screen shadow-xl border border-white text-center w-80 ">
                        <p className='text-center capitalize text-xl text-white'>{weatherData.city}</p>

                        <div className='gap-5 py-3'>
                            <p> {weatherData.temp}°C</p>
                            <p>{weatherData.weather}</p>
                            <br />
                            <p>Feels Like: {weatherData.feels_like}°C &nbsp;&nbsp;&nbsp; humidity : {weatherData.humidity}%</p></div>
                    </div>
                ) : (
                    <p>Loading...</p>
                )}
            </div>
              <PreviousWeather cityName={weatherData.city}/>

        </>


    )
}

export default infoCard