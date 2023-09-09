import { useEffect, useState } from "react";
import { getWeeklyWeather } from "../../js/api";
import { WeeklyWeatherItem } from "./weekly-weather-item/weekly-weather-item";

export const WeeklyWeather = () => {
  const [weeklyData, setWeeklyData] = useState({
    list: []
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
    <div>
      {weeklyData.list.splice(0, 5).map((list) => (
        <WeeklyWeatherItem
        temp={list?.main?.temp.toFixed()}
        weather={list?.weather?.icon}
        day={list?.dt_txt}
      />
      ))}
    </div>
  );
};
