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
	if(firstName === "null" || firstName ==="" || firstName.length > 20 || !checkCharacters(firstName)) {
		errorMessages += "<p>The first name is required and cannot be greater than 20 characters</p>";
		console.log("Hello");
	}
	else {
		validFirst = true;
	}
	document.getElementById("errorMessages") = errorMessages;
	
}
function checkCharacters(word) {
	for(var i = 0; i < word.length; i++) {
		var currChar = word.charCodeAt(i);
		if(!(currChar > 64 && currChar < 91) && !(currChar > 96 && currChar < 123))
			return false;
	}
	return true;
	
}