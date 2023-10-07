
export const DEGREE = {
    IMPERIAL: "imperial",
    METRIC: "metric",
  };
export const getTempToDegree = (currentTemp, currentDegree) => {
    switch (currentDegree) {
      case DEGREE.IMPERIAL:
        return `${currentTemp}°F`;
      case DEGREE.METRIC:
        return `${(currentTemp - 273.15).toFixed(1)}°C`;
      default:
        return currentTemp;
    }
  };