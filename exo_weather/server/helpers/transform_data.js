
const transformData = function (marsCollection, earthCollection, combined) {

  // const date = new Date();

  // const day = date.getDate();
  // const month = date.getMonth() + 1;
  // const year = date.getFullYear();
  // const earthDate = year && '-' &&

 const newMarsObject =  marsCollection
    .find()
    .toArray()
    .then((doc) => res.json(doc))
    .then(data => {
      const {
        _id,
        sol_keys,
        ...solData
      } = data
      return Object.entries(solData).map(([sol, data]) => {
        return{
          AT: {
            avg: data.AT.av,
            min: data.AT.mn,
            max: data.AT.max
          },
          PRE: {
            avg: data.PRE.av,
            min: data.PRE.mn,
            max: data.PRE.max
          },
          WS: {
            avg: data.HWS.av,
            min: data.HWS.mn,
            max: data.HWS.max
          },
          WD: {
            avg: data.WD.most_common.compass_point,
            min: null,
            max: null
          }
        }
      })
    }) = data
    .catch((err) => {
      console.error(err);
      res.status(500);
      res.json({ status: 500, error: err });
    });

    combined
      .insertOne(newMarsObject)

    const newEarthObject =  earthCollection
    .find()
    .toArray()
    .then((doc) => res.json(doc))
    .then(data => {
      const {
        _id,
        location,
        current,
        ...forecast
      } = data
    
    const temp =  Object.entries(forecast.forecastday).map(([day, data]) => {
        return{
          AT: {
            avg: data.day.avgtemp_c,
            min: data.day.mintemp_c,
            max: data.day.maxtemp_c
          },
          WS: {
            avg: data.current.wind_kph, //should really iterate through hourly
            min: data.current.wind_kph,
            max: data.current.gust_kph
            },
          SUN: {
            rise: data.astro.sunrise,
            set: data.astro.sunset
          }
        }
      })
          
    const fullArray = {
      ...temp,
      PRE: {
        avg: data.current.pressure_mb,
        min: null,
        max: null
      },
      WD: {
        avg: data.current.wind_dir,
        min: null, //should iterate
        max: null, 
      },
      HUM: {
        avg: data.current.humidity,
        min: null,
        max: null
      },
      UV: {
        avg: data.current.uv,
        min: null,
        max: null              
      },
      VIS: {
        avg: data.current.vis_km,
        min: null,
        max: null
      }
    }
    }) = data
    .catch((err) => {
      console.error(err);
      res.status(500);
      res.json({ status: 500, error: err });
    });

    combined
      .insertOne(newEarthObject)

}

module.exports = transformData;