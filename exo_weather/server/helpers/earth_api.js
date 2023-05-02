

// EARTH API - may not remain in this folder

require('dotenv').config();

const apiKey = process.env.API_KEY

// temp code below
const apiCity = SOMETHING FROM DROPDOWN

const fetchEarth = function(){
    const request = fetch("http://api.weatherapi.com/v1/forecast.json?key={apiKey}&q={apiCity}&days=3&aqi=no&alerts=no")
    .then(response => response.json())
    .then(data => setEarthWeather(data.message))
}




