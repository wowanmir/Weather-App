import "./style.css";

import { WindIcon } from "../../icons/wind-icon";
import { HumidityIcon } from "../../icons/humidity-icon";
import { PressureIcon } from "../../icons/pressure-icon";
export default function Description({
  todayDate,
  feelsLike,
  humidity,
  pressure,
}) {
  return (
    <div>
      <span className="today-data">{todayDate}</span>
      <div className="wether-description">
        <span className="feels-like">
          <WindIcon /> Ощущается как: {feelsLike} °C
        </span>
        <span> | </span>
        <span className="humidity">
          <HumidityIcon /> Влажность: {humidity}%
        </span>
        <span> | </span>
        <span className="pressure">
          <PressureIcon /> Давление: {pressure} мм.р.т
        </span>
      </div>
    </div>
  );
}
