var validatePhoneNumber = function(phoneNumber){
    	
	if(phoneNumber == "" || phoneNumber == 'null' || phoneNumber == 'undefined' || typeof phoneNumber == "string" || phoneNumber == /^[a-zA-Z-]/g || phoneNumber.toString().length !== 10){
		return false;
	}
	return true;
}


module.exports = validatePhoneNumber;