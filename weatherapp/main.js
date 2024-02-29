import changeTheme from './changeTheme.js';
import {apiKey, getWeatherData } from './fetchdata.js';
import { weatherForm, cityInput, card} from './variables.js';

// const weatherForm = document.querySelector('.container .weather__form');
// const cityInput = document.querySelector('.container .weather__form .city__input');
// const card = document.querySelector('.container .card');
// const apiKey = '0191f90ee4ec64e5c7eb13cb519f1ca5';

weatherForm.addEventListener('submit', async function (event) {
   event.preventDefault();
   const city = cityInput.value;
   if (city) {
      try {
         const weatherData = await getWeatherData(city);
         displayWeatherInfo(weatherData);
      } catch (error) {
         console.error(`dữ liệu tải không thành công...`);
         displayError(error);
      }
   } else {
      displayError(`please enter the city`);
   }
});
//!Đoạn này là fetch data từ api, do đã có import ở trên , lấy data từ fetchdata.js
// async function getWeatherData(city) {
//    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
//    const response = await fetch(apiUrl);
//    //    console.log(data);
//    if (!response.ok) {
//       throw new Error('không fetch được data');
//    }
//    return await response.json();
// }
function displayWeatherInfo(data) {
   console.log(data);
   const {
      name: city,
      main: { temp, humidity },
      weather: [{ description, id }],
   } = data;
   card.textContent = '';
   card.style.display = 'grid';

   const cityDisplay = document.createElement('h1');
   const tempDisplay = document.createElement('p');
   const humidityDisplay = document.createElement('p');
   const descDisplay = document.createElement('p');
   const weatherEmoji = document.createElement('p');

   cityDisplay.textContent = city;
   tempDisplay.textContent = `${(temp - 273.15).toFixed(1)}°C`;
   humidityDisplay.textContent = `Humidity: ${humidity}`;
   descDisplay.textContent = description;
   weatherEmoji.textContent = getWeatherEmoji(id);

   weatherEmoji.classList.add('weather__emoji');

   card.appendChild(cityDisplay);
   card.appendChild(tempDisplay);
   card.appendChild(humidityDisplay);
   card.appendChild(descDisplay);
   card.appendChild(weatherEmoji);
}
function getWeatherEmoji(weatherId) {
   switch (true) {
      case weatherId >= 200 && weatherId < 300:
         return '⛈️';

      case weatherId >= 300 && weatherId < 500:
         return '🌦️';

      case weatherId >= 500 && weatherId < 600:
         return '🌧️';

      case weatherId >= 600 && weatherId < 700:
         return '☃️';

      case weatherId >= 700 && weatherId < 800:
         return '🌫️';

      case weatherId == 800:
         return '🌇';

      case weatherId > 800:
         return '☁️';
      default:
         return '⁉️';
   }
}
function displayError(message) {
   const errorDisplay = document.createElement('p');
   errorDisplay.textContent = message;
   errorDisplay.classList.add('error__display');
   card.textContent = '';
   card.style.display = 'grid';
   card.style.textTransform = 'capitalize';
   card.appendChild(errorDisplay);
}
