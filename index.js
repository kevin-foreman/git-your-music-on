const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://deezerdevs-deezer.p.rapidapi.com/album/%7Bid%7D",
	"method": "GET",
	"headers": {
		"X-RapidAPI-Key": "bee8030221msh246af6cee12d499p1da561jsn06a1e5d81d0e",
		"X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com"
	}
};

$.ajax(settings).done(function (response) {
	console.log(response);
});