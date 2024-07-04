import React from 'react'
import PreviousWeather from '../pages/PreviousWeather';
import dateFormat, { masks } from "dateformat";



const infoCard = ({ weatherData }) => {
  


    console.log("Weather Data", weatherData)
    return (
        <>
            <div className="flex  items-center justify-center flex-col">
                <h2 className='text-white font-semibold mb-5'>Weather Information</h2>
                {weatherData ? (
                    <div>
                        
                        
                        <div className=" bg-blend- text-white font-bold shadow-xl border border-white text-center w-80 ">
                        
                            
                            <p className='text-center uppercase  text-2xl font-bold text-white'>{weatherData.city}</p>
                            <p className='text-center text-sm mt-2 font-semibold ml-auto mr-auto'>{dateFormat(Date.now(), "dddd, d mmmm yyyy")}</p>

                            <div className='gap-5 py-3'>
                                <p> {weatherData.temp}°C</p>
                                <p>{weatherData.weather}</p>
                                <br />
                                <p>Feels Like: {weatherData.feels_like}°C &nbsp;&nbsp;&nbsp; humidity : {weatherData.humidity}%</p></div>
                        </div>
                    </div>

                ) : (
                    <p>Loading...</p>
                )}
            </div>
            <PreviousWeather cityName={weatherData.city} />

        </>


    )
}

export default infoCard