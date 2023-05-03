// const transformData = require('./helpers/transform_data.js');
const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());
app.use(express.json());

const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router.js');
const transformData = require('./helpers/transform_data.js');

MongoClient.connect('mongodb://127.0.0.1:27017', { useUnifiedTopology: true })
  .then((client) => {
    const db = client.db('exoWeather');
    const marsCollection = db.collection('mars');
    const earthCollection = db.collection('earth');
    const transformed = db.collection('transformed');
    const combined = db.collection('combined');
    transformData(marsCollection, earthCollection, combined, transformed)
    const planetRouter = createRouter(combined);
    app.use('/api/planets', planetRouter);
  })
  .catch(console.err);


app.listen(9000, function () {
  console.log(`Listening on port ${ this.address().port }`);
});
