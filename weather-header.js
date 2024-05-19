const url =
  "https://api.openweathermap.org/data/2.5/weather?q=tooele&units=imperial&appid=7f52349f0f86e91a60c86c37fa3e8f53";

const weatherSection = document.getElementById("weather-section");
const stats = document.getElementById("stats");
const summary = document.getElementById("sumamry");
const currentDesc = document.getElementById("current-desc");
const currentTemp = document.getElementById("current-temp");
const currentWindChill = document.getElementById("current-windChill");
const currentHumid = document.getElementById("current-humid");
const currentWindSpeed = document.getElementById("current-windSpeed");

fetch(url)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    let weather = jsObject.weather;
    let main = jsObject.main;
    let wind = jsObject.wind;
    console.log(weather, main, wind);
    // stats.textContent = jsObject.weather[1].description;

    currentDesc.textContent = `${weather[0].description}`;
    currentTemp.textContent = `${main.temp}`;
    currentWindChill.textContent = `${main.feels_like}`;
    currentHumid.textContent = `${main.humidity}`;
    currentWindSpeed.textContent = `${wind.speed}`;
  });
