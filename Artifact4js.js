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
	
	validFirst = validateName(document.getElementById("FirstName").value, 20);
	if(!validFirst)
		errorMessages += "<p>The first name is required and cannot be greater than 20 characters</p>";
	validLast = validateName(document.getElementById("LastName").value, 50);
	if(!validLast)
		errorMessages += "<p>The last name is required and cannot be greater than 50 characters</p>";
	
	document.getElementById("errorMessages").innerHTML = errorMessages;
	return(validFirst && validLast && validEmail && validPhone && validUser && validPass && validAddress && validCity && validState && validCountry && validZip)
}
function checkCharacters(word) {
	for(var i = 0; i < word.length; i++) {
		var currChar = word.charCodeAt(i);
		if(!(currChar > 64 && currChar < 91) && !(currChar > 96 && currChar < 123))
			return false;
	}
	return true;
	
}
function validateName(firstName, maxLength) {
	if(firstName === "null" || firstName ==="" || firstName.length > maxLength || !checkCharacters(firstName)) {
		return false;
	}
	return true;
}