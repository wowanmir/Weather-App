import "./style.css";
import { svgSelector } from "../SvgSelector/svgSelector";
export function WeeklyWeatherItem({ temp, weather, day }) {
  // const icons = ['01d', '01n', '02d', '02n', '03d', '03n', '04d', '04n', '09d', '09n', '10d', '10n', '11d', '11n', '13d', '13n', '50d', '50n']
  const getIconWeather = () => {

    if (weather !== undefined) {
      return svgSelector(weather)
    } else {
      return  svgSelector("01d")
    }
  };
  return (
    <div className="weekly-weather-item">
      <span>{temp} °C</span>
      <span> {getIconWeather(weather)}</span>
      <span> {day}</span>
    </div>
  );
}
