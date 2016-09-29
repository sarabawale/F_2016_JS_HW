console.log('yar! js working.')

// Your code here!
//There are a ton of bugs in my code
//there is always an error when I write the else statement so I 
//created a for loop outside of the if statement, which causes another 
//bug, which returns  all the other answers for each operation 
//I completed the remainder and exponent, but I tried the edge casing 
//but had a little difficulty. I commented them out. 

var number1 = prompt("Choose any number!"); 
alert("Your number is " + number1);
//if (isNaN(number1)) 
    //alert("Must input numbers");
    //prompt("Choose your first number!");

var number2 = prompt("Choose another number!");
alert("Your second number is " + number2);
//if (isNaN(number2)) 
    //alert("Must input numbers");
    //prompt("Choose your second number!");
 
var operation = prompt("Choose an operation, such as: * , /, + , - , or ^ to calculate the exponent")
alert("You want " + number1 + operation + number2 + "!"); 
//if (isNaN(operation.includes())) 
    //alert("Must input strings");
    //prompt("Choose any operation!");

var answer; 

if(operation == "+")
  console.log(answer = number1 + number2);
else if(operation == "-")
  console.log(answer = number1 - number2);
else if(operation == "*")
  console.log(answer = number1 * number2);
else if(operation == "/")
  console.log(answer = number1 / number2);
  var remainder;
  console.log(remainder = "Remainder " + (number1 % number2));

var exponentAnswer = 1;
  for(i =1; i <= number2; i++)
    console.log(exponentAnswer = exponentAnswer * number1);