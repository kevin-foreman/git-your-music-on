require('dotenv').config();
import fetch from 'node-fetch';

const url = 'https://genius-song-lyrics1.p.rapidapi.com/search/?q=weeknd&per_page=1&page=1&text_format=dom';

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': process.env.RAPID_API_KEY,
    'X-RapidAPI-Host': process.env.RAPID_API_HOST
  }
};

fetch(url, options)
	.then(res => res.json())
	.then(json => console.log(json))
	.catch(err => console.error('error:' + err));