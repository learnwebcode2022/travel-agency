class Person {
    constructor(fullName, favColor) {
      this.name = fullName;
      this.color = favColor; 
    }
    greet() {
        console.log("Hie " + this.name + ", your favorite color is " + this.color);
  }
}

// module.exports = Person; npm way of exporting
export default Person; // ES6 way of exporting

