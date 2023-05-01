const express = require('express')
const ObjectId = require('mongodb').ObjectId

const createRouter = function(data) {

    const router = express.Router();
    
    router.get('/', (res, req) => {
        res.json(data);
    })

    // not in use yet.
    // router.get('/:id', (req, res) => {
    //     res.json(data[req.params.id]);
    //   });

return router;

}

module.exports = createRouter;
