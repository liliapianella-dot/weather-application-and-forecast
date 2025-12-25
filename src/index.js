function updateWeather(response) {
  let currentCity = document.querySelector("#current-city");
  let currentTemperature = document.querySelector(
    "#current-temperature-number"
  );
  let temperature = Math.round(response.data.temperature.current);
  currentCity.innerHTML = response.data.city;
  currentTemperature.innerHTML = temperature;
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
