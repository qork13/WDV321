/*
	Input		                Expected		Actual
	11<13<85          			11-13-85		11-13-85
	11-13-85 			        11-13-85		11-13-85
				                 				 
	11>13>1985          		11-13-1985		11-13-1985
	11/13/1985             		11-13-1985		11-13-1985
	null		                null			null
	undefined	                undefined		undefined
*/


var replaceChars = function(string){

    var patt = new RegExp("[^/<>]");
    
    var res;
    	
	if(string == "" || string == 'null' || string == 'undefined' || patt.test(string) == false ) {
		return string;
	}
    res = string.replace(/[/<>]/g, "-");
	return res;
}



module.exports = replaceChars;