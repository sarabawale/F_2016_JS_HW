function max(numArray){
	var maxNum = 0;
	for(var i = 0; i<numArray.length; i++){
		if(numArray[i] > numArray[i+1]){
			maxNum = numArray[i];
		} else if(numArray[i] < numArray[i+1]){
			maxNum = numArray[i+1];
		}
	}

	return maxNum;
}

function getRandom(ranArray){
	var pos = Math.floor((Math.random() * ranArray.length - 1) + 1);
	return ranArray[pos];
}


function numIn(String, c){
	var count = 0;
	for(var i = 0; i<String.length; i++){
		if(String.charAt(i) == c){
			count++;
		}
	}

	var reply = "The character " + c + " appears in the string " + String +  " " + count + " times";
	return reply;
}

function changeCase(String){
	var newString = "";
	for(var i = 0; i<String.length; i++){
		if(String.charAt(i) === String.charAt(i).toUpperCase()){
			newString += String.charAt(i).toLowerCase();
		} else if(String.charAt(i) === String.charAt(i).toLowerCase()){
			newString += String.charAt(i).toUpperCase();
		}
	}

	return newString;
}

function cleanUp(dupArray){
	dupArray.sort();

	//Counts number of times an element appears in an array
	function numberRepeats(array, element) {
    	var indices = []
    	var i = -1;
    	while ((i = array.indexOf(element, i+1)) != -1){
        	indices.push(i);
    	}
    	return indices.length;
	}

	for(var i = 0 ; i<dupArray.length; i++){
		if(dupArray.indexOf(dupArray[i]) != -1 ){
			var repeats = numberRepeats(dupArray, dupArray[i]);
			dupArray.splice(i, repeats-1);
		}
	}

	return dupArray;
}