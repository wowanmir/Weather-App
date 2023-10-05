import React, { useEffect, useState } from "react";
import { getWeatherData } from "../../js/api";
import { CelciaIcon } from "../../icons/celcia-icon.jsx";
import { SvgSelector } from "../weekly-weather/SvgSelector/svgSelector";
import "./style.css";

const DEGREE = {
  IMPERIAL: "imperial",
  METRIC: "metric",
}

function Title({ currentTemp, imgWeather }) {
  const [currentDegree, setCurrentDegree] = useState(DEGREE.METRIC);

  const getIconWeather = () =>
    imgWeather !== undefined ? SvgSelector(imgWeather) : SvgSelector("02d");

  const getCurrentTemp = (currentTemp) => {
    switch (currentDegree) {
      case "imperial":
        return `${currentTemp}°F`;
      case "metric":
        return `${((currentTemp - 273.15)).toFixed(1)}°C`;
      default:
        return currentTemp;
    }
  };
  
  const handleChangeDegree = () => {
    console.log('currentDegree', currentDegree)
    if (currentDegree === DEGREE.IMPERIAL) {
      setCurrentDegree(DEGREE.METRIC);
    } else {
      setCurrentDegree(DEGREE.IMPERIAL);
    }
  }
  
  console.log('currentDegree', currentDegree)
  return (
    <div className="header">
      <div className="title">
        <span>{getIconWeather(imgWeather)} </span>
        <span className="temp">
          {getCurrentTemp(currentTemp)} <CelciaIcon size="22" />
        </span>
      </div>
      <button
        className="toggle"
        onClick={handleChangeDegree}
      >
        Change F-C
      </button>
    </div>
  );
}

export default Title;
