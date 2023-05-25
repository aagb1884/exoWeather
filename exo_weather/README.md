# exoWeather

A week-long JavaScript group project as part of our CodeClan course.

##Project Brief

We will create a weather app that allows users to search for the weather in a specific location on a specific planet (or plausibly moon-ish object).

We will uses an API such as [OpenWeatherMap](https://openweathermap.org/api), [WeatherAPI](https://www.weatherapi.com/), or [Meteomatics](https://www.meteomatics.com/en/weather-api/) to retrieve the current weather and forecast information for Earth, and a NASA API to retrieve the weather for Mars.

###MVP

A user should be able to:

- See both planets side by side.
- Choose a planet and display more detailed information on that planet’s weather.
- See the data in a unique, accessible and user-friendly way.

###Extensions
- Search for weather in a specific location on a specific planet (if the data allows it).
- Select altnerate theme(s) and order of planets.
- Get clothing recommendations based on the weather.
- Select different planets to view non-weather data about them.
- User can save their favourite planets/themes/layouts.

##What actually happened

We achieved MVP, but faced a few obstacles along the way:

- The NASA API for Mars weather is not being updated as the Mars Rovers attempt to conserve power. As a result we had to use historic weather data for Mars rather than a forecast.
- The historic data for Mars had different keys to the Earth weather data (we used WeatherAPI for this), and so we had to:
	- Fetch the Earth weather forecast
	- Transform it and the Mars data so they had consistent keys.
	- Use it to create our own database which would then be the source of data for the Front 	End.
- The entire group had existing commitments during the week of the project meaning this was essentially a 4 day project.

##How it works

- From the home page you can either click on ‘Get Started’ or use the burger menu in the top right of the screen and select ‘Weather’ (NB. You can also click on ‘About’ if you want to read more about the project).
- From the first dropdown menu, select a location to get weather information from.
- From the second dropdown menu, select a location to get weather information from.
- You now have two locations with their accompanying weather data, and can change your selection to see other planets/locations.

## Dev Instructions
### first time/initial setup
1. `Git clone` into the directory of your choice
2. make sure you do an `npm install` in each of the `server` and `client` directory
3. in the server directory, make sure you do the following:
  >npm install express 
  >
  >npm install mongodb 
  >
  >npm install cors
  >
  >npm install --save-dev nodemon
4. you should then be able to run both the server and the client in separate tabs on the terminal:
  >npm run server:dev
  >
  >npm start
