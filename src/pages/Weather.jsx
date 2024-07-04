import React, { useState } from 'react'
import SearchBox from '../components/SearchBox'
import InfoCard from '../components/InfoCard'

const Weather = () => {

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
    console.log(weatherInfo);
    return (
        <>
            <SearchBox updateInfo={updateInfo} />
            <InfoCard weatherData={weatherInfo}/>
        </>
    )
}

export default Weather