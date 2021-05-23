function validateForm() {
	var validFirst = false;
	var validLast = false;
	var validEmail = false;
	var validPhone = false;
	var validUser = false;
	var validPass = false;
	var validAddress = false;
	var validCity = false;
	var validState = false;
	var validCountry = false;
	var validZip = false;
	var errorMessages = "";
	
	var firstName = document.getElementById("FirstName");
	if(firstName === "null" || firstName ==="" || firstName.length > 20) 
		errorMessages += "<p>The first name is required and cannot be greater than 20 characters</p>";
	
	
	document.getElementById("errorMessages") = errorMessages;
}