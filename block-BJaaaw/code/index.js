// if..else

/*
1. Write a program that asks the user for a number and check the following conditions:

  - `if` the number is even print the message " number is even"
  - `if` the number is odd print the message "number is odd"
*/
let number = prompt("Enter a number");
if(number%2==0){
  alert("number is even");
}

let number = prompt("Enter a number");
if(number%2!==0){
  alert("number is odd");
}

// 2. Write a program to accept two numbers from user using`prompt` and alert the max value.
var first = Number(prompt('Enter first number')); 
var second = Number(prompt('Enter second number')); 

console.log(largest(first, second));

// 3. Convert the above code using`?` terniary operator

/*
4. Write a program that asks the user for the house name and check the following conditions:

  - `if` house name is "stark" then print the message " Winter is coming"
  - `if` house name is "lannister" then print the message " A lannister always pays his debt"
  - `else` print the message " All men must die"
*/
let housename = prompt("Enter your house name");
if(housename == "stark"){
  console.log("Winter is coming");
}
else if(housename == "lannister"){
  console.log("A lannister always pay his debt");
}
else{
  console.log("All men must die");
}

// 5. Convert the above code using`?` terniary operator

// Switch

// 6. Write a program that takes the number of the month(1 - 12) and alert number of days in the month.
let month = prompt("Enter no of month");
switch(month){
  case 1:
    alert("31 days");
  case 2:
    alert("28 days");
  case 3:
    alert("31 days");
  case 4:
    alert("30 days");
    case 5:
      alert("31 days");
    case 6:
      alert("30 days");
    case 7:
      alert("31 days");
    case 8:
      alert("31 days");
      case 9:
        alert("30 days");
      case 10:
        alert("31 days");
      case 11:
        alert("30 days");
      case 12:
        alert("31 days");
}


/* 7.
- Write a program that take the salery of the user using prompt and alert the in -hand amount.You will find out the in -hand amount by deducting the tax amoun from salery.Conditions are given below.
  - `Salary <= 20000` tax is 10 %
  - `Salary <= 40000` tax is 20 %
  - `Salary > 50000` tax is 30 %

*/
let salery = prompt{"enter  ur salary"};
if (salery<= 20000){
  alert("your inhand salery is 1800")
}

//  if..else vs switch

/* 8.
Implement the condition give below using`if..else` and`switch` statement.

  - `marks > 100` alert`"Marks can't be greater than 100"`
  - `marks > 80 && marks < 100` alert`"Grade A"`
  - `marks > 50 && marks < 80` alert`"Grade B"`
  - `marks > 30 && marks < 50` alert`"Grade C"`
  - `marks > 0` alert`"Grade D"`

*/
let marks = prompt("Enter a number");
if(marks>100){
  alert("marks cant be greater than 100");
}
else if(marks>80 && marks<100){
  alert("Grade A");
}
else if(marks>50 && marks<80){
  alert("Grade B");
}
else if(marks>30 && marks<50){
  alert("Grade c");
}
else if(marks>0){
  alert("Grade D");
}
else{
  alert("Wrong input");
}

let marks=100;
let marks=prompt("Enter number");

switch(marks){
  case (marks>100):
    alert("wrong input");
  break;
  case (marks>80 && marks<100):
    alert("Grade A");
  case (marks>50 && marks<80):
    alert("Grade B");
  break;
  case (marks>30 && marks<50):
    alert("Grade C");
  break;
  case (marks>0):
    alert("Grade D");
}

/* 9. Weather app

  - Ask user to provide the condition of the weather outside by asking `What is the weather like outside?`
  - If user says`sunny` alert`Wear a T-shirt`
  - If`rainy` alert`Don't forget to take your raincoat`
  - If`hot` alert`Get a hanky`
  - If`freezing` alert`Get your sweeter on`
  - Anything else should alert`Not a valid input`


*/
let weather = prompt("What is the weather like outside");
if(weather=="sunny"){
  alert("Wear a T-shirt");
}
else if(weather=="rainy"){
  alert("Dont forget to take raincoat");
}
else if(weather=="hot"){
  alert("Get a hanky");
}
else if(weather=="freezing"){
  alert("Get ur sweater");
}
else{
  alert("Not valid input");
}
