import "./style.css";
export function WeeklyWeatherItem({ temp, weather, day }) {
  // switch ({weather}) {
  //   case 01d: <img src={"/src/img/01d.png"} />
  //   case 02d: <img src={"/src/img/02d.png"} />
  //   case 03d: <img src={"/src/img/03d.png"} />
  //   case 04d: <img src={"/src/img/04d.png"} />
  //   case 09d: <img src={"/src/img/09d.png"} />
  //   case 10d: <img src={"/src/img/10d.png"} />
  //   case 11d: <img src={"/src/img/11d.png"} />
  //   case 13d: <img src={"/src/img/13d.png"} />
  //   case 50d: <img src={"/src/img/13d.png"} />
  //   case 01n: <img src={"/src/img/01n.png"} />
  //   case 02n: <img src={"/src/img/02n.png"} />
  //   case 03n: <img src={"/src/img/03n.png"} />
  //   case 04n: <img src={"/src/img/04n.png"} />
  //   case 09n: <img src={"/src/img/09n.png"} />
  //   case 10n: <img src={"/src/img/10n.png"} />
  //   case 11n: <img src={"/src/img/11n.png"} />
  //   case 13n: <img src={"/src/img/13n.png"} />
  //   case 50n: <img src={"/src/img/13n.png"} />
  const getIconWeather = () => {
    switch (weather) {
      case '01d':
        return './img/01d.png'
      case '02d':
        return './img/02d.png'
      case '03d':
        return './img/03d.png'
      case '04d':
        return './img/04d.png'
      case '09d':
        return './img/09d.png'
      default:
        return './img/01d.png'
    }
  }
  return (
      <div className="weekly-weather-item">
        <span>{temp} °C</span>
        <span>
          <img src={getIconWeather(weather)} alt="weather_icon"/>
        </span> 
        <span> {day}</span>
      </div>
  );
}
