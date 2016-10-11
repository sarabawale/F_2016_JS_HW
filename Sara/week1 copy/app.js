console.log('yar! js working.')

// Your code here!
console.log('yar! js working.')

// Your code here!
var operator = prompt("Would you like to add (+), subtract (-), multiply (*), divide (/), or use exponents (x)? Please type in the operator.");

if(operator == "+" || operator == "-" || operator == "*" || operator == "/" || operator == "x"){
  var num1 = parseInt(prompt("Please enter a number."));
  var num2 = parseInt(prompt("Please enter a second number."));

  if(isNaN(num1) || isNaN(num2)){
    alert("Please enter a number, not a String.");
  }
  
  else{
    if(operator == "+"){
      var result = num1 + num2;
    } else if(operator == "-"){
      var result = num1 - num2;
    } else if(operator == "*"){
      var result = num1 * num2;        
    } else if(operator == "/"){
      var dividend = Math.floor(num1/num2);
      var remainder = num1 % num2;
      var result = dividend + " with remainder " + remainder;
    } else{
      result = Math.pow(num1, num2);
    }
  
    alert("Your result is " + result);
   }
}

else{
   alert("Please enter one of the operators specified.");
}