import "./style.css";
import { SvgSelector } from "../SvgSelector/svgSelector";
export function WeeklyWeatherItem({ temp, weather, day }) {
  const getIconWeather = () =>
    weather !== undefined ? SvgSelector(weather) : SvgSelector("01d");

  const getDayWeek = () => {
    const shortDaysWeek = ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"];
    const dayWeekIndex = new Date(day).getDay();
    const shortDayWeek = shortDaysWeek[dayWeekIndex];
    return shortDayWeek;
  };

  return (
    <div className="weekly-weather-item">
      <span className="temp-weekly">{temp}</span>
      <span> {getIconWeather(weather)}</span>
      <span> {getDayWeek(day)}</span>
    </div>
  );
}
