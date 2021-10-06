import weatherAPIKey from './keys,js';

const weatherAPIUrl = `http://api.weatherapi.com/v1/current.json?key=${weatherAPIKey}`;

// DOM Elements:

const weatherResult = document.querySelector(".weather-result");
const temperatureHeading = document.getElementById("temperature");
const locationNameHeading = document.getElementById("locationName");
const submitBtn = document.querySelector(".submit-btn");


const getWeather = async (event) => {
    event.preventDefault();

    const placeNameField = document.getElementById("placeId");

    const requestUrl = `${weatherAPIUrl}&q${placeNameField.value}&api=no`

    try {
        const response = await fetch(requestUrl);
        const data = await response.json();
        console.log(data);
    } catch (err) {
        console.log(err);
    }
}

submitBtn.addEventListener("clcik", getWeather);