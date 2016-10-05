var register = confirm("Are you registered to vote? Click OK if yes or CANCEL if no");

if(register == true){
  var name = prompt("What is your name?");
  var age = prompt("What is your age?");
  if(age >= 18){
    var candidate = prompt("Who are you voting for: Hillary Clinton or Donald Trump?");
    alert(name + ", age " + age + ", is voting for " + candidate + ".");
  }

  else if (age < 18){
    alert("Sorry, you can't vote yet.");
  }
}

else{
  window.location="https://voterreg.dmv.ny.gov/MotorVoter/";
}