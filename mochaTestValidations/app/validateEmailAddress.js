/*
	Input		                Expected		Actual
	msmith@gmail.com			true			true
	@gmail.com			        false			false
				                false			false
	1@e.com          			true			true
	1@e               			false			false
	null		                false			false
	undefined	                false			false
	1@e.us		                true			true

*/


var validateEmailAddress = function(email){

    var patt = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

    	
	if(email == "" || email == 'null' || email == 'undefined' || typeof email !== "string" || patt.test(email) == false) {
		return false;
	}
	return true;
}


module.exports = validateEmailAddress;