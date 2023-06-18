console.log("Hello World");
//My First JS code after a long time
let name = 'Jolly';
console.log(name);
//Variable name Cannot be a reserved keyword
//Should be meaningful
//Cannot start with a number
//Cannot contain a space or hypen
//Are case sensitive

let interestRate = 0.3;
const interestRate1 = 0.5;

let myName = 'Jolly'; //String Literal
let myAge = 31; //Number Literal
let isApproved = true; //Boolean Literal
let firstName = undefined;
let lastName = 'mongia';

//Reference Type Values
//Objects

let person = {
    name: "Jatin",
    age: 31,
    city: "Vadodara"
};

console.log(person);

//Dot Notation
person.city = "Delhi";

console.log(person.city);
let selection = "city"
//Bracket Notation
person[selection] = "vadodara";

console.log(person.city);

//Array 

let selectedColors = ['Red', 'blue'];
selectedColors[3]= "Grey";
selectedColors[2]=false;

console.log(selectedColors);

//Function

/* function greet(name,lastName){
    console.log('Hello'+" "+name+" "+lastName);
}

greet("Jolly",lastName);
greet('Jatin',lastName); */

console.clear();

function square(number){
   return number*number;
}

console.log(square(14));
