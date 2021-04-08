// JavaScript Document
var validatePhoneNumber = require('../app/validatePhoneNumber');
/*
	Input		Expected		Actual
	a			true			true
	4			true			true
				false			false
	 			false			false
	  			false			false
	null		false			false
	undefined	false			false
	a 4			true			true

*/
var validInput = function(inValue){
	inValue += "";	//turns all inValues into strings
	if(inValue.trim() == "" || inValue == 'null' || inValue == 'undefined'){
		return false;
	}
	return true;
}

module.exports = validInput;
