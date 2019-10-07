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
	var angle1 = window.prompt("Give me 2 angles, and I'll tell you the last angle.");
	var angle2 = window.prompt("Give me 2 angles, and I'll tell you the last angle.");
	var angle3 = angle1+angle2;
	alert("Your angle is" + 180-angle3);
}

