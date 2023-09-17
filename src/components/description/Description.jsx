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
      {todayDate}
      <div className="wether-description">
        <span> <WindIcon /> Ощущается как: {feelsLike} °C</span>
        <span> | </span>
        <span> <HumidityIcon /> Влажность: {humidity}%</span>
        <span> | </span>
        <span> <PressureIcon /> Давление: {pressure} мм.р.т</span>
      </div>
    </div>
  );
}
