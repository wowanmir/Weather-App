import "./style.css";
export default function Description({
  todayDate,
  feelsLike,
  humidity,
  pressure,
}) {
  return (
    <div>
      {todayDate} <br />
      <div className="wether-description">
        <span>Ощущается как: {feelsLike} °C</span>
        <span> | </span>
        <span>Влажность: {humidity}%</span>
        <span> | </span>
        <span>Давление: {pressure} мм.р.т</span>
      </div>
    </div>
  );
}
