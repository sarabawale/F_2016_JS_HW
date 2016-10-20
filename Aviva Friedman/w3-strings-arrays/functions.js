 ///Problem1

//  ### max
// - Write a function called `max` that takes an array of numbers as a parameter. The function should return the largest number that is in the array.
// - Use the code below to test your function.

 var max = function (numbers){
	return solution = Math.max(numbers)
};

  var numbers = [16, 25, 4, 13, 57, 88, 102, 45]

  console.log(max(numbers)) //should print 102


// ......................................................................

var max = 

for (var i = 0, i < numbers.length, i++){

if(i>max){

  console.log numbers[0]

}  

  var numbers = [16, 25, 4, 13, 57, 88, 102, 45]

  console.log(max(numbers)) //should print 102



      //i will be just where we are in the count, starting at 0
      //we want to know what the value of numbers at i is.


// ......................................................................

  ///found this online...///This one works!!!

  function getMaxOfArray(numArray) {
  return Math.max.apply(null, numArray);
}


  var numbers = [16, 25, 4, 13, 57, 88, 102, 45]

  console.log(getMaxOfArray(numbers)) //should print 102


// ......................................................................


// ### Random Return
// - Write a JavaScript function to get a random item from an array.
// - Hint: Remember `Math.random()`?



  var random = function Math.random();


  var numbers = [16, 25, 4, 13, 57, 88, 102, 45]


  console.log(random(numbers)) 


// ......................................................................


// ### Number of Instances
// -Write a function called `numIn` that takes a string and a single character. The function should return the number of times that the character is in the array.


(var i=0, i<testString.length, i++){

}


  var testString = 'Ob-La-Di, Ob-La-Da'

  console.log(numIn(testString, 'a')) //should print out 3
  console.log(numIn(testString, '-')) //should print out 4 


// ......................................................................



// ### Change Case
// - Write a JavaScript function called `changeCase` which accept a string as input and will swap the case of each character. For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'.
// - Hint: There are some string functions that will help you out. str.toLowerCase() will return the lower case version of that string. To do the opposite do str.toUpperCase().
// - Use the code below to test your function.


var toUpperCase = function(toUpperCase)
var changeCase = function chageCase (){

console.log (toUpperCase ());
}


  var testText = 'The Quick Brown Fox'

  console.log(changeCase(testText)); //should print 'tHE qUICK bROWN fOX'




// ......................................................................


// ### No Repeat
// - Write a JavaScript function called `cleanUp` to remove duplicate items from an array (ignore case sensitivity)
// - use the code below to test your function.




  var testArray = ['a', 'b', 'a', 'c', 'c', 'b', 'd', 'd', 'a', 'c', 'd']

  console.log(cleanUp(testArray)); //should print ['a', 'b', 'c', 'd']






