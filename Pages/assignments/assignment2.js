function oddOrEven(){
	var usernum=prompt("Give me a number, and I'll tell you if it's odd or even.");
	if(usernum%2==0){
		alert("Your number is even");
	}
	else if(usernum%2!=0){
		alert("Your number is odd");
	}
	else{
		alert("That's not a number");
	}
}