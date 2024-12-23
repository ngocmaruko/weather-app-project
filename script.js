const weatherForm = document.querySelector('.weatherForm');
const cityInput = document.querySelector('.cityInput');
const card = document.querySelector('.card');
const apiKey = 'd9dd13a5be0c84d3db5cc845473588ab';

document.addEventListener('DOMContentLoaded', async () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        try {
          const weatherData = await getWeatherDataByCoords(latitude, longitude);
          displayWeatherInfo(weatherData);
        } catch (error) {
          console.log(error);
          displayError('Unable to fetch weather for your location.');
        }
      },
      () => {
        displayError('Geolocation access denied. Please enter a city manually.');
      }
    );
  } else {
    displayError('Geolocation is not supported by your browser. Please enter a city manually.');
  }
});

weatherForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  const city = cityInput.value;

  if (city) {
    try {
      const weatherData = await getWeatherData(city);
      displayWeatherInfo(weatherData);
    } catch (error) {
      console.log(error);
      displayError(error);
    }
  } else {
    displayError('Please enter a city');
  }
});

async function getWeatherData(city) {
  const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

  const response = await fetch(apiURL);

  if (!response.ok) {
    throw new Error('Could not fetch weather data');
  }
  return await response.json();
}

async function getWeatherDataByCoords(latitude, longitude) {
  const apiURL = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;

  const response = await fetch(apiURL);

  if (!response.ok) {
    throw new Error('Could not fetch weather data for your location');
  }
  return await response.json();
}

function displayWeatherInfo(data) {
  console.log(data);

  const { name: city, main: { temp, humidity }, weather: [{ description, id }] } = data;

  const cityDisplay = document.createElement('h1');
  const temDisplay = document.createElement('p');
  const humidityDisplay = document.createElement('p');
  const desDisplay = document.createElement('p');
  const weatherEmoji = document.createElement('p');

  cityDisplay.textContent = city;
  temDisplay.textContent = `${(temp - 273.15).toFixed(1)}°C`;
  humidityDisplay.textContent = `Humidity: ${humidity}%`;
  desDisplay.textContent = description;
  weatherEmoji.textContent = getWeatherEmoji(id);

  cityDisplay.classList.add('cityDisplay');
  temDisplay.classList.add('temDisplay');
  humidityDisplay.classList.add('humidityDisplay');
  desDisplay.classList.add('desDisplay');
  weatherEmoji.classList.add('weatherEmoji');

  card.textContent = '';
  card.style.display = 'flex';
  card.appendChild(cityDisplay);
  card.appendChild(temDisplay);
  card.appendChild(humidityDisplay);
  card.appendChild(desDisplay);
  card.appendChild(weatherEmoji);
}

function getWeatherEmoji(weatherId) {
  switch (true) {
    case weatherId >= 200 && weatherId < 300:
      return '⚡';
    case weatherId >= 300 && weatherId < 400:
      return '🌧️';
    case weatherId >= 500 && weatherId < 600:
      return '☔';
    case weatherId >= 600 && weatherId < 700:
      return '⛄';
    case weatherId >= 700 && weatherId < 800:
      return '🌫';
    case weatherId === 800:
      return '🌞';
    case weatherId > 801 && weatherId < 810:
      return '⛅';
    default:
      return '❓';
  }
}

function displayError(message) {
  const errorDisplay = document.createElement('p');
  errorDisplay.textContent = message;
  errorDisplay.classList.add('errorDisplay');

  card.textContent = '';
  card.style.display = 'flex';
  card.appendChild(errorDisplay);
}
