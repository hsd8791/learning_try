// import _ from 'lodash'
// require('../css/style.css')
var moment = require('moment');
console.log(moment().format());
console.log(moment());


function component() {
	var element = document.createElement('div');

	/* lodash is required for the next line to work */
	element.innerHTML = 'Hello webpack,ahhhh'
		// element.innerHTML = _.join(['Hello', 'webpack'], ' ');

	return element;
}

document.body.appendChild(component());
document.body.appendChild(component());