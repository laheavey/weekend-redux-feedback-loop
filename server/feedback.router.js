const express = require('express');
const router = express.Router();

const pool = require('./modules/pool');

// GET route; unused, reflexively built
router.get('/', (req,res) => {
    let sqlQuery = 
    `SELECT * FROM "feedback"
        ORDER BY "id" DESC;`;
    pool.query(sqlQuery)
    .then((response) => {
        console.log('Success in GET /feedback! ', response.rows);
        res.send(response.rows)
    })
    .catch((error) => {
        console.log('Error in GET /feedback: ', error);
        res.sendStatus(500);
    })
})
// END GET

// POST route
router.post('/', (req,res) => {
    let sqlQuery = 
    `INSERT INTO "feedback"
        ("feeling", "understanding", "support", "comments")
    VALUES
        ($1, $2, $3, $4);`;

    let sqlValues = [
        req.body.feeling, 
        req.body.understanding,
        req.body.support,
        req.body.comments];

    pool.query(sqlQuery, sqlValues)
    .then((response) => {
        res.sendStatus(201);
    })
    .catch((error) => {
        console.log('Error in POST /feedback: ', error);
        res.sendStatus(500)
    })
})
// END POST

module.exports = router;