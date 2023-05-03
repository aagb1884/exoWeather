const ObjectId = require('mongodb').ObjectId;
const transformData = function (marsCollection, earthCollection, combined, transformed) {

  require('dotenv').config();

  const apiKey = process.env.API_KEY

  const earthLocations = ["Edinburgh", "Tokyo", "Rio", "Cape-canaveral", "Cape-town", "mumbai", "melbourne"]
  
  // const url = `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${location}&days=3&aqi=no&alerts=no&hour=6`
  
  const fetchEarth = function(apiCity){
    console.log(`apiCity: ${apiCity}`)
    // const request = fetch("http://api.weatherapi.com/v1/forecast.json?key={apiKey}&q={apiCity}&days=3&aqi=no&alerts=no")
    // .then(res => res.json())
    // .then(data => console.log(`put out data: ${Object.values(data)}`))
    // .then(data => setEarthWeather(data))
    
  }

  const getEarthLocations = (earthLocation) => {
    console.log(`call to fetchEarth with ${earthLocation}`)
    console.log(`just earthLoc ${earthLocation}`)
    return fetchEarth(earthLocation)
    //  return fetchEarth(earthLocations[1])  
  }

  console.log(`api result: ${getEarthLocations(earthLocations)}`)
  
  setEarthWeather = function(document){
    console.log(`setEarthWeather: ${document}`)
    // earthCollection.insertOne(document)
  }

  transformed.deleteMany({"planet": "Mars"})
  transformed.deleteMany({"planet": "Earth"})
  
  
  
  const newMarsObject =  marsCollection
    .find()
    .toArray()
    .then(data => {
      // console.log(data[0])
      const {
        _id,
        sol_keys,
        ...solData
      } = data[0]
    temp =  Object.entries(solData).map(([sol, data]) => {
      return[
        {AT: {
          avg: data.AT.av,
          min: data.AT.mn,
          max: data.AT.mx
        }},
        {PRE: {
          avg: data.PRE.av,
          min: data.PRE.mn,
          max: data.PRE.mx
        }},
        {WS: {
          avg: data.HWS.av,
          min: data.HWS.mn,
          // max: data.HWS.m         x
        }},
        {WD: {
          avg: data.WD.most_common.compass_point,
          min: null,
          max: null
        }},
        {DATES: {
          utc: data.First_UTC,
          sol: sol
        }},
        {SUN: {
          rise: "04:03.23",
          set: "21:23.43"
        }}
      ]
    })
    return temp
  })
  .catch((err) => {
    console.error(err);
    res.status(500);
    res.json({ status: 500, error: err });
  })
  .then(data => {
    // console.log(data)
    return {
      planet: "Mars",
      location: "Insight",
      image: "mars.png",
      data}
  })
  .then(fullObj => {
    // console.log(`mars: ${fullObj}`)
    transformed
    .insertOne(fullObj)
  })

    const newEarthObject =  earthCollection
    .find()
    .toArray()
    // .then((doc) => {console.log(doc)})
    .then(data => {
      // console.log(data[0])
      const {
        _id,
        location,
        current,
        ...forecast
      } = data[0]
      // console.log(forecast.forecast.forecastday[0])
    const temp =  forecast.forecast.forecastday.map((data) => {
      return[
        {AT: {
          avg: data.day.avgtemp_c,
          min: data.day.mintemp_c,
          max: data.day.maxtemp_c
        }},
        {WS: {
          avg: data.day.wind_kph, //should really iterate through hourly
          min: data.day.wind_kph,
          max: data.day.gust_kph
          }},
        {SUN: {
          rise: data.astro.sunrise,
          set: data.astro.sunset
        }},
        {DATES: {
          utc: data.date,
          sol: null
        }},
        {SUN: {
          rise: data.astro.sunrise,
          set: data.astro.sunset
        }},
        {HUM: {
          avg: data.day.avghumidity,
          min: null,
          max: null
        }},
        {VIS: {
          avg: data.day.avgvis_km,
          min: null,
          max: null
        }},
        {UV: {
          avg: data.day.uv,
          min: null,
          max: null
        }}
      ]
    })
    return temp
    // console.log(temp)
    // })
    })
  .catch((err) => {
    console.error(err);
    res.status(500);
    res.json({ status: 500, error: err });
    })
    .then(data => {
      // console.log(data)
      return {
        planet: "Earth",
        location: "Edinburgh",
        image: "earth.png",
        data
      }
      //   const fullArray = {
        //     ...temp,
        //     PRE: {
          //       avg: data.current.pressure_mb,
          //       min: null,
          //       max: null
          //     },
          //     WD: {
            //       avg: data.current.wind_dir,
            //       min: null, //should iterate
            //       max: null, 
            //     },
            //     HUM: {
              //       avg: data.current.humidity,
              //       min: null,
              //       max: null
              //     },
              //     UV: {
                //       avg: data.current.uv,
                //       min: null,
                //       max: null              
                //     },
                //     VIS: {
                  //       avg: data.current.vis_km,
                  //       min: null,
                  //       max: null
                  //     }
                  //   }
                  //   }) = data
                })
  .then(fullObj => {
    // console.log(`earth: ${fullObj}`)
    transformed
      .insertOne(fullObj)
  })             

  // console.log(`Full: ${fullArray}`)
  //   transformed
  //     .insertOne(newEarthObject)
}

module.exports = transformData;