//var Person = require('./modules/Person'); // npm way of importing
//import Person from './modules/Person'; // ES6 way of importing
/*
class Adult extends Person {
    payTaxes() {
        console.log(this.name + " now owes $20 in taxes.");
    }
}

var john = new Person("John", "blue");
john.greet();

var jane = new Adult("Jane", "orange");
jane.greet();
jane.payTaxes(); */

import MobileMenu from './modules/MobileMenu';

var mobileMenu = new MobileMenu();