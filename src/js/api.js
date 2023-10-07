export const getWeatherData = async (currentCity, currentDegree) => {
  try {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${currentCity}&appid=bda6bd69d127f46ad3ff173087befb65&lang=ru&units=${currentDegree}`
    );
    return response.json();
  } catch (error) {
    console.error(error);
  }
};

export const getWeeklyWeather = async (currentCity, currentDegree) => {
  try {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/forecast?q=${currentCity}&appid=bda6bd69d127f46ad3ff173087befb65&lang=ru&units=${currentDegree}&exclude=daily`
    );
    return response.json();
  } catch (error) {
    console.error(error);
  }
};
// imperial //кельвины
// metric// цельсия