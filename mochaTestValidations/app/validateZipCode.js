/*
	Input		                Expected		Actual
	12345           			true			true
	123456  			        false			false
				                false			false
	12345-6789          		true			true
	1234              			false			false
	null		                false			false
	undefined	                false			false
	00000	                    true			true
    99999                       true            true
    123                         false           false
*/


var validateZipCode = function(zip){

    var patt = new RegExp("^\\d{5}(-\\d{4})?$")
    
    	
	if(zip == "" || zip == 'null' || zip == 'undefined' || patt.test(zip) == false) {
		return false;
	}
	return true;
}



module.exports = validateZipCode;