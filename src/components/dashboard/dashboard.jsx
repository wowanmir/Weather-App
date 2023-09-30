import React, { useEffect, useState } from "react";
import { getWeatherData } from "../../js/api";
import Title from "../title/title";
import { WeeklyWeather } from "../weekly-weather/weekly-weather";
import "./style.css";
import Description from "../description/description";
function Dashboard() {
  const [weatherData, setWeatherData] = useState({});
  const [currentCity, setCurrentCity] = useState("Omsk");

  useEffect(() => {
    getWeatherData(currentCity)
      .then((data) => {
        setWeatherData(data);
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [currentCity]);

  const today = new Date();
  const options = {
    day: "numeric",
    month: "long",
    year: "2-digit",
    hour: "numeric",
    minute: "numeric",
    weekday: "long",
    timeZone: "Asia/Omsk",
  };
  const formatter = new Intl.DateTimeFormat("ru-RU", options);
  const formattedDate = formatter.format(today).replace(/в /g, "");
  const dayOfWeek = formattedDate.split(",")[0].trim();
  const capitalizedDayOfWeek =
    dayOfWeek.charAt(0).toUpperCase() + dayOfWeek.slice(1);
  const formatted = formattedDate.replace(dayOfWeek, capitalizedDayOfWeek);
  return (
    <div className="wrapper">
      <Title
        imgWeather={weatherData?.weather?.[0].icon}
        currentTemp={weatherData?.main?.temp.toFixed()}
      />
      <select className="city" onChange={(e) => setCurrentCity(e.target.value)}>
        <option value="Omsk">Омск</option>
        <option value="Moskva">Москва</option>
        <option value="Astana">Астана</option>
        <option value="Kazan">Казань</option>
        <option value="Novosibirsk">Новосибирск</option>
      </select>

      <Description
        todayDate={formatted}
        feelsLike={weatherData?.main?.feels_like.toFixed()}
        humidity={weatherData?.main?.humidity}
        pressure={weatherData?.main?.pressure}
      />
      <WeeklyWeather />
    </div>
  );
}

export default Dashboard;
