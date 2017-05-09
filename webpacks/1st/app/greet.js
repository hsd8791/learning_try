// Greeter.js
var greeter = require('../json/greetJson.json')
module.exports = function() {
	var greet = document.createElement('div');
	greet.textContent = greeter.greetText;
	console.log('greeter', greeter)
		// greet.textContent = "Hi there and greetings!";
	return greet;
};