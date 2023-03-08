const fetch = require('node-fetch');

const url = 'https://genius-song-lyrics1.p.rapidapi.com/search/?q=weeknd&per_page=1&page=1&text_format=dom';

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'bee8030221msh246af6cee12d499p1da561jsn06a1e5d81d0e',
    'X-RapidAPI-Host': 'genius-song-lyrics1.p.rapidapi.com'
  }
};

fetch(url, options)
	.then(res => res.json())
	.then(json => console.log(json))
	.catch(err => console.error('error:' + err));