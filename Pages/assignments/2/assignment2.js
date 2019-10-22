function oddOrEven(){
	var usernum=prompt("Give me a number, and I'll tell you if it's odd or even.");
	if(usernum%2==0){			//if the remainder divided by 2 is 0
		alert("Your number is even");
	}
	else if(usernum%2==1){		//if the remainder divided by 2 is 1
		alert("Your numer is odd");
	}
	else{
		alert("That's not a number");		
	}
}

function angles(){
	var angle1 = parseInt(prompt("Give me 2 angles, and I'll tell you the last angle.")); //parseInt means to convert the data into numbers
	var angle2 = parseInt(prompt("Give me 2 angles, and I'll tell you the last angle."));
	var angle3 = angle1 + angle2;
	alert(180-angle3);
}

function centuries(){
	let year = parseInt(prompt("Give me a year, and I'll tell you its centuries"));
	var num = year/100;
	let century = Math.ceil(num);
	alert(century + ' century');
}

function integers(){
	for(let i=1;i<=100;i+=1){
		if(i%10 && i%4==0){
			console.log("TenFour!");
		} else if(i%4==0){
			console.log("Four");
		} else if(i%10==0){
			console.log("Ten");
		} else {
			console.log(i);
		}}
}

