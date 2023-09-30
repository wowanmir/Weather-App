import { CelciaIcon } from "../../icons/celcia-icon.jsx";
import { SvgSelector } from "../weekly-weather/SvgSelector/svgSelector";
import "./style.css";

function Title({ currentTemp, cityName, imgWeather }) {
  const getIconWeather = () =>
    imgWeather !== undefined ? SvgSelector(imgWeather) : SvgSelector("02d");
  
    const select2 = new ItcCustomSelect("#select-2", {
    name: "car", // значение атрибута name у кнопки
    targetValue: "ford", // значение по умолчанию
    options: [
      ["volkswagen", "Volkswagen"],
      ["ford", "Ford"],
      ["toyota", "Toyota"],
      ["nissan", "Nissan"],
    ], // опции
  });
  return (
    <div className="header">
      <div className="title">
        <span>{getIconWeather(imgWeather)} </span>
        <span className="temp">
          {currentTemp} <CelciaIcon size="22" />
        </span>
        <span className="city"> {select2}{cityName}</span>
      </div>
      <button className="toggle">Change F-C</button>
    </div>
  );
}

export default Title;
