import React, { useEffect, useState } from "react";
import { getWeatherData } from "../../js/api";
import Title from "../title/title";
import Description from "../description/Description"
import { WeeklyWeather } from "../weekly-weather/weekly-weather";

function Dashboard() {
  const [weatherData, setWeatherData] = useState({});

  useEffect(() => {
    getWeatherData()
      .then((data) => {
        setWeatherData(data);
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <Title
        currentTemp={weatherData?.main?.temp.toFixed()}
        cityName={weatherData?.name}
      />
      <Description
        todayDate={new Date().getUTCDate()}
        feelsLike={weatherData?.main?.feels_like.toFixed()}
        humidity={weatherData?.main?.humidity}
        pressure={weatherData?.main?.pressure}
      />
      <WeeklyWeather />
    </>
  );
}

export default Dashboard;
