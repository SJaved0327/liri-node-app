var keys = require('./keys.js');
//console.log(keys);

//console.log(keys.twitterKeys.consumer_key);
//console.log(keys.spotifyKeys.client_key);
//console.log(keys.movieKeys.apiKey);

var userInput = process.argv[2];
var arg = process.argv;

var action = {
	tweet: `my-tweets`,
	spotify: `spotify-this-song`,
	movie: `movie-this`,
	do: `do-what-it-says`
};

//======----------- TWITTER -----------======//
/*
		* This will show your last 20 tweets and when they were created at in your terminal/bash window.
*/

var Twitter = require('twitter');

var client = new Twitter({
  consumer_key: keys.twitterKeys.consumer_key,
  consumer_secret: keys.twitterKeys.consumer_secret,
  access_token_key: keys.twitterKeys.access_token_key,
  access_token_secret: keys.twitterKeys.access_token_secret
});

//IF
if (userInput === action.tweet){
	client.get('statuses/user_timeline', function(error, tweets, response) {
  		if(error) throw error;
  			for (var i = 0; i < 20; i++){
  				var num = i + 1;
  				console.log(`* ----- Tweet ${num} ----- *`)
				console.log(`${tweets[i].created_at}\n${tweets[i].text}`);
		  	};
	});
};
//IF

//======----------- SPOTIFY -----------======//

var Spotify = require('node-spotify-api');

//IF
if (userInput === action.spotify){
/*
	var spotify = new Spotify({
	  id: <your spotify client id>,
	  secret: <your spotify client secret>
	});
	 
	spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
	  if (err) {
	    return console.log('Error occurred: ' + err);
	  }
	 
	console.log(data); 
	});
*/
//IF
};

//======----------- MOVIE -----------======//
/*
       * Title of the movie.
       * Year the movie came out.
       * IMDB Rating of the movie.
       * Rotten Tomatoes Rating of the movie.
       * Country where the movie was produced.
       * Language of the movie.
       * Plot of the movie.
       * Actors in the movie.
*/

var request = require("request");

//IF
if (userInput === action.movie){

	var title = process.argv[3];

	// Then run a request to the OMDB API with the movie specified
	request(`http://www.omdbapi.com/?t=${title}&y=&plot=short&apikey=${keys.movieKeys.apiKey}`, function(error, response, body) {

	  // If the request is successful (i.e. if the response status code is 200)
	  if (!error && response.statusCode === 200) {

	  	var data = JSON.parse(body);

	  	console.log(`* ----- Title ----- *\n${data.Title}`);
	  	console.log(`* ----- Year ----- *\n${data.Year}`);
	  	console.log(`* ----- IMDB Rating ----- *\n${data.Ratings[0].Value}`);
	  	console.log(`* ----- Rotton Tomatoes Rating ----- *\n${data.Ratings[1].Value}`);
	  	console.log(`* ----- Country ----- *\n${data.Country}`);
	  	console.log(`* ----- Language ----- *\n${data.Language}`);
	  	console.log(`* ----- Plot ----- *\n${data.Plot}`);
	  	console.log(`* ----- Actors ----- *\n${data.Actors}`);
	  };

	});

};
//IF























