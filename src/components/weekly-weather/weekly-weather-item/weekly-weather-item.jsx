import "./weekly-weather-item.css";
export function WeeklyWeatherItem({ temp, weather, day }) {
  return (
    <div>
      <div className="weekly-weather">
        <span>Температура: {temp} °C</span>
        <span> {weather} img </span>
        <span>Время {day}</span>
      </div>
    </div>
  );
}
