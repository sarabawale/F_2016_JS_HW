var MetroCard = function(amount){
	this.date = new Date();
	this.amount = amount;

	this.swipe = function(){
		if(this.amount >= 2.75){
			this.amount -= 2.75;
			return true;
		} else{
			return false;
		}
	}

	this.getBalance = function(){ // this method isn't really necessary
		return "Balance: $" + this.amount;
	}
}

var myCard = new MetroCard(5);
console.log(myCard.getBalance());
myCard.swipe();
console.log(myCard.getBalance());