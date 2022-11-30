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
import RevealOnScroll from './modules/RevealOnScroll';
import $ from 'jquery';

var mobileMenu = new MobileMenu();
var revealFeatures = new RevealOnScroll($(".feature-item"), "85%");
var revealTestimonials = new RevealOnScroll($(".testimonial"), "90%");