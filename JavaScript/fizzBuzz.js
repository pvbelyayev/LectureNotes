/*
    Challenge:
    Create a variable named FB that takes numbers
    Write an ELSE/IF conditional that: 
    Prints out "Fizz" if the number is divisible by 3
    Prints out "Buzz" if the number is divisible by 5
    Prints out "Fizz Buzz" if the number is divisible by BOTH 3 and 5
    Convert this to SWITCH STATEMENT and then a TERNARY
*/
// 3, 5, 15
let FB = 15;

//We will use if, else if, and else to solve this
if (FB % 3 === 0) {
    console.log("Fizz");
} else if (FB % 5 === 0) {
    console.log("Buzz")
} else if (FB % 3 === 0 && FB % 5 === 0) {
    console.log('Fizz Buzz');
}

//only solves the first console.log (fizz) but not others
//instead do this

let FB = 15;

if (FB % 3 === 0 && FB % 5 === 0) {
    console.log("Fizz Buzz");
} else if (FB % 5 === 0) {
    console.log("Buzz")
} else if (FB % 3 === 0) {
    console.log('Fizz Buzz');
}

FB = 30;

switch (true) {
    case (FB % 3 === 0 && FB % 5 === 0):
        console.log('Fizz Buzz');
        break;
    case FB % 5 === 0:
        console.log('Buzz')
        break;
    case FB % 3 === 0:
        console.log('Fizz');
        break;
}

//Ternary

(FB % 15 === 0)                 //If # not divisible by 15, check 5
    ? console.log('Fizz Buzz')
    : (FB % 5)      //If # not divisible by 5 then see 3
        ? console.log('Buzz')
        : (FB % 3 === 0) //If # not divisible by 3 then return original number
            ? console.log('Fizz')
            : console.log(FB);

            // "?" this asks if equation works and then ":" means no equation did not move on

let age = 21;
let bartenderMessage = (age >= 21) ? "You are authorized to drink" : "You are unauthorized";
