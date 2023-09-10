import "./style.css";
export function WeeklyWeatherItem({ temp, weather, day }) {
  return (
    <div>
      <div className="weekly-weather-item">
        <span>{temp} °C</span>
        <span> {weather} img </span>
        <span> {day}</span>
      </div>
    </div>
  );
}
