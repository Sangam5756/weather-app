import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import SliderData from "./previousWeatherMobile";
import dateFormat, { masks } from "dateformat";


function PreviousWeather({ cityName }) {
  const [data, setData] = useState([]);
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

      <div className="text-center hidden lg:block py-2" name="forecast">
        <span className="text-center  font-bold text-2xl ">Weather Prediction</span>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            
            justifyContent: "center",
            gap: 2,
            p: 2,
            overflowX: "auto sm:overflow-x-auto"
          }}
        >
          {data.length > 0 ? (
            data.map((entry, index) => (
              <Card
                key={index}
                sx={{
                  width: { xs: "100%", sm: "45%", md: "30%", lg: "17%" },
                  m: 1,
                }}
              >
                <CardContent>
                  <Typography
                    sx={{ fontSize: 12 }}
                    color="text.secondary"
                    gutterBottom
                    className="flex"
                  >
                    <p className='text-center text-md  font-semibold ml-auto mr-auto'>{dateFormat(entry.dt_txt, "dddd, d mmmm yyyy")}</p>
                  </Typography>
                  <Typography variant="h5" component="div">
                    Temp: {(entry.main.temp - 273.15).toFixed(2)}°C
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {entry.weather[0].description}
                  </Typography>
                  <Typography variant="body2">
                    <ul>
                      <li>
                        Min Temp: {(entry.main.temp_min - 273.15).toFixed(2)}°C
                      </li>
                      <li>
                        Max Temp: {(entry.main.temp_max - 273.15).toFixed(2)}°C
                      </li>
                      <li>Humidity: {entry.main.humidity}%</li>
                      <li>Wind Speed: {entry.wind.speed} m/s</li>
                    </ul>
                  </Typography>
                </CardContent>
              </Card>
            ))
          ) : (
            <Typography>Loading...</Typography>
          )}
        </Box>



      </div>

        <div className="lg:hidden ">
        <SliderData data={data}/>
        </div>




    </div>

  );
}

export default PreviousWeather;