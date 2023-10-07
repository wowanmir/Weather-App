import { useEffect, useState } from "react";
import { getWeeklyWeather } from "../../js/api";
import { WeeklyWeatherItem } from "./weekly-weather-item/weekly-weather-item";
import { getTempToDegree } from "../../utils/getTempToDegree";
import "./weekly-weather-item/style.css";
export const WeeklyWeather = ({ currentCity, currentDegree }) => {
  const [weeklyData, setWeeklyData] = useState({
    list: [],
  });

  useEffect(() => {
    getWeeklyWeather(currentCity)
      .then((data) => {
        setWeeklyData(data);
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [currentCity]);

  return (
    <div className="weekly-weather">
      {weeklyData.list
        .filter((_, index) => index % 8 === 0 && index < 40)
        .map((list) => (
          <WeeklyWeatherItem
            key={list.dt}
            temp={getTempToDegree(list?.main?.temp.toFixed(),currentDegree)}
            weather={list?.weather[0].icon}
            day={list?.dt_txt}
          />
        ))}
    </div>
  );
};
