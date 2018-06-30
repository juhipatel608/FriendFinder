// Pull in required dependencies
var path = require('path');

// Import friend data
var friends = require('../data/friends.js');

// Export API routes
module.exports = function(app) {
    console.log('export worked api!');


	app.get('/api/friends', function(req, res) {
		res.json(friends);
	});
	app.post('/api/friends', function(req, res) {


		var userInput = req.body;
		console.log('userInput = ' + JSON.stringify(userInput));

		var userResponses = userInput.scores;
		console.log('userResponses = ' + userResponses);
		var matchName = '';
		
		var totalDifference = 10000; // Make the initial value big for comparison

		// Examine all existing friends in the list
		for (var i = 0; i < friends.length; i++) {
			// console.log('friend = ' + JSON.stringify(friends[i]));

			// Compute differenes for each question
			var diff = 0;
			for (var j = 0; j < userResponses.length; j++) {
				diff += Math.abs(friends[i].scores[j] - userResponses[j]);
			}
			// console.log('diff = ' + diff);

			// If lowest difference, record the friend match
			if (diff < totalDifference) {
				// console.log('Closest match found = ' + diff);

				totalDifference = diff;
				matchName = friends[i].name;
			}
		}
		friends.push(userInput);
		res.json({status: 'OK', matchName: matchName});
	});
};
