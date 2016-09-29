console.log('yar! js working.')

// Your code here!
//I had trouble with the edge casing for strings so I commented them out. 

var number1 = parseInt(prompt("Choose any number!")); 
alert("Your number is " + number1);
//if (isNaN(number1)) 
    //alert("Must input numbers");
    //prompt("Choose your first number!");

var number2 = parseInt(prompt("Choose another number!"));
alert("Your second number is " + number2);
//if (isNaN(number2)) 
    //alert("Must input numbers");
    //prompt("Choose your second number!");
 
var operation = prompt("Choose an operation, such as: * , /, + , - , or ^ to calculate the exponent")
alert("You want " + number1 + operation + number2 + "!"); 
//couldn't figure out how to put an end casing for a string
//if (isNaN(operation.includes())) 
    //alert("Must input strings");
    //prompt("Choose any operation!");

var answer; 

if(operation == "+"){
  console.log(answer = number1 + number2);
}
else if(operation == "-"){
  console.log(answer = number1 - number2);
}
else if(operation == "*"){
  console.log(answer = number1 * number2);
}
else if(operation == "/"){
  console.log(answer = number1 / number2);
  var remainder;
  console.log(remainder = "Remainder " + (number1 % number2));
}
else {
  exponentAnswer = 1;
  for(i =1; i <= number2; i++){
    console.log(exponentAnswer = exponentAnswer * number1);
    //another way is:
    //Math.pow(number1, number2);
  }
}
