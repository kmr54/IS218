function validateInput(){
	    var firstname = document.forms["SubmitForm"]["firstname"]; 
		var lastname = document.forms["SubmitForm"]["lastname"];
        var email = document.forms["SubmitForm"]["email"]; 
        
        if (firstname.value == "") { 
            window.alert("Please enter your first name."); 
            firstname.focus(); 
            return false; 
        } 
  
        if (lastname.value == "") { 
            window.alert("Please enter your last name."); 
            lastname.focus(); 
            return false; 
        } 
  
        if (email.value == "") { 
            window.alert("Please enter a valid e-mail address."); 
            email.focus(); 
            return false; 
        } 
		return true;
}

function resetForm(){  
   document.getElementById("SubmitForm").reset();  
 } 
 function submitForm(){  
	document.getElementById("SubmitForm").submit();
 }
