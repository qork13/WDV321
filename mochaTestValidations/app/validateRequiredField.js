// JavaScript Document
var validatePhoneNumber = require('../app/validatePhoneNumber');
/*
	1.The letter a should pass
	2.The number 4 should pass
	3.Empty or '' should fail
	4.A single space should fail
	5.Two or more spaces should fail
	6.The word null should fail
	7.The word undefined should fail
	8.The value 'a 4' should pass

*/
var validInput = function(inValue){
	inValue += "";	//turns all inValues into strings
	if(inValue.trim() == "" || inValue == 'null' || inValue == 'undefined'){
		return false;
	}
	return true;
}

module.exports = validInput;
