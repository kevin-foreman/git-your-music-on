const { Pool } = require('pg');
const DATABASE_URL = process.env.DATABASE_URL;
const dbConn = require('./dbConn');
const pool = dbConn.getPool();

pool.query(`DROP TABLE IF EXISTS albums; CREATE TABLE albums (
    id serial primary key,
    album_name varchar(60),
    genre varchar(60),
    producer varchar(60),
    record_label varchar(60)
    )`, (err) => {
    if (err) {
        console.log("CREATE TABLE albums failed");
    } else {
        console.log("albums table created!");
    }
}
);

pool.query(`DROP TABLE IF EXISTS artists; CREATE TABLE artists (
    id serial PRIMARY KEY,
    name varchar(60),
    FOREIGN KEY (artist_id)
    REFERENCES albums(id)
)`, (err) => {
    if (err) {
        console.log("CREATE TABLE artists failed!");
    } else {
        console.log("artists table created!")
    }
})

pool.end();