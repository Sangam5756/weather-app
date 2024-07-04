import React, { useState } from 'react'
import SearchBox from '../components/SearchBox'
import InfoCard from '../components/InfoCard'

const Weather = () => {
    const Initial_Url =
        "https://images.unsplash.com/photo-1562155955-1cb2d73488d7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    const HOT_URL =
        "https://images.unsplash.com/photo-1599163174538-8a5ad89299c3?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGhvdCUyMHN1bW1lciUyMCUyMGltYWdlfGVufDB8fDB8fHww";
    const COLD_URL =
        "https://images.unsplash.com/photo-1612967850130-a0b00258baa7?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHdpbnRlciUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D";
    const RAIN_URL =
        "https://images.unsplash.com/photo-1703534972672-aac8aa5de57d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHJhaW4lMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D";



    let [weatherInfo, setWeatherInfo] = useState({
        city: "Dummy_Weather",
        feels_like: 24.84,
        temp: 25.07,
        temp_min: 25.07,
        temp_max: 25.07,
        humidity: 25.07,
        weather: "haze",
    });


    let updateInfo = (result) => {
        setWeatherInfo(result);

    }
    const backgroundImage = weatherInfo.humidity > 80
        ? RAIN_URL
        : weatherInfo.temp > 15
            ? HOT_URL
            : COLD_URL;
    // console.log(weatherInfo);
    return (
        <>
            <div className="min-h-screen bg-blend-darken flex flex-col items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="relative z-10">

                    <SearchBox updateInfo={updateInfo} />
                    <InfoCard weatherData={weatherInfo} />
                </div>
            </div>
        </>
    )
}

export default Weather