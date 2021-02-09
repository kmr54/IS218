//source for regex code: https://www.simplilearn.com/tutorials/javascript-tutorial/email-validation-in-javascript
function validateInput(){
      var firstname = document.getElementById("firstname");
      var lastname = document.getElementById("lastname");
      var email = document.getElementById("email"); 
      var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      var hasNumber = /\d/;
        
        if (firstname.value == "") { 
            window.alert("Please enter your first name."); 
            return false; 
        } 
		
  
        if (lastname.value == "") { 
            window.alert("Please enter your last name."); 
            return false; 
        } 
        
  	if (email.value == "") { 
            window.alert("Please enter your email."); 
            return false; 
        } 
       
      if(hasNumber.test("firstname")==true || hasNumber.test("lastname")==true){
      	return false;       
       }
       
      if ( !(input.value.match(validRegex)) ) {
	      alert("Invalid email address!"); 
	      return false; 
      }
      else{
	alert("Submitted!");
      	return true;
      }
}
 
