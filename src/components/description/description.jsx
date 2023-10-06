import "./style.css";

import { WindIcon } from "../../icons/wind-icon";
import { HumidityIcon } from "../../icons/humidity-icon";
import { PressureIcon } from "../../icons/pressure-icon";
import { getTempToDegree } from "../../utils/getTempToDegree";
export default function Description({
  currentDegree,
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
          <WindIcon /> Ощущается как: {getTempToDegree(feelsLike,currentDegree)}</span>
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
