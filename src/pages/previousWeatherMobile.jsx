import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import dateFormat, { masks } from "dateformat";

const SliderData = ({ data }) => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };
  

  console.log("data", data)
  return (
    <div className='flex flex-col w-[350px] mt-5 ml-auto mr-auto justify-center '>
      {/* Slider  */}

      <div className=" text-center  py-5 bg-mix-blend-multiply ">
      <span className="text-center text-white font-bold text-2xl ">Weather Prediction</span>

        {data.length > 0 ? (

          <Slider {...settings}>

            {data.map((weatherData, index) => (
              <div className="shadow-xl mt-5 py-10 text-center font-bold bg-black opacity-70 border-white border w-80 text-white ">
                <p className='text-center text-md  font-semibold ml-auto mr-auto'>{dateFormat(weatherData.dt_txt, "dddd, d mmmm yyyy")}</p>
                <div className='gap-5 py-3'>
                  <p className='text-md font-semibold'> {(weatherData.main.temp - 273.15).toFixed(2)}°C</p>
                  <p >{weatherData.weather[0].description}</p>
                  <br />
                  <p>Feels Like : {(weatherData.main.feels_like - 273.15).toFixed(2)}°C &nbsp;&nbsp;&nbsp; humidity : {weatherData.main.humidity}%</p>
                  </div>
              </div>
            ))}

          </Slider>

        ) : (
          <p>Loading...</p>
        )}
      </div>


    </div>
  )
}

export default SliderData