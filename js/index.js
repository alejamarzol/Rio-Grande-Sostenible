const API_KEY = "d486680234478a837af185a95a74";

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
};

const onload = () => {
  navigator.geolocation.getCurrentPosition(fetchData);
};

window.onload = onload;
