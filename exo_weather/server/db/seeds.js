use exoWeather;

// db.dropDatabase();
db.config.deleteMany({})
db.combined.deleteMany({})

db.config.insertMany([
  {
    name: "AT",
    min: -105,
    max: -5
  },
  {
    name: "HWS",
    min: 0,
    max: 30
  },
  {
    name: "PRE",
    min: 550,
    max: 800
  },
  {
    name: "WD",
    compassValues: [ 
      {n: 0},
      {nne: 22.5},
      {ne: 45},
      {ene: 67.5},
      {e: 90},
      {ese: 112.5},
      {se: 135},
      {sse: 157.5},
      {s: 180},
      {ssw: 202.5},
      {sw: 225},
      {wsw: 247.5},
      {w: 270},
      {wnw: 292.5},
      {nw: 315},
      {nnw: 337.5}
    ]
  }
]);


db.config.insertMany([
  {
    name: "AT",
    min: -105,
    max: -5
  },
  {
    name: "HWS",
    min: 0,
    max: 30
  },
  {
    name: "PRE",
    min: 550,
    max: 800
  },
  {
    name: "WD",
    compassValues: [ 
      {n: 0},
      {nne: 22.5},
      {ne: 45},
      {ene: 67.5},
      {e: 90},
      {ese: 112.5},
      {se: 135},
      {sse: 157.5},
      {s: 180},
      {ssw: 202.5},
      {sw: 225},
      {wsw: 247.5},
      {w: 270},
      {wnw: 292.5},
      {nw: 315},
      {nnw: 337.5}
    ]
  }
]);

db.combined.insertMany([
  {planet: "Mars",
  location: "Insight",
  image: "mars.png",
  data: [
    [
      {Temperature: { avg: -71.233, min: -101.024, max: -27.149 }},
      {Pressure: { avg: 761.006, min: 742.1498, max: 780.3891 }},
      {WindSpeed: { avg: 4.35, min: 0.156, max: 17.617 }},
      {WindDirection: { avg: 'SSW', min: 'ESE', max: 'SW' }},
      {Dates: { utc: '2023-05-01T04:05:34Z', sol: '1317' }},
      {Astro: { sunrise: '04:03.23', sunset: '21:23.43' }}
    ],
    [
      {Temperature: { avg: -61.233, min: -98.024, max: -29.149 }},
      {Pressure: { avg: 749.006, min: 732.1498, max: 770.3891 }},
      {WindSpeed: { avg: 3.35, min: 0.356, max: 17.817 }},
      {WindDirection: { avg: 'SSW', min: 'S', max: 'E' }},
      {Dates: { utc: '2023-05-02T04:01:23Z', sol: '1318' }},
      {Astro: { sunrise: '04:03.23', sunset: '21:23.43' }}
    ],
    [
      {Temperature: { avg: -69.233, min: -100.067, max: -28.983 }},
      {Pressure: { avg: 759.016, min: 745.1813, max: 778.3311 }},
      {WindSpeed: { avg: 4.09, min: 0.134, max: 16.679 }},
      {WindDirection: { avg: 'SSW', min: 'S', max: 'SW' }},
      {Dates: { utc: '2023-05-03T04:06:15Z', sol: '1319' }},
      {Astro: { sunrise: '04:03.23', sunset: '21:23.43' }}
    ]
  ] 
},
  {planet: "Mars",
  location: "Curiosity",
  image: "mars.png",
  data: [
    [
      {Temperature: { avg: -69.233, min: -100.067, max: -28.983 }},
      {Pressure: { avg: 759.016, min: 745.1813, max: 778.3311 }},
      {WindSpeed: { avg: 4.09, min: 0.134, max: 16.679 }},
      {WindDirection: { avg: 'NNW', min: 'NW', max: 'WNW' }},
      {Dates: { utc: '2023-05-01T04:05:34Z', sol: '1317' }},
      {Astro: { sunrise: '04:03.23', sunset: '21:23.43' }}
    ],
    [
      {Temperature: { avg: -61.233, min: -98.024, max: -29.149 }},
      {Pressure: { avg: 749.006, min: 732.1498, max: 770.3891 }},
      {WindSpeed: { avg: 3.35, min: 0.356, max: 17.817 }},
      {WindDirection: { avg: 'NNW', min: 'NW', max: 'N' }},
      {Dates: { utc: '2023-05-02T04:05:34Z', sol: '1318' }},
      {Astro: { sunrise: '04:03.23', sunset: '21:23.43' }}
    ],
    [
      {Temperature: { avg: -71.233, min: -101.024, max: -27.149 }},
      {Pressure: { avg: 761.006, min: 742.1498, max: 780.3891 }},
      {WindSpeed: { avg: 4.35, min: 0.156, max: 17.617 }},
      {WindDirection: { avg: 'NNW', min: 'NW', max: 'W' }},
      {Dates: { utc: '2023-05-03T04:05:34Z', sol: '1319' }},
      {Astro: { sunrise: '04:03.23', sunset: '21:23.43' }}
    ]
  ] 
},

{planet: "Earth",
location: "Edinburgh",
image: "earth.png",
 data: [
  [
    {Temperature: { avg: 9.7, min: 7.0, max: 12.2 }},
    {Pressure: { avg: 1024, min: 982.1498, max: 1113 }},
    {WindSpeed: { avg: 10.4, min: 5.6, max: 12.4 }},
    {WindDirection: { avg: 'ENE', min: 'S', max: 'SW' }},
    {Dates: { utc: '2023-05-03T08:03:59Z', sol: '230503' }},
    {Astro: { sunrise: '05:25 AM', sunset: '20:55 PM' }},
    {Humidity: { avg: 87, min: 85, max:  95 }},
    {Visibility: { avg: 10, min: 8, max: 13 }},
    {UV: { avg: 1, min: 1, max: 1 }}
  ],
  [
    {Temperature: { avg: 8.2, min: 5.8, max: 11.5 }},
    {Pressure: { avg: 749.006, min: 732.1498, max: 990 }},
    {WindSpeed: { avg: 3.35, min: 0.356, max: 29.5 }},
    {WindDirection: { avg: 'SSW', min: 'S', max: 'SW' }},
    {Dates: { utc: '2023-05-05T08:03:59Z', sol: '230504' }},
    {Astro: { sunrise: '05:23 AM', sunset: '20:57 PM' }},
    {Humidity: { avg: 77, min: 75, max:  85 }},
    {Visibility: { avg: 18, min: 13, max: 23 }},
    {UV: { avg: 2, min: 2, max: 2 }} 
  ],
  [
    {Temperature: { avg: 8.1, min: 6.5, max: 9.7 }},
    {Pressure: { avg: 759.016, min: 745.1, max: 830 }},
    {WindSpeed: { avg: 14.09, min: 10.134, max: 18.7 }},
    {WindDirection: { avg: 'WSW', min: 'S', max: 'SW' }},
    {Dates: { utc: '2023-05-05T08:03:59Z', sol: '230505' }},
    {Astro: { sunrise: '05:21 AM', sunset: '20:59 PM' }},
    {Humidity: { avg: 97.0, min: 85, max:  98.78 }},
    {Visibility: { avg: 19, min: 18, max: 23 }},
    {UV: { avg: 2, min: 2, max: 3 }}
  ]
] 
},

{planet: "Earth",
location: "Tokyo",
image: "earth.png",
 data: [
  [
    {Temperature: { avg: 21.2, min: 17.3, max: 24.9 }},
    {Pressure: { avg: 1022.0, min: 1002.1, max: 1031.3 }},
    {WindSpeed: { avg: 15.35, min: 12.156, max: 19 }},
    {WindDirection: { avg: 'W', min: 'S', max: 'SW' }},
    {Dates: { utc: '2023-05-03T08:03:59Z', sol: '230503' }},
    {Astro: { sunrise: '04:47 AM', sunset: '18:30 PM' }},
    {Humidity: { avg: 57, min: 45, max:  82 }},
    {Visibility: { avg: 10, min: 9, max: 20 }},
    {UV: { avg: 5, min: 5, max: 6 }}
  ],
  [
    {Temperature: { avg: 21.7, min: 18.3, max: 26.8 }},
    {Pressure: { avg: 1031, min: 1012.8, max: 1040 }},
    {WindSpeed: { avg: 35.35, min: 30.3, max: 40.7 }},
    {WindDirection: { avg: 'SSW', min: null, max: null }},
    {Dates: { utc: '2023-05-04T08:03:59Z', sol: '230504' }},
    {Astro: { sunrise: '04:46 AM', sunset: '18:30 PM' }},
    {Humidity: { avg: 56.3, min: 53, max:  65.78 }},
    {Visibility: { avg: 10, min: 10, max: 12 }},
    {UV: { avg: 6, min: 6, max: 6 }} 
  ],
  [
    {Temperature: { avg: 21.7, min: 18.3, max: 26.8 }},
    {Pressure: { avg: 1031, min: 1012.8, max: 1040 }},
    {WindSpeed: { avg: 35.35, min: 30.3, max: 40.7 }},
    {WindDirection: { avg: 'SW', min: 'W', max: 'SW' }},
    {Dates: { utc: '2023-05-05T08:03:59Z', sol: '230505' }},
    {Astro: { sunrise: '04:45 AM', sunset: '18:31 PM' }},
    {Humidity: { avg: 57, min: 50, max:  95.8 }},
    {Visibility: { avg: 19, min: 18, max: 23 }},
    {UV: { avg: 3, min: 2, max: 4 }}
  ]
] 
},

{planet: "Earth",
location: "Rio",
image: "earth.png",
 data: [
  [
    {Temperature: { avg: 23.9, min: 19.8, max: 29.5 }},
    {Pressure: { avg: 1013, min: 942.1498, max: 1113 }},
    {WindSpeed: { avg: 10.3, min: 8.156, max: 11.2 }},
    {WindDirection: { avg: 'SSW', min: 'S', max: 'SW' }},
    {Dates: { utc: '2023-05-03T08:03:59Z', sol: '230503' }},
    {Astro: { sunrise: '06:13 AM', sunset: '05:26 PM' }},
    {Humidity: { avg: 82, min: 75, max:  85 }},
    {Visibility: { avg: 8, min: 8, max: 12 }},
    {UV: { avg: 6, min: 4, max: 8 }}
  ],
  [
    {Temperature: { avg: 24.5, min: 20.0, max: 30.7 }},
    {Pressure: { avg: 1023, min: 982.8, max: 1043 }},
    {WindSpeed: { avg: 11.3, min: 10.6, max: 12.2 }},
    {WindDirection: { avg: 'SW', min: 'SSW', max: 'WSW' }},
    {Dates: { utc: '2023-05-04T08:03:59Z', sol: '230504' }},
    {Astro: { sunrise: '06:14 AM', sunset: '05:26 PM' }},
    {Humidity: { avg: 79, min: 75, max:  80 }},
    {Visibility: { avg: 10, min: 8, max: 12 }},
    {UV: { avg: 6, min: 4, max: 7 }}
  ],
  [
    {Temperature: { avg: 25.0, min: 21.2, max: 30.9 }},
    {Pressure: { avg: 1003, min: 942.1498, max: 1013 }},
    {WindSpeed: { avg: 10.3, min: 8.156, max: 11.2 }},
    {WindDirection: { avg: 'W', min: 'S', max: 'WNW' }},
    {Dates: { utc: '2023-05-05T08:03:59Z', sol: '230505' }},
    {Astro: { sunrise: '06:14 AM', sunset: '05:25 PM' }},
    {Humidity: { avg: 79, min: 71, max:  80 }},
    {Visibility: { avg: 10, min: 8, max: 12 }},
    {UV: { avg: 7, min: 6, max: 8 }}
  ]
] 
},

{planet: "Earth",
location: "Cape Canaveral",
image: "earth.png",
 data: [
  [
    {Temperature: { avg: 23.6, min: 20.1, max: 28.7 }},
    {Pressure: { avg: 1009, min: 1002, max: 1013 }},
    {WindSpeed: { avg: 21.35, min: 20.156, max: 23.4 }},
    {WindDirection: { avg: 'W', min: 'WNW', max: 'SW' }},
    {Dates: { utc: '2023-05-03T08:03:59Z', sol: '230503' }},
    {Astro: { sunrise: '06:40 AM', sunset: '19:59 PM' }},
    {Humidity: { avg: 59, min: 26, max:  69 }},
    {Visibility: { avg: 10, min: 10, max: 12 }},
    {UV: { avg: 7, min: 6, max: 7 }}
  ],
  [
    {Temperature: { avg: 23.1, min: 19.2, max: 27.2 }},
    {Pressure: { avg: 1010, min: 1000, max: 1023 }},
    {WindSpeed: { avg: 11.3, min: 10, max: 16.2 }},
    {WindDirection: { avg: 'SW', min: 'SW', max: 'SSW' }},
    {Dates: { utc: '2023-05-04T08:03:59Z', sol: '230504' }},
    {Astro: { sunrise: '06:39 AM', sunset: '19:59 PM' }},
    {Humidity: { avg: 50, min: 46, max:  60 }},
    {Visibility: { avg: 10, min: 10, max: 12 }},
    {UV: { avg: 6, min: 6, max: 7 }}
  ],
  [
    {Temperature: { avg: 23.1, min: 19.2, max: 27.2 }},
    {Pressure: { avg: 1010, min: 1000, max: 1023 }},
    {WindSpeed: { avg: 21.8, min: 20, max: 25.9 }},
    {WindDirection: { avg: 'W', min: 'SW', max: 'WNW' }},
    {Dates: { utc: '2023-05-05T08:03:59Z', sol: '230505' }},
    {Astro: { sunrise: '06:39 AM', sunset: '20:00 PM' }},
    {Humidity: { avg: 63, min: 56, max:  66 }},
    {Visibility: { avg: 10, min: 10, max: 12 }},
    {UV: { avg: 6, min: 6, max: 7 }}
  ]
] 
},

{planet: "Earth",
location: "CapeTown",
image: "earth.png",
 data: [
  [
    {Temperature: { avg: 17.0, min: 13.9, max: 21.8 }},
    {Pressure: { avg: 1020, min: 1002, max: 1030 }},
    {WindSpeed: { avg: 12.7, min: 10, max: 15.1 }},
    {WindDirection: { avg: 'SSW', min: 'W', max: 'SW' }},
    {Dates: { utc: '2023-05-03T08:03:59Z', sol: '230503' }},
    {Astro: { sunrise: '07:23 AM', sunset: '18:04 PM' }},
    {Humidity: { avg: 72, min: 66, max:  88 }},
    {Visibility: { avg: 10, min: 10, max: 12 }},
    {UV: { avg: 4, min: 1, max: 5 }}
  ],
  [
    {Temperature: { avg: 16.9, min: 14.3, max: 21.3 }},
    {Pressure: { avg: 1020, min: 1002, max: 1030 }},
    {WindSpeed: { avg: 13.6, min: 12, max: 16.6 }},
    {WindDirection: { avg: 'SSW', min: 'SW', max: 'W' }},
    {Dates: { utc: '2023-05-04T08:03:59Z', sol: '230504' }},
    {Astro: { sunrise: '07:23 AM', sunset: '18:03 PM' }},
    {Humidity: { avg: 74, min: 66, max:  88 }},
    {Visibility: { avg: 10, min: 10, max: 12 }},
    {UV: { avg: 5, min: 3, max: 5 }}
  ],
  [
    {Temperature: { avg: 17.3, min: 14.2, max: 21.6 }},
    {Pressure: { avg: 1010, min: 1002, max: 1030 }},
    {WindSpeed: { avg: 11.5, min: 10, max: 13.3 }},
    {WindDirection: { avg: 'SW', min: 'SW', max: 'W' }},
    {Dates: { utc: '2023-05-05T08:03:59Z', sol: '230505' }},
    {Astro: { sunrise: '07:24 AM', sunset: '18:02 PM' }},
    {Humidity: { avg: 71, min: 66, max:  88 }},
    {Visibility: { avg: 10, min: 10, max: 12 }},
    {UV: { avg: 5, min: 3, max: 5 }}
  ]
] 
},

{planet: "Earth",
location: "Mumbai",
image: "earth.png",
 data: [
  [
    {Temperature: { avg: 28.9, min: 27.2, max: 31.8 }},
    {Pressure: { avg: 1008, min: 942, max: 1013 }},
    {WindSpeed: { avg: 24.8, min: 20.1, max: 27.4 }},
    {WindDirection: { avg: 'N', min: 'W', max: 'NW' }},
    {Dates: { utc: '2023-05-03T08:03:59Z', sol: '230503' }},
    {Astro: { sunrise: '06:09 AM', sunset: '19:02 PM' }},
    {Humidity: { avg: 66, min: 65, max:  74 }},
    {Visibility: { avg: 10, min: 3.5, max: 13 }},
    {UV: { avg: 7, min: 1, max: 7 }}
  ],
  [
    {Temperature: { avg: 28.9, min: 27.2, max: 31.8 }},
    {Pressure: { avg: 1008, min: 942, max: 1013 }},
    {WindSpeed: { avg: 24.8, min: 20.1, max: 27.4 }},
    {WindDirection: { avg: 'N', min: 'W', max: 'NW' }},
    {Dates: { utc: '2023-05-04T08:03:59Z', sol: '230504' }},
    {Astro: { sunrise: '06:09 AM', sunset: '19:02 PM' }},
    {Humidity: { avg: 66, min: 65, max:  74 }},
    {Visibility: { avg: 10, min: 3.5, max: 13 }},
    {UV: { avg: 7, min: 1, max: 7 }}
  ],
  [
    {Temperature: { avg: 28.9, min: 27.2, max: 31.8 }},
    {Pressure: { avg: 1008, min: 942, max: 1013 }},
    {WindSpeed: { avg: 24.8, min: 20.1, max: 27.4 }},
    {WindDirection: { avg: 'N', min: 'W', max: 'NW' }},
    {Dates: { utc: '2023-05-05T08:03:59Z', sol: '230505' }},
    {Astro: { sunrise: '06:09 AM', sunset: '19:02 PM' }},
    {Humidity: { avg: 66, min: 65, max:  74 }},
    {Visibility: { avg: 10, min: 3.5, max: 13 }},
    {UV: { avg: 7, min: 1, max: 7 }}
  ]
] 
},

{planet: "Earth",
location: "Melbourne",
image: "earth.png",
 data: [
  [
    {Temperature: { avg: 13.1, min: 10.8, max: 16.4 }},
    {Pressure: { avg: 1021, min: 1002, max: 1070 }},
    {WindSpeed: { avg: 12.8, min: 10.5, max: 12.6}},
    {WindDirection: { avg: 'WNW', min: 'W', max: 'NW' }},
    {Dates: { utc: '2023-05-03T08:03:59Z', sol: '230503' }},
    {Astro: { sunrise: '07:03 AM', sunset: '17:31 PM' }},
    {Humidity: { avg: 67, min: 65, max:  82 }},
    {Visibility: { avg: 10, min: 8.5, max: 13 }},
    {UV: { avg: 1, min: 1, max: 3 }}
  ],
  [
    {Temperature: { avg: 12.8, min: 9.2, max: 17.2 }},
    {Pressure: { avg: 1031, min: 1012, max: 1060 }},
    {WindSpeed: { avg: 20.8, min: 20.5, max: 23.4}},
    {WindDirection: { avg: 'WNW', min: 'W', max: 'NW' }},
    {Dates: { utc: '2023-05-04T08:03:59Z', sol: '230504' }},
    {Astro: { sunrise: '07:04 AM', sunset: '17:29 PM' }},
    {Humidity: { avg: 65, min: 65, max:  82 }},
    {Visibility: { avg: 9, min: 8.5, max: 13 }},
    {UV: { avg: 3, min: 1, max: 3 }}
  ],
  [
    {Temperature: { avg: 10.7, min: 8.8, max: 12.2 }},
    {Pressure: { avg: 1008, min: 942, max: 1013 }},
    {WindSpeed: { avg: 14.8, min: 10.1, max: 17.6 }},
    {WindDirection: { avg: 'N', min: 'W', max: 'NW' }},
    {Dates: { utc: '2023-05-05T08:03:59Z', sol: '230505' }},
    {Astro: { sunrise: '07:05 AM', sunset: '17:28 PM' }},
    {Humidity: { avg: 66, min: 65, max:  74 }},
    {Visibility: { avg: 10, min: 3.5, max: 13 }},
    {UV: { avg: 2, min: 1, max: 3 }}
  ]
] 
},

{planet: "Trappist-1F",
location: "Settlement1",
image: "trappist1e.png",
 data: [
  [
    {Temperature: { avg: 33.9, min: 19.8, max: 39.5 }},
    {Pressure: { avg: 1013, min: 942.1498, max: 1113 }},
    {WindSpeed: { avg: 10.3, min: 8.156, max: 11.2 }},
    {WindDirection: { avg: 'SSW', min: 'S', max: 'SW' }},
    {Dates: { utc: '2023-05-03T08:03:59Z', sol: '230503' }},
    {Astro: { sunrise: '06:13 AM', sunset: '05:26 PM' }},
    {Humidity: { avg: 82, min: 75, max:  85 }},
    {Visibility: { avg: 8, min: 8, max: 12 }},
    {UV: { avg: 6, min: 4, max: 8 }}
  ],
  [
    {Temperature: { avg: 34.5, min: 20.0, max: 40.7 }},
    {Pressure: { avg: 1023, min: 982.8, max: 1043 }},
    {WindSpeed: { avg: 11.3, min: 10.6, max: 12.2 }},
    {WindDirection: { avg: 'SW', min: 'SSW', max: 'WSW' }},
    {Dates: { utc: '2023-05-04T08:03:59Z', sol: '230504' }},
    {Astro: { sunrise: '06:14 AM', sunset: '05:26 PM' }},
    {Humidity: { avg: 79, min: 75, max:  80 }},
    {Visibility: { avg: 10, min: 8, max: 12 }},
    {UV: { avg: 6, min: 4, max: 7 }}
  ],
  [
    {Temperature: { avg: 35.0, min: 21.2, max: 38.9 }},
    {Pressure: { avg: 1003, min: 942.1498, max: 1013 }},
    {WindSpeed: { avg: 30.3, min: 28.156, max: 41.2 }},
    {WindDirection: { avg: 'W', min: 'S', max: 'WNW' }},
    {Dates: { utc: '2023-05-05T08:03:59Z', sol: '230505' }},
    {Astro: { sunrise: '04:14 AM', sunset: '05:25 PM' }},
    {Humidity: { avg: 9, min: 7, max:  20 }},
    {Visibility: { avg: 20, min: 8, max: 12 }},
    {UV: { avg: 4, min: 3, max: 8 }}
  ]
] 
},

{planet: "Gliese 667cc",
location: "MuskVille",
image: "gliese667cc.png",
 data: [
  [
    {Temperature: { avg: 13.5, min: 10.8, max: 19.5 }},
    {Pressure: { avg: 1023, min: 942.1498, max: 1113 }},
    {WindSpeed: { avg: 13.2, min: 8.156, max: 11.2 }},
    {WindDirection: { avg: 'SSW', min: 'S', max: 'SW' }},
    {Dates: { utc: '2023-05-03T08:03:59Z', sol: '230503' }},
    {Astro: { sunrise: '08:13 AM', sunset: '15:26 PM' }},
    {Humidity: { avg: 22, min: 75, max:  85 }},
    {Visibility: { avg: 13, min: 8, max: 12 }},
    {UV: { avg: 2, min: 4, max: 8 }}
  ],
  [
    {Temperature: { avg: 14.5, min: 20.0, max: 40.7 }},
    {Pressure: { avg: 1053, min: 982.8, max: 1043 }},
    {WindSpeed: { avg: 21.3, min: 10.6, max: 12.2 }},
    {WindDirection: { avg: 'SW', min: 'SSW', max: 'WSW' }},
    {Dates: { utc: '2023-05-04T08:03:59Z', sol: '230504' }},
    {Astro: { sunrise: '08:14 AM', sunset: '15:27 PM' }},
    {Humidity: { avg: 39, min: 75, max:  80 }},
    {Visibility: { avg: 20, min: 8, max: 12 }},
    {UV: { avg: 3, min: 3, max: 7 }}
  ],
  [
    {Temperature: { avg: 15.0, min: 21.2, max: 38.9 }},
    {Pressure: { avg: 1053, min: 942.1498, max: 1013 }},
    {WindSpeed: { avg: 30.3, min: 28.156, max: 41.2 }},
    {WindDirection: { avg: 'W', min: 'S', max: 'WNW' }},
    {Dates: { utc: '2023-05-05T08:03:59Z', sol: '230505' }},
    {Astro: { sunrise: '08:14 AM', sunset: '15:25 PM' }},
    {Humidity: { avg: 19, min: 7, max:  20 }},
    {Visibility: { avg: 40, min: 8, max: 12 }},
    {UV: { avg: 4, min: 3, max: 8 }}
  ]
] 
},

{planet: "Kepler 22b",
location: "KeithTown",
image: "kepler22b.png",
 data: [
  [
    {Temperature: { avg: 23.2, min: 17.3, max: 24.9 }},
    {Pressure: { avg: 1122.0, min: 1002.1, max: 1031.3 }},
    {WindSpeed: { avg: 35.35, min: 12.156, max: 19 }},
    {WindDirection: { avg: 'E', min: 'S', max: 'SW' }},
    {Dates: { utc: '2023-05-03T08:03:59Z', sol: '230503' }},
    {Astro: { sunrise: '03:47 AM', sunset: '21:30 PM' }},
    {Humidity: { avg: 67, min: 45, max:  82 }},
    {Visibility: { avg: 5, min: 9, max: 20 }},
    {UV: { avg: 8, min: 5, max: 6 }}
  ],
  [
    {Temperature: { avg: 25.7, min: 18.3, max: 26.8 }},
    {Pressure: { avg: 1231, min: 1012.8, max: 1040 }},
    {WindSpeed: { avg: 33.35, min: 30.3, max: 40.7 }},
    {WindDirection: { avg: 'NE', min: null, max: null }},
    {Dates: { utc: '2023-05-04T08:03:59Z', sol: '230504' }},
    {Astro: { sunrise: '03:45 AM', sunset: '21:30 PM' }},
    {Humidity: { avg: 59.3, min: 53, max:  65.78 }},
    {Visibility: { avg: 4, min: 10, max: 12 }},
    {UV: { avg: 8, min: 6, max: 6 }} 
  ],
  [
    {Temperature: { avg: 24.5, min: 20.0, max: 30.7 }},
    {Pressure: { avg: 1223, min: 982.8, max: 1043 }},
    {WindSpeed: { avg: 34.09, min: 0.134, max: 0 }},
    {WindDirection: { avg: 'ENE', min: 'W', max: 'SW' }},
    {Dates: { utc: '2023-05-05T08:03:59Z', sol: '230505' }},
    {Astro: { sunrise: '03:43 AM', sunset: '18:31 PM' }},
    {Humidity: { avg: 57, min: 50, max:  95.8 }},
    {Visibility: { avg: 19, min: 18, max: 23 }},
    {UV: { avg: 4, min: 2, max: 4 }}
  ]
] 
},
{planet: "Proxima Centauri b",
location: "Marburgh",
image: "proximacentaurib.png",
 data: [
  [
    {Temperature: { avg: 23.2, min: 17.3, max: 24.9 }},
    {WindSpeed: { avg: 35.35, min: 12.156, max: 19 }},
    {WindDirection: { avg: 'E', min: 'S', max: 'SW' }},
    {Dates: { utc: '2023-05-03T08:03:59Z', sol: '230503' }},
    {Astro: { sunrise: '03:47 AM', sunset: '21:30 PM' }}
  ],
  [
    {Temperature: { avg: 25.7, min: 18.3, max: 26.8 }},
    {WindSpeed: { avg: 33.35, min: 30.3, max: 40.7 }},
    {WindDirection: { avg: 'NE', min: null, max: null }},
    {Dates: { utc: '2023-05-04T08:03:59Z', sol: '230504' }},
    {Astro: { sunrise: '03:45 AM', sunset: '21:30 PM' }}
  ],
  [
    {Temperature: { avg: 24.5, min: 20.0, max: 30.7 }},
    {WindSpeed: { avg: 34.09, min: 0.134, max: 0 }},
    {WindDirection: { avg: 'ENE', min: 'W', max: 'SW' }},
    {Dates: { utc: '2023-05-05T08:03:59Z', sol: '230505' }},
    {Astro: { sunrise: '03:43 AM', sunset: '18:31 PM' }}
  ]
] 
},

{planet: "Death Star",
location: "Thats No Moon...",
image: "deathstar.png",
 data: [
  [
    {Temperature: { avg: 21.2, min: 17.3, max: 24.9 }},
    {WindSpeed: { avg: 0, min: 0, max: 0 }},
    {WindDirection: { avg: 'n/a', min: 'n/a', max: 'n/a' }},
    {Dates: { utc: '2023-05-03T08:03:59Z', sol: '230503' }},
    {Astro: { sunrise: '03:47 AM', sunset: '21:30 PM' }},
    {Humidity: { avg: 55, min: 50, max:  95.8 }},
  ],
  [
    {Temperature: { avg: 25.7, min: 18.3, max: 26.8 }},
    {WindSpeed: { avg: 33.35, min: 30.3, max: 40.7 }},
    {WindDirection: { avg: 'NE', min: null, max: null }},
    {Dates: { utc: '2023-05-04T08:03:59Z', sol: '230504' }},
    {Astro: { sunrise: '03:45 AM', sunset: '21:30 PM' }},
    {Humidity: { avg: 56, min: 50, max:  95.8 }},
  ],
  [
    {Temperature: { avg: 24.5, min: 20.0, max: 30.7 }},
    {WindSpeed: { avg: 34.09, min: 0.134, max: 0 }},
    {WindDirection: { avg: 'ENE', min: 'W', max: 'SW' }},
    {Dates: { utc: '2023-05-05T08:03:59Z', sol: '230505' }},
    {Astro: { sunrise: '03:43 AM', sunset: '18:31 PM' }},
    {Humidity: { avg: 52, min: 50, max:  95.8 }},
  ]
  ]
}
]);