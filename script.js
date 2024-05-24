const API_KEY = "7acc75e653ccff065a6c4fc2f1b7cd38";
const URL = "https://api.openweathermap.org/data/2.5/weather";

const getWeatherData = (city) => {
    const FULL_URL = `${URL}?q=${city}&appid=${API_KEY}&units=imperial`;
    return fetch(FULL_URL)
        .then((res) => res.json());
};

const searchCity = () => {
    const city = document.getElementById('city-input').value;
    getWeatherData(city)
        .then((res) => {
            showWeatherData(res);
        })
        .catch((error) => {
            console.log(error);
            console.log("Something happened");
        });
};

const showWeatherData = (weatherData) => {
    document.getElementById("city-name").innerText = weatherData.name;
    document.getElementById("weather-type").innerText = weatherData.weather[0].main;
    document.getElementById("temp").innerText = `${weatherData.main.temp}`;
    document.getElementById("feels-like").innerText = `${weatherData.main.feels_like}`;
    document.getElementById("min-temp").innerText = `${weatherData.main.temp_min}`;
    document.getElementById("max-temp").innerText = `${weatherData.main.temp_max}`;

    const iconCode = weatherData.weather[0].icon;
    const iconUrl = `http://openweathermap.org/img/wn/${iconCode}@2x.png`;
    document.getElementById("weather-icon").src = iconUrl;
};
