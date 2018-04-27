 // dependencies
var path = require('path');

// HTML routes
module.exports = function(app) {
	console.log('export worked html');

    
	app.get('/', function(req, res) {
		res.sendFile(path.join(__dirname, '../public/home.html'));
	});
	app.get('/survey', function(req, res) {
		res.sendFile(path.join(__dirname, '../public/survey.html'));
	});
};


