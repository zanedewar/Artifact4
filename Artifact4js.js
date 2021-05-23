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
	validLast = validateName(document.getElementById("LastName").value, 50);
	validEmail = validateEmail(document.getElementById("EMail").value);
	validPhone = validatePhone(document.getElementById("Phone").value);
	validUser = validateCreds(document.getElementById("Username").value, 12);
	validPass = validateCreds(document.getElementById("Password").value, 7);
	validAddress = validateAdd(document.getElementById("Address").value);
	validCity = validateAdd(document.getElementById("City").value);
	validState = validateDrop(document.getElementById("State").value);
	document.getElementById("State").value
	if(!validFirst)
		errorMessages += "<p>The first name is required and cannot be greater than 20 characters</p>";
	if(!validLast)
		errorMessages += "<p>The last name is required and cannot be greater than 50 characters</p>";
	if(!validEmail)
		errorMessages += "<p>Invalid email</p>";
	if(!validPhone)
		errorMessages += "<p>Invalid phone number</p>";
	if(!validUser)
		errorMessages += "<p>Username must be between 1 and 12 characters</p>";
	if(!validPass)
		errorMessages += "<p>Password must be between 1 and 7 characters</p>";
	if(!validAddress)
		errorMessages += "<p>Address is required</p>";
	if(!validCity)
		errorMessages += "<p>City is required</p>";
	if(!validState)
		errorMessages += "<p>Invalid state</p>";
	document.getElementById("errorMessages").innerHTML = errorMessages;
	return errorMessages.length === 0;
	//return (validFirst && validLast && validEmail && validPhone && validUser && validPass && validAddress && validCity && validState && validCountry && validZip)
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
	return !(firstName === "null" || firstName ==="" || firstName.length > maxLength || !checkCharacters(firstName));
}
function validateEmail(email) {
	var atpos = email.indexOf("@");
	var dotpos = email.lastIndexOf(".");
	return !(atpos < 1 || dotpost < atpos + 2 || dotpos + 2 >= email.length);
}
function validatePhone(phone) {
	return !(isNaN(phone) || phone.length > 15 || phone === null || phone === "");
}
function validateCreds(user, maxLength) {
	return (user.length <= maxLength && user.length > 0)
}
function validateAdd(str) {
	return str.length > 0;
}
function validateDrop(choiceVal) {
	return !(choiceVal == "000");
}