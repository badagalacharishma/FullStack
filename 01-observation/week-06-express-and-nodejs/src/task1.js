// checking the difference between classical functions and es6 classes
class StudentClass {
    constructor(name) { this.name = name; }
    greet() { console.log("Hi, I am " + this.name); }
}
function StudentFunction(name) {
    this.name = name;
    this.greet = function() { console.log("Hi, I am " + this.name); }
}
const c1 = new StudentClass('Charishma');
const c2 = new StudentFunction('Charishma');
c1.greet(); c2.greet();