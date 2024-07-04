import React, { useState, useEffect } from "react";
import SliderData from "./previousWeatherMobile";
import dateFormat, { masks } from "dateformat";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function PreviousWeather({ cityName }) {
  const [data, setData] = useState([]);
  

  useEffect(() => {
    async function fetchData() {
      try {
        console.log(cityName);
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=508e65af6d019e55904d0b72c1d2d907`
        );
        const data1 = await response.json();

        const tempData = [
          data1.list[5],
          data1.list[11],
          data1.list[21],
          data1.list[31],
          data1.list[39],
        ];

        setData(tempData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, [cityName]);

  return (
    <div>

      <div className=" text-center hidden lg:block py-2" name="forecast">
        <span className="text-center text-white font-bold text-2xl ">Weather Prediction</span>
        <div className="flex w-full  justify-center  items-center mt-2 gap-3">

          {data.length > 0 ? (
            data.map((entry, index) => (

             <div className="bg-black opacity-70">
               <div className=" border text-white  border-white w-[250px] h-[200px] py-6">
                <p className='text-center text-md  font-semibold ml-auto mr-auto'>{dateFormat(entry.dt_txt, "dddd, d mmmm yyyy")}</p>
                <div className="gap-5 py-3">
                  <p className="text-md font-semibold">{(entry.main.temp - 273.15).toFixed(2)}°C</p>
                  <p className="">{entry.weather[0].description}</p>
                  <p className="mt-8  ">Humidity : {entry.main.humidity}% </p>
                  <p> Feels_like : {(entry.main.feels_like - 273.15).toFixed(2)}°C  </p>
                </div>
              </div>
             </div>


            ))
          ) : (
            <p>Loading...</p>
          )}

        </div>
      </div>

      <div className="lg:hidden ">
        <SliderData data={data} />
      </div>




    </div>

  );
}

export default PreviousWeather;