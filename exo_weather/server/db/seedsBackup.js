db.mars.insertOne(
  { 
    "sol_keys": [1219, 1220, 1221],
    "1219": {
      "AT": { "av": -71.233, "ct": 326642, "mn": -101.024, "mx": -27.149 }, 
      "HWS": { "av": 4.35, "ct": 154146, "mn": 0.156, "mx": 17.617 },
      "PRE": { "av": 761.006, "ct": 163012, "mn": 742.1498, "mx": 780.3891 }, 
      "WD": {
        "most_common": { "compass_degrees": 202.5, "compass_point": "SSW", 
                "compass_right": -0.382683432365, "compass_up": -0.923879532511, "ct": 28551 }, 
      },
      "First_UTC": "2019-08-19T08:03:59Z", 
      "Last_UTC": "2019-08-20T08:43:34Z", 
      "Season": "Spring"
    },
    "1220": {    
      "AT": { "av": -61.233, "ct": 326642, "mn": -98.024, "mx": -29.149 }, 
      "HWS": { "av": 3.35, "ct": 154146, "mn": 0.356, "mx": 17.817 },
      "PRE": { "av": 749.006, "ct": 163012, "mn": 732.1498, "mx": 770.3891 }, 
      "WD": {
        "most_common": { "compass_degrees": 202.5, "compass_point": "SSW", 
                "compass_right": -0.382683432365, "compass_up": -0.923879532511, "ct": 28551 }, 
      },
      "First_UTC": "2019-08-19T08:03:59Z", 
      "Last_UTC": "2019-08-20T08:43:34Z", 
      "Season": "Spring"
    },     
      
    "1221": {"AT": { "av": -69.233, "ct": 326642, "mn": -100.067, "mx": -28.983 }, 
    "HWS": { "av": 4.09, "ct": 154291, "mn": 0.134, "mx": 16.679 },
    "PRE": { "av": 759.016, "ct": 163013, "mn": 745.1813, "mx": 778.3311 }, 
    "WD": {
      "most_common": { "compass_degrees": 202.5, "compass_point": "SSW", 
              "compass_right": -0.382683432365, "compass_up": -0.923879532511, "ct": 28551 }, 
    },
    "First_UTC": "2019-08-19T08:03:59Z", 
    "Last_UTC": "2019-08-20T08:43:34Z", 
    "Season": "Spring"
  },
  })

db.earth.insertOne(
  {
    "location": {
      "name": "Edinburgh",
      "region": "City of Edinburgh",
      "country": "United Kingdom",
      "lat": 55.95,
      "lon": -3.16,
      "tz_id": "Europe/London",
      "localtime_epoch": 1682935718,
      "localtime": "2023-05-01 11:08"
    },
    "current": {
      "last_updated_epoch": 1682935200,
      "last_updated": "2023-05-01 11:00",
      "temp_c": 15.0,
      "temp_f": 59.0,
      "is_day": 1,
      "condition": {
        "text": "Partly cloudy",
        "icon": "//cdn.weatherapi.com/weather/64x64/day/116.png",
        "code": 1003
      },
      "wind_mph": 12.5,
      "wind_kph": 20.2,
      "wind_degree": 240,
      "wind_dir": "WSW",
      "pressure_mb": 1015.0,
      "pressure_in": 29.97,
      "precip_mm": 0.2,
      "precip_in": 0.01,
      "humidity": 72,
      "cloud": 25,
      "feelslike_c": 13.8,
      "feelslike_f": 56.9,
      "vis_km": 10.0,
      "vis_miles": 6.0,
      "uv": 2.0,
      "gust_mph": 14.3,
      "gust_kph": 23.0
    },
    "forecast": {
      "forecastday": [
        {
          "date": "2023-05-01",
          "date_epoch": 1682899200,
          "day": {
            "maxtemp_c": 11.6,
            "maxtemp_f": 52.9,
            "mintemp_c": 4.4,
            "mintemp_f": 39.9,
            "avgtemp_c": 7.5,
            "avgtemp_f": 45.5,
            "maxwind_mph": 11.2,
            "maxwind_kph": 18.0,
            "totalprecip_mm": 1.8,
            "totalprecip_in": 0.07,
            "totalsnow_cm": 0.0,
            "avgvis_km": 9.0,
            "avgvis_miles": 5.0,
            "avghumidity": 87.0,
            "daily_will_it_rain": 1,
            "daily_chance_of_rain": 86,
            "daily_will_it_snow": 0,
            "daily_chance_of_snow": 0,
            "condition": {
              "text": "Patchy rain possible",
              "icon": "//cdn.weatherapi.com/weather/64x64/day/176.png",
              "code": 1063
            },
            "uv": 2.0
          },
          "astro": {
            "sunrise": "05:30 AM",
            "sunset": "08:51 PM",
            "moonrise": "03:35 PM",
            "moonset": "04:46 AM",
            "moon_phase": "Waxing Gibbous",
            "moon_illumination": "78",
            "is_moon_up": 1,
            "is_sun_up": 0
          }
        }]}
      }
)
