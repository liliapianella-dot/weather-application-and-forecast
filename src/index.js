function updateWeather(response) {
  let currentCity = document.querySelector("#current-city");
  let currentTemperature = document.querySelector(
    "#current-temperature-number"
  );
  let temperature = Math.round(response.data.temperature.current);
  let descriptionWeather = document.querySelector("#descripton-weather");
  let currentHumidity = document.querySelector("#humidity");
  let currentWind = document.querySelector("#wind");
  let currentWeatherEmoji = document.querySelector("#emoji");

  currentCity.innerHTML = response.data.city;
  currentTemperature.innerHTML = temperature;
  descriptionWeather.innerHTML = response.data.condition.description;
  currentHumidity.innerHTML = response.data.temperature.humidity;
  currentWind.innerHTML = response.data.wind.speed;
  currentWeatherEmoji.innerHTML = `<img
              src= "${response.data.condition.icon_url}"  alt=""
          />`;
}

function searchCity(city) {
  let apiKey = "90303e49ba1c9f82cb5tf7o1afec334c";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
  axios.get(apiUrl).then(updateWeather);
}

function handleSearchSubmit(event) {
  event.preventDefault();
  let inputElement = document.querySelector("#search-form-input");
  searchCity(inputElement.value);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);
searchCity("Copenhagen");
