var apiKey = "60febae823b8eccb276fbf44244f8a28";

var tableBody = document.getElementById('five-day-forecast');
var fetchButton = document.getElementById('search-btn');

var today = moment();

function getApi() {
  // fetch request gets coordinates based on city/user input
  var userInput = document.getElementById('location-search').value;
  var requestUrl = 'http://api.openweathermap.org/geo/1.0/direct?q=' + userInput + '&appid=' + apiKey;
  console.log(requestUrl);
  fetch(requestUrl)
    .then(function (response) {
      console.log(response);
      return response.json();
    })
    .then(function (data) {
      console.log(data)

      var lon = data[0].lon
      var lat = data[0].lat
      console.log(lon);
      console.log(lat);

      var weatherUrl = 'https://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon + '&limit=1&appid=' + apiKey;
      console.log(weatherUrl);

      fetch(weatherUrl)
      .then(function (weatherResponse){
        console.log(weatherResponse);
        return weatherResponse.json();
      })
      .then(function(weatherData){
        console.log(weatherData);

        renderWeather(weatherData);
      })
    });
}

function renderWeather(data) {
  console.log(data.name);
  var userCity = document.getElementById('city-name');
  userCity.textContent = data.name;
  
  var timeId = document.getElementById('current-day')
  timeId.textContent = '(' + (today.format("MMM Do, YYYY")) + ')';

  var iconId = document.getElementById('weather-icon');
  var weatherIcon = data.weather[0].icon;
  iconId.src = 'http://openweathermap.org/img/w/' + weatherIcon + '.png';

  var tempData = data.main.temp;
  var windData = data.wind.speed;
  var humidityData = data.main.humidity;
  var uvData = data.uvi;

  console.log(tempData);
  console.log(windData);
  console.log(humidityData);
  console.log(uvData);
}

fetchButton.addEventListener('click', getApi);



// create recent search (how to save)
  // add recent searches to an array/object
  // local storage
  // render
// if saved an array, 

// javascript openweather map api isplay icon