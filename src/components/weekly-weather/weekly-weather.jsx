import { useEffect, useState } from "react";
import { getWeeklyWeather } from "../../js/api";
import { WeeklyWeatherItem } from "./weekly-weather-item/weekly-weather-item";
import "./weekly-weather-item/style.css";
export const WeeklyWeather = () => {
  const [weeklyData, setWeeklyData] = useState({
    list: [],
  });

  useEffect(() => {
    getWeeklyWeather()
      .then((data) => {
        setWeeklyData(data);
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="weekly-weather">
      {weeklyData.list.splice(0, 5).map((list) => (
        <WeeklyWeatherItem
        key={list.dt}
          temp={list?.main?.temp.toFixed()}
          weather={list?.weather[0].icon}
          day={list?.dt_txt}
        />
      ))}
    </div>
  );
};
