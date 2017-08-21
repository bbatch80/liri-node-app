var twitterKeys = require('./keys.js');

var twitter = require('twitter');

var T = new twitter({
  consumer_key: 'Y9p3VAwXUPt9scPjpFTxwyAt7',
  consumer_secret: 'I2difObd0IDcuOQiEXlEaPUgfyC3RL89Iw0Cp8CdGNHDJ4YIUI',
  access_token_key: '898673041458294784-fl8YKnSbP9IjKRp4SGEdDAjAKQOGNiu',
  access_token_secret: 'rebkqPb7sbsTXKGa79NZKuPTXqidw33NDpZtatY8UwQJI',	
});

var spotify = require('spotify');

var spotifyApi = new spotify({
  clientId : '4a40ca3bf86f46c1b5e02f69c72542fe',
  clientSecret : '4983e981d5c3468d8cd28d567647e4f9',
});

var inquirer = require("inquirer");

var request = require("request");

var fs = require("fs");

var queryUrl = "http://www.omdbapi.com/?t=Mr.Nobody&y=&plot=short&apikey=40e9cece";


inquirer.prompt([
	{
    type: "input",
    name: "movie",
    message: "Enter the movie you would like to view."
  },

  {
    type: "input",
    name: "twitterName",
    message: "Enter your twitter username."
  },

  ]).then(function(user) {

  	if (user.movie !== "") {

queryUrl = "http://www.omdbapi.com/?t=" + user.movie + "&y=&plot=short&apikey=40e9cece";

console.log(queryUrl);

request(queryUrl, function(error, response, body) {

  if (!error && response.statusCode === 200) {
  	console.log(body);

  	console.log("Title: " + JSON.parse(body).Title);
    console.log("Release Year: " + JSON.parse(body).Year); 
    console.log("Ratings: imdb Rating: " + JSON.parse(body).imdbRating + " Metascore: " + JSON.parse(body).Metascore);
    console.log("Produced in: " + JSON.parse(body).Country);
    console.log("Language: " + JSON.parse(body).Language);
    console.log("Plot: " + JSON.parse(body).Plot);
    console.log("Actors: " + JSON.parse(body).Actors);
}
}); 
} else {
	queryUrl = "http://www.omdbapi.com/?t=Mr.Nobody&y=&plot=short&apikey=40e9cece";

console.log(queryUrl);

request(queryUrl, function(error, response, body) {

  if (!error && response.statusCode === 200) {
  	console.log(body);

  	console.log("Title: " + JSON.parse(body).Title);
    console.log("Release Year: " + JSON.parse(body).Year); 
    console.log("Ratings: imdb Rating: " + JSON.parse(body).imdbRating + " Metascore: " + JSON.parse(body).Metascore);
    console.log("Produced in: " + JSON.parse(body).Country);
    console.log("Language: " + JSON.parse(body).Language);
    console.log("Plot: " + JSON.parse(body).Plot);
    console.log("Actors: " + JSON.parse(body).Actors);
	
}

});
}
console.log(user.twitterName);

var params = {
q: user.twitterName,
count: 20
}

	var twitterQueryUrl = "https://api.twitter.com/1.1/users/show.json?screen_name=" + user.twitterName;

	console.log(twitterQueryUrl);



T.get('search/tweets',params, searchedData);

 function searchedData(error, data, response) {

  if (!error && response.statusCode === 200) {

  console.log(JSON.stringify(response.body, null, 2));

  //Would then extract tweets and dates from JSON object
}

}

fs.readFile("random.txt", "utf8", function(err, data) {
  if (err) {
    return console.log(err);
  }

  var output = data.split(",");

  var readArray = [];

  for (var i = 0; i < output.length; i++) {

    
    readArray.push(output[i]);
    
  }
  console.log(readArray);
});

//** Keep getting error that spotifyAPI is not a constructor

// // spotifyApi.searchTracks('I want it that way', function(err, data) {
// //   if (err) {
// //     console.error('Something went wrong', err.message);
// //     return;
// //   }

//   // Print some information about the results
//   console.log('I got ' + data.body.tracks.total + ' results');
// });


});





  	


 
// spotify.search({spotifyQueryUrl, type: 'track', query: 'dancing in the moonlight' }, function(err, data) {
//     if ( err ) {
//         console.log('Error occurred: ' + err);
//         return;
//     }
//  console.log(data);
//     // Do something with 'data' 
// });




  
 









