const express = require('express')
const ObjectId = require('mongodb').ObjectId

const createRouter = function(collection) {

    const router = express.Router();

    router.get('/', (req, res) => {
      collection
        .find()
        .toArray()
        .then((docs) => res.json(docs))
        .catch((err) => {
          console.error(err);
          res.status(500);
          res.json({ status: 500, error: err });
        });
      });

    // not in use yet.
    // router.get('/:id', (req, res) => {
    //     res.json(data[req.params.id]);
    //   });

return router;

}

module.exports = createRouter;
