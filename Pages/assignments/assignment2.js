function oddOrEven(){
	var usernum=prompt("Give me a number, and I'll tell you if it's odd or even.");
	if(usernum%2==0){
		alert("Your number is even");
	}
	else if(usernum%2==1){
		alert("Your numer is odd");
	}
	else{
		alert("That's not a number");
	}
}

function angles(){
	//var usernum=prompt("Give me 2 angles, and I'll tell you the last angle.");
	var x = window.prompt("Give me 2 angles, and I'll tell you the last angle.");
	var y = window.prompt("Give me 2 angles, and I'll tell you the last angle.");
	var z = x + y;
	//if(usernum<180){
	alert(180 - z)
	//}
	//else if(usernum!<180){
	//	alert("That is not a number")
	}
//}

