import { CelciaIcon } from "../../icons/celcia-icon.jsx";
import { SvgSelector } from "../weekly-weather/SvgSelector/svgSelector";
import {CitySelect} from "./city.jsx"
import "./style.css";

function Title({ currentTemp, cityName, imgWeather }) {
  const getIconWeather = () =>
    imgWeather !== undefined ? SvgSelector(imgWeather) : SvgSelector("02d");
  return (
    <div className="header">
      <div className="title">
        <span>{getIconWeather(imgWeather)} </span>
        <span className="temp">
          {currentTemp} <CelciaIcon size="22" />
        </span>
        <span className="city"> <CitySelect/>{cityName}</span>
      </div>
      <button className="toggle">Change F-C</button>
    </div>
  );
}

export default Title;
