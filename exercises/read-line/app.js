// Using the NodeJS package readline-sync, 
//create an interactive program that asks you some personal information 
//(name, age, favorite color, etc.) 
//and reports back to you what you entered. 
//Make sure to include the following string manipulations:

/*
1. Make one of the inputs all uppercase (i.e., given the string “hello” prints “HELLO”)

2. Report back the number of characters in a given input

3. Concatenate (add) two separate strings together

4. Given a long message (more than twenty letters), 
return only the last half of the message

5. Using the same long message (but without making the user type it in again), 
have your program print it to the terminal for the user to read again, 
but specify from where it will print.

Example: If the long message given in #4 was hello my name is John and 
I'm 30 then the user could give any number. 
So if the user entered 14 it would print off s John and I'm 30
*/

var ask = require("readline-sync")
var resp2 = Math.floor(ask.slice / 2)
var response = {
    fullName: ask.question ("What is your full name?"),
    age: ask.question ("what is your age?"),
    dob: ask.question ("what is your date of birth?")

}
 //console.log(response.toUpperCase(ask.question()))
// console.log(response.length)
//console.log(ask.question())
// console.log(response.fullName.toUpperCase() + " " +  response.age +  " " + response.dob)
// console.log(response.fullName.length)
console.log(resp2)

