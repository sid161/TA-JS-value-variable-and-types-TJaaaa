// Condition
// Write your code below each problems:

/*
Write a program that asks the user his/her age and check for the following conditions :

- `if` the age is between 12-55 then print the message "You can participate in the marathon".
- `if` the age is between 4-11 then print the message " You are too young to participate in the marathon".
- `if` the age is less than 4 then print the message " Hey Kiddo! Can You Walk ?"
- `if` the age is greater than 55 then print the message " You are too old to participate in the marthon".
👇
*/
let age = Number(prompt("Enter your age"));
if (age>=12 && age<=55){
  alert("you can participate in marathon");
} else if(age>=4 && age<=11){
  alert("you are too young");
} else if(age>4){
  alert("Hey kiddo can you walk");
} else if(age<55){
  alert("you are too old");
} else{
  alert("invalid");
}

// Loops
/*
Given a positive integer `n`. Print the word (hello) in format of heeeello (letter 'e' must be repeated `n` times). Take input from prompt and print the result in alert.

Example:
n = 1 => output: hello
n = 7 => output: heeeeeeello
👇
*/
let count = prompt("enter value of e");
const start = "h";
const end = "llo";

let middle = "";
for(let i=0; i<count; i++){
  middle += "e";
}
alert(start + middle +end);

// [Your code goes here]

/*
Program to calculate the sum of first n natural numbers(1,2,3...n are known as natural numbers). Prompt user to enter n (using `prompt`) then based on input provided calculate and show result in `alert`.
👇
*/


// looping from i = 1 to number
// in each iteration, i is increased by 1
const number = parseInt(prompt('Enter a positive integer: '));

let sum = 0;
for (let i = 1; i <= number; i++) {
    sum += i;
}

console.log('The sum of natural numbers:', sum);
// [Your code goes here]

/* Switch Statement

 🎖Using switch statement do the following

Take a number value from user and alert the message if it matches the conditions.
* [ ] ONE, if `number` is equal to 1.
* [ ] TWO, if `number` is equal to 2.
* [ ] THREE, if `number` is equal to 3.
* [ ] FOUR, if `number` is equal to 4.
* [ ] FIVE, if `number` is equal to 5.
* [ ] SIX, if `number` is equal to 6.
* [ ] SEVEN, if `number` is equal to 7.
* [ ] EIGHT, if `number` is equal to 8.
* [ ] NINE, if `number` is equal to 9.
* [ ] PLEASE TRY AGAIN, if  is none of the above.

*/
// [Your code goes here]
let number =+prompt("enter no between 1-10");
switch(number){
  case 1:
    alert("ONE");
  case 2:
    alert("TWO");
    case 3:
      alert("THREE");
    case 4:
      alert("Four");
      case 5:
    alert("FIVE");
  case 6:
    alert("SIX");
    case 7:
      alert("SEVEN");
    case 8:
      alert("EIGHT");
      case 9:
        alert("NINE");
      case 10:
        alert("TEN");


}

/*
🎖Using switch statement do the following

Take the value of `marks` (0-100) from user using `prompt` and `alert` the message (Your Grade is AA) as giver below.
* [ ] `AA` if `marks` is greater than 90.
* [ ] `AB` if `marks` is greater than 80 and less than or equal to 90
* [ ] `BB` if `marks` is greater than 70 and less than or equal to 80
* [ ] `BC` if `marks` is greater than 60 and less than or equal to 70
* [ ] `CC` if `marks` is greater than 50 and less than or equal to 60
* [ ] `CD` if `marks` is greater than 40 and less than or equal to 50
* [ ] `DD` if `marks` is greater than 30 and less than or equal to 40
* [ ] `FF` if `marks` is less than or equal to 30
*/

// [Your code goes here]
let marks = prompt("Enter marks(0-100)");
switch(true){
  case marks > 90:
    alert(`AA`);
    break;
  case marks > 80 && marks <= 90:
    alert(`AB`);
    break;
  case marks > 70 && marks <= 80:
    alert(`BB`);
    break;
  case marks > 60 && marks <= 70:
    alert(`BC`);
    break;
  case marks > 50 && marks <= 60:
    alert(`cc`);
    break;
    case marks > 40 && marks <= 50:
      alert(`CD`);
      break;
      case marks > 30 && marks <= 40:
        alert(`DD`);
        break;
        case marks <= 30:
          alert(`FF`);
          break;
}


/*
 🎖Write a JavaScript program that takes two `integers` from user (using prompt) and alerts the larger number.
*/
// [your code goes here]
let int1 = prompt("Enter integer 1");
let int2 = prompt("Enter integer 2");

if(int1>int2){
  alert(`${int1} is greater`);
} else{
  alert(`${int2} is greater`);
}

/*
🎖Write a JavaScript conditional statement to find the sign (+, -) of product of three numbers. Take those three numbers from user using `prompt`. Display an alert box with the specified sign.
*/
// [Your code goes here]
const numOne = +prompt("Enter first number");
const numTwo = +prompt("Enter second number");
const numThree = +prompt("Enter third number");

let product = numOne * numTwo * numThree;

if(product > 0){
  alert("Final value is positive");
} else{
  alert("final value is negative");
}

/* Calculator
 🎖Make a simple calculator with these functions. Using prompt, type conversion, if else statement. Use prompt to take the input from user i.e two numbers and an operation (Add, Sub, Mul, Div).

  ⛑ Rule
    * [ ] While substracting and dividing keep in mind the number one should be greater then number two. If not show alert saying `Number Two is larger then Number one`.
  ⚡️ Operations
    * [ ] Add
    * [ ] Sub
    * [ ] Mul
    * [ ] Div
*/

// [Your code goes here]
let firstNum = +prompt("Enter first value for operation");
let secondNum = +prompt("Enter second value for operation");
let thirdNum = +prompt("Enter operation out (add,subtract,multiply,divide)");

switch(operation){
  case "add":
    alert(`the sum of ${firstNum} and ${secondNum} is ${firstNum + secondNum}`);
    break;
    case "subtract":
      alert(`the difference of ${firstNum} and ${secondNum} is ${firstNum - secondNum}`);
      break;
      case "multiply":
        alert(`the product of ${firstNum} and ${secondNum} is ${firstNum * secondNum}`);
        break;
        case "divide":
          alert(`the divide of ${firstNum} and ${secondNum} is ${firstNum / secondNum}`);
          break;
}

