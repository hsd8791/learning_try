//main.js 

// require("!style-loader!css-loader!../css/style.css");
require("../css/style.css");
require("../css/main.css");
var click = require('./click.js')
var greeter = require('./greet.js');
var el = greeter()
el.onclick = click
document.getElementById('root').appendChild(el);