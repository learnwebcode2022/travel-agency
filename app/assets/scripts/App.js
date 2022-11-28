var Person = require('./modules/Person');

alert("Testing Gulp!");
var john = new Person("John", "blue");
john.greet();

var jane = new Person("Jane", "green");
jane.greet();