const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.get('/', (req, res) => {
    //query DB
    const queryText = 'SELECT * FROM jokes';
    pool.query(queryText)
        .then((result) => {
            console.log('query results: ', result);
            res.send(result.rows); //send back the results
        })
        //error handling
        .catch((err) => {
            console.log('error making select query: ', err); 
            res.sendStatus(500);
        });
});

router.post('/', (req, res) => {
    const queryText = 'INSERT INTO jokes (whosejoke, jokequestion, punchline) VALUES ($1, $2, $3)';
    pool.query(queryText, [req.body.whoseJoke, req.body.jokeQuestion, req.body.punchLine])   
        .then((result) => {
            console.log('query result: ', result);
            res.sendStatus(201);
        })
        .catch((err) => {
            console.log('error making select query: ', err);
            res.sendStatus(500);
        });
});

module.exports = router;