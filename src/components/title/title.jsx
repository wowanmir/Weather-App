import React, { useEffect, useState } from "react";
import { getWeatherData } from "../../js/api";
import { CelciaIcon } from "../../icons/celcia-icon.jsx";
import { SvgSelector } from "../weekly-weather/SvgSelector/svgSelector";
import "./style.css";

function Title({ currentTemp, imgWeather }) {
  const [weatherData, setWeatherData] = useState({});
  const [currentDegree, setCurrentDegree] = useState("");

  useEffect(() => {
    getWeatherData(currentDegree)
      .then((data) => {
        setWeatherData(data);
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [currentDegree]);
  const getIconWeather = () =>
    imgWeather !== undefined ? SvgSelector(imgWeather) : SvgSelector("02d");

  return (
    <div className="header">
      <div className="title">
        <span>{getIconWeather(imgWeather)} </span>
        <span className="temp">
          {currentTemp} <CelciaIcon size="22" />
        </span>
      </div>
      <button
        className="toggle"
        onChange={(e) => setCurrentDegree(e.target.value)}
      >
        Change F-C
      </button>
    </div>
  );
}

export default Title;
