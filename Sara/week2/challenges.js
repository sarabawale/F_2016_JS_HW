var min = function(num1, num1){
	if(num1 < num2 || num1 == num2){
		return num1;
	} else if(num2 < num1){
		return num2;
	}
}


var fizzbuzz = function(myNum){
	if(myNum%3 == 0){
		console.log("fizz");
	} else if(myNum%5 == 0){
		console.log("buzz");
	} else if (myNum%3 == 0 && myNum%5 == 0){
		console.log("fizzbuzz");
	}
}

var telephone = function(){
	return "867-5039";
}

var blondie = function(function){
	alert("Call me on the line at " + function);
}

console.log(min(3, 7));
console.log(fizzbuzz(9));
console.log(blondie(telephone()));