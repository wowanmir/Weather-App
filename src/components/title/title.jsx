import { SvgSelector } from "../weekly-weather/SvgSelector/svgSelector";
import { getTempToDegree } from "../../utils/getTempToDegree";
import { CelciaIcon } from "..//../icons/celcia-icon";
import { Fahrenheit } from "..//../icons/fahrenheit-icon";
import "./style.css";

function Title({ currentTemp, imgWeather, currentDegree, handleChangeDegree }) {
  const getIconWeather = () =>
    imgWeather !== undefined ? SvgSelector(imgWeather) : SvgSelector("02d");

  return (
    <div className="header">
      <div className="title">
        <span>{getIconWeather(imgWeather)} </span>
        <span className="temp">
          {getTempToDegree(currentTemp, currentDegree)}
        </span>
      </div>
      <button className="toggle" onClick={handleChangeDegree}>
        <Fahrenheit className="fahrenheit" size="20" /> &nbsp; switch &nbsp;
        <CelciaIcon className="celcia" size="25" />
      </button>
    </div>
  );
}

export default Title;
