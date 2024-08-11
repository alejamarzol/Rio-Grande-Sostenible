const API_KEY = "8d9d9825b5930cc6d88546d5da569dee";

const fetchData = (position) => {
  const { latitude, longitude } = position.coords;
  const url = `https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${latitude}&lon=${longitude}&appid=${API_KEY}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => setWeatherData(data));
};

const setWeatherData = (data) => {
  console.log(data);
  const weatherData = {
    location: data.name,
    temperature: `${data.main.temp}°C`,
  };
  document.getElementById('city-name').textContent = weatherData.location;
  document.getElementById('temperature').textContent = weatherData.temperature;
  document.getElementById('weather-info').style.Color="white";
};

const onload = () => {
  navigator.geolocation.getCurrentPosition(fetchData);;
};


window.onload = onload;
