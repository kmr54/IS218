function modifyInto(){
	document.getElementById("p1").innerHTML = "Cats are better!";
}

function validateInput(){
var int = document.getElementById("int").value;
bool = "true";

if(int<=10 || int>=15){
alert("Value must be greater than 10, less than 15");
bool="false";
}
else{
alert("The perfect amount of cats!");
bool="true";
}

if(bool="false"){
return false;
}

}
