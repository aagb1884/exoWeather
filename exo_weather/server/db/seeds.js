use exoWeather;

db.dropDatabase();
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
    [ {n: 0},
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
      {nnw: 337.5}]
  }

])