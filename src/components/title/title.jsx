import "./style.css";
function Title({ currentTemp, cityName, imgWeather }) {
  return (
    <div className="title">
      <div className="temp">{currentTemp} °C</div>
      <div className="city">
      {cityName}
      </div>
    </div>
  );
}

export default Title;
