// CHALLENGE 1
// Who's name is longer?

/* BRONZE
Write two variables. One will store your name and another will store a friend's name. Find out what property
you can use to check how long the names are. Console log how many letters are in each name.
*/

// to create a variable, use var or let
// var is legacy
// let is what you should use!!
let Pasha = "Pasha";
let Jon = "Jon";

console.log(Pasha.length);
console.log(Jon.length);

/* SILVER
Expand on what you have already done and write a conditional to see who has the longer name.
Using string interpolation console log who's name is longer.
String interpolations uses backticks ``
Example Result: My name is longer than Adam's.
*/

if (Pasha.length > Jon.length) {
    console.log(`${ Pasha } is longer than ${ Jon }'s`)
// you can put anything into the ${} slot
} else {
    console.log(`${ Jon } is longer than ${ Pasha }`);
}

if (Pasha.length < Jon.length) {
    console.log(`${ Pasha } is not longer than ${ Jon }'s`)
} else {
    console.log(`${ Jon } is not longer than ${ Pasha }'s`);
}

/* GOLD
In the console log include how many letters difference there are between
the names. 
Example Result: Adam's name is shorter than mine by 4 letters.
There is also one additional case that hsould be handled that has not been
mentioned so far. See if you can add that to your interpolation!
*/

let pashaLength = Pasha.length;
let jonLength = Jon.length;

if (Pasha.length > Jon.length) {
    console.log(`${ Pasha } is longer than ${ Jon } by ${ pashaLength - jonLength } characters`);
} else {
    console.log(`${ Jon } is longer than ${ Pasha } by ${ jonLength - pashaLength } characters`);
}

// we can use if else statements for example if Jon is Jonie instead and Pasha is equal length


if (Pasha.length > Jon.length) {
    console.log(`${ Pasha } is longer than ${ Jon } by ${ pashaLength - jonLength } characters`);
} else if (Pasha.length === Jon.length) {
    console.log(`${ Pasha } is equal in elngth to ${ jon }`);
}
else {
    console.log(`${ Jon } is longer than ${ Pasha } by ${ jonLength - pashaLength } characters`);
}

//CHALLENGE 2
// Types Challenge

/* BRONZE
Create an Object that contains a string, number, boolean, and object.
Console.log the type of one of the values in object.
*/

// {} is an object or within the curly brackets
let myVariable = {
//     key             value       = key/value pair
    firstValue: "I am a string",
    secondValue: 9001,
    thirdValue: false,
    fourthValue: {}
}

console.log(myVariable.secondValue);
console.log(myVariable.fourthValue);

let off = false;
console.log(off);

/* SILVER
Write a conditional that checks the type of one of the values stored in the object 
and console logs the data type. If the value is not a string, number, boolean, or object console log 'What are you?!'
*/

let myVariable = {
    firstValue: "I am a string",
    secondValue: 9001,
    thirdValue: false,
    fourthValue: {}
}

let valueToCheck = myVariable.potato;

// typeof --> tells you the TYPE of something

// if it === string --> console.log('It is a STRING')
if (typeof valueToCheck === "string") {
    console.log("It is a STRING");
} else if (typeof valueToCheck === "number") {
    console.log("It is a NUMBER");
} else if (typeof valueToCheck === "boolean") {
    console.log("It is a BOOL")
} else if (typeof valueToCheck === "object") {
    console.log("It is an OBJECT");
} else {
    console.log("Who ARE you??");
}


