import { CelciaIcon } from "../../icons/celcia-icon.jsx";
import { svgSelector } from "../weekly-weather/SvgSelector/svgSelector";
import "./style.css";

function Title({ currentTemp, cityName, imgWeather }) {
  const getIconWeather = () =>
    imgWeather !== undefined ? svgSelector(imgWeather) : svgSelector("02d");

  return (
    <div className="title">
      <span>{getIconWeather(imgWeather)} </span>
      <span className="temp">
        {currentTemp} <CelciaIcon size="22" />
      </span>
      <span className="city">{cityName}</span>
    </div>
  );
}

export default Title;
