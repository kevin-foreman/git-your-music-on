// set up dependencies
import { config } from 'dotenv';
config();
import cors from 'cors';
import express, { json } from 'express';
const app = express();
// const colors = require('colors/safe');
import { getPool } from './dbConn';
const pool = getPool();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, OPTIONS'); // include OPTIONS method
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    if (req.method === 'OPTIONS') {
        return res.sendStatus(200); // respond OK to OPTIONS requests
    }
    next(); 
});

app.get('/api/artists', (req, res, next) => {
    pool.query("SELECT * FROM artists", (err, res) => {
        if (err) {
            return next(err);
        }
        const rows = result.rows;
        // console.log(rows);
        res.json(rows).send(rows);
    });
});

app.use((error, req, res, next) => {
    console.error(error);
    // res.render('errorPage'); // renders an error page 
    res.status(error.status || 500).send({
        error: {
            status: error.status || 500,
            message: error.message || "Not found, my guy!",
        }
    });
});