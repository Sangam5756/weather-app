const api = "https://api.openweathermap.org/data/2.5/weather";
const api_key = "2b9fb5b0adc8572560f05c96fb2a3c58";

export const  getWeatherInfo = async (city) => {
    try {
      let response = await fetch(
        `${api}?q=${city}&appid=${api_key}&units=metric`
      );
      
      let jsonresponse = await response.json();
      console.log(jsonresponse);
      let result = {
        city: city,
        date:jsonresponse.dt,
        temp: jsonresponse.main.temp,
        temp_min: jsonresponse.main.temp_min,
        temp_max: jsonresponse.main.temp_max,
        humidity: jsonresponse.main.humidity,
        feels_like: jsonresponse.main.feels_like,
        weather: jsonresponse.weather[0].description,
      };
      console.log(result);
      return result;
    } catch (error) {
       throw error;
    }
  };