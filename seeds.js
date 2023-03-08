import { Pool } from 'pg';
import { getPool } from './dbConn';
const pool = getPool();

// Seed the album table
pool.query(`INSERT INTO albums (album_name, genre, producer, record_label) VALUES
('Swaggy', 'EDM', 'Hit-Boy', 'Strange Music'),
('Swaggy', 'EDM', 'Hit-Boy', 'Strange Music'),
('Swaggy', 'EDM', 'Hit-Boy', 'Strange Music'),
('Swaggy', 'EDM', 'Hit-Boy', 'Strange Music'),
('Swaggy', 'EDM', 'Hit-Boy', 'Strange Music')`,
(err, data) => {
  if (err) {
    console.log("Album insert failed!");
  } else {
    console.log(data);
  }
});

// Seed the artist table next

pool.query(`INSERT INTO artists (name, album_id) VALUES
('The Weeknd', 1)
('The Weeknd', 1)
('The Weeknd', 1)
('The Weeknd', 1)`,
(err, data) => {
  if (err) {
  console.log("Artists insert failed!");
} else {
  console.log(data);
}
}
);

// Close connection
pool.end();