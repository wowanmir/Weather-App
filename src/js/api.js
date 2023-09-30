export const getWeatherData = async (currentCity) => {
  try {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${currentCity}&appid=bda6bd69d127f46ad3ff173087befb65&lang=ru&units=metric`
    );
    return response.json();
  } catch (error) {
    console.error(error);
  }
};

export const getWeeklyWeather = async () => {
  try {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/forecast?q=Omsk&appid=bda6bd69d127f46ad3ff173087befb65&lang=ru&units=metric&exclude=daily`
    );
    return response.json();
  } catch (error) {
    console.error(error);
  }
};
