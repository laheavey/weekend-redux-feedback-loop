const express = require('express');
const router = express.Router();

const pool = require('./modules/pool');

router.get('/', (req,res) => {
    let queryText = 
    `SELECT * FROM "feedback"
    ORDER BY "date";`;
    pool.query(queryText)
    .then((response) => {
        console.log('Success in GET /feedback! ', response.rows);
        res.send(response.rows)
    })
    .catch((error) => {
        console.log('Error in GET /feedback: ', error);
        res.sendStatus(500);
    })
})

module.exports = router;