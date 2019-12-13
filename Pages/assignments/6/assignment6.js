function encryption(){
  let usercode="Boo! It's a secret message!";
  let usercode=usercode.split(/(\W+)/);
  
  for (i = 0; i < usercode.length; i++){
    if usercode[i].length>2{
      usercode.concat("djkvs".scramble);
      
    }
  }
  console.log usercode;
}