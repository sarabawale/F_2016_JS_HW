var greeting = alert("What would you like for me to do?");
var operation = prompt("You can add, subtract,multiply, divide, and execute exponents.");
  
var x=prompt("Enter your first value", "0");
if (isNaN(x)){
    alert("input a number, not a text");
} 
var y=prompt("Enter your second value", "0");
if (isNaN(y)){
    alert("input a number, not a text");
}
var number1=parseInt(x, "0");
var number2=parseInt(y, "0");

if (operation=="add"){
  alert(number1+number2);
} else if (operation=="subtract"){
  alert(number1-number2);
} else if (operation=="multiply"){
  alert(number1*number2);
} else if (operation=="divide"){
  alert(number1/number2);
  alert("remainder is" +  number1%number2);
} else if (operation=="exponent"){
    alert(number1**number2);
} else {
    alert("Sorry, I sadly can't perform that operation now. Pick another operation.");
}



