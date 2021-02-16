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
       
	if(validateEmail(firstname)){
		return false;
	}
	
	if(validateNames(lastname)){
		return false;
	}
	
	if(validateNames(email)==false){
		return false;
	}
	
	window.alert("Submitted!");
      	return true;
}

 function validateNames(name){
  if(\d/.test(SubmitForm.name.value){
     alert("Name must only contain letters!");
     return false;     
   }
    return true;
  }

 function validateEmail(email){
 if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(SubmitForm.email.value)){
    return true;
  }
    alert("You have entered an invalid email address!")
    return false;
}
