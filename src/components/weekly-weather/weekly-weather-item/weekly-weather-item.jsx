import "./style.css";
import { svgSelector } from "../SvgSelector/svgSelector";
import { CelciaIcon } from "../../../icons/celcia-icon"
export function WeeklyWeatherItem({ temp, weather, day }) {
  const getIconWeather = () =>
    weather !== undefined ? svgSelector(weather) : svgSelector("01d");

  const getDayWeek = () => {
    const shortDaysWeek = ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"];
    const dayWeekIndex = new Date(day).getDay();
    const shortDayWeek = shortDaysWeek[dayWeekIndex];
    return shortDayWeek;
  };

  return (
    <div className="weekly-weather-item">
      <span className="temp-weekly"> {temp} <CelciaIcon size="15" /> </span>
      <span> {getIconWeather(weather)}</span>
      <span> {getDayWeek(day)}</span>
    </div>
  );
}
