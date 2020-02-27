//STEP 1
// Write a function called halfNumber() that accepts one argument (a number), divide it by 2, and return the result. It should log a string like "Half of 5 is 2.5.".

function halfNumber(numero) {
    return window.console.log("Half of " + numero + " is " + numero/2);
}

halfNumber(12);

//STEP 2
// Write a function called squareNumber() that accepts one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."

function squareNumber(numero) {
    return window.console.log("The result of squaring the number " + numero + " is " + numero*numero);
}

squareNumber(5);

//STEP 3
// Write a function called percentOf() that accepts two numbers, figure out what percent the first number represents of the second number, and return the result. It should log a string like "2 is 50% of 4."

function percentOf(numUno, numDue) {
    return window.console.log(numUno + " is " + (numUno/numDue)*100 + "% of " + numDue );
}
percentOf(12, 48);
//STEP 4
// Write a function called findModulus() that accepts two numbers. Within the function write a statement that returns the modulus of the first and second parameters. It should log a string like "2 is the modulus of 4 and 10."

function findModulus(numUno, numDue) {
    let answer = (numDue % numUno);
    return window.console.log(answer + " is the modulus of " + numUno + " and " + numDue + ".");
}

findModulus(4, 10);

//STEP 5
// Create a JavaScript function that accepts three numbers as parameters. 
// Collect these numbers using a series of prompts. 
// Once the values are collected, within the function, find the sum of all of the numbers combined. 
// Make sure to use the arguments object and several type conversion functions to accomplish this task.

function jsFunction(numquattro, numcinque, numsei) {
    window.console.log("The calculated result is: " + (Number(arguments[0])+Number(arguments[1])+Number(arguments[2])) + ".");
    }
let numquattro = Number(window.prompt("Enter a number"));
let numcinque = Number(window.prompt("Enter another number"));
let numsei = Number(window.prompt("One more number, per favore"));
jsFunction(numquattro, numcinque, numsei);

