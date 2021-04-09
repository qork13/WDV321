// JavaScript Document

var assert = require('chai').assert;	//Chai assertion library
var validInput = require('../app/validateRequiredField');
var validPhoneNumber= require('../app/validatePhoneNumber');
var validEmail = require('../app/validateEmailAddress');
var validZip = require('../app/validateZipCode');
var validEntry = require('../app/replaceCharacters');

describe("Testing Input Required", function(){
	
	it("The letter a should pass", function(){
		assert.isTrue(validInput('a'));		
	});
	
	it("The number 4 should pass", function() {
		assert.isTrue(validInput(4));
	});
	
	it("Empty or '' should fail", function() {
		assert.isFalse(validInput(' '));
	});	
	
	it("A single space should fail", function() {
		assert.isFalse(validInput(' '));
	});
	
	it("Two or more spaces should fail", function(){
		assert.isFalse(validInput('  '));
	});
	
	it("The word null should fail", function() {
		assert.isFalse(validInput('null'));
	});
	
	it("The word undefined should fail", function() {
		assert.isFalse(validInput('undefined'));
	});
	
	it("The value 'a 4' should pass", function(){
		assert.isTrue(validInput('a 4'));
	});
	
});	//end "Testing Input Required"

describe("Testing Valid Phone Number", function(){
	
	it("Input is required", function(){
		
		assert.isFalse(validPhoneNumber(''));
	});

	it("Input must be numeric",function(){
		
		assert.isFalse(validPhoneNumber('abc'));
	});
		
	it("Input must be integers", function(){

		assert.isTrue(validPhoneNumber(2225554444));

	});
		
	it("Input must be 10 numbers", function(){

		assert.isFalse(validPhoneNumber(234-234-2333));

	});

});
		
describe("Testing Valid Email", function(){
	
		it("Input is regular email", function(){
			
			assert.isTrue(validEmail('msmith@gmail.com'));
		});
	
		it("Input is missing value before @",function(){
			
			assert.isFalse(validEmail('@gmail.com'));
		});
			
		it("Input is blank", function(){
	
			assert.isFalse(validEmail(' '));
	
		});
			
		it("Input is 1@e.com", function(){
	
			assert.isTrue(validEmail('1@e.com'));
	
		});

		it("Input is missing value after second .", function(){
	
			assert.isFalse(validEmail('1@e'));
	
		});

		it("Input is null .", function(){
	
			assert.isFalse(validEmail('null'));
	
		});

		it("Input is undefined .", function(){
	
			assert.isFalse(validEmail('undefined'));
	
		});

		it("Input is 2 digit domain", function(){
	
			assert.isTrue(validEmail('1@e.us'));
	
		});
	
});

describe("Testing Valid Zip", function(){
	
	it("Input is 5 digit zip", function(){
		
		assert.isTrue(validZip('12345'));
	});

	it("Input is 6 digit code",function(){
		
		assert.isFalse(validZip('123456'));
	});
		
	it("Input is blank", function(){

		assert.isFalse(validZip(' '));

	});
		
	it("Input is 9 digits", function(){

		assert.isTrue(validZip('12345-6789'));

	});

	it("Input is 4 digits .", function(){

		assert.isFalse(validZip('1234'));

	});

	it("Input is null .", function(){

		assert.isFalse(validZip('null'));

	});

	it("Input is undefined .", function(){

		assert.isFalse(validZip('undefined'));

	});

	it("Input is 00000", function(){

		assert.isTrue(validZip('00000'));

	});

	it("Input is 99999", function(){

		assert.isTrue(validZip('99999'));

	});

	it("Input is 3 digits", function(){

		assert.isFalse(validZip('123'));

	});

});

describe("Testing Valid Entry", function(){
	
	it("Input has <", function(){
		
		
		assert.equal(validEntry("11<13<85"), "11-13-85");
	});

	it("Input has -",function(){
		
		assert.equal(validEntry("11-13-85"), "11-13-85");
	});
		
	it("Input is blank", function(){

		assert.equal(validEntry(" "), " ");

	});
		
	it("Input is >", function(){

		assert.equal(validEntry("11>13>1985"), "11-13-1985");

	});

	it("Input is / .", function(){

		assert.equal(validEntry("11/13/1985"), "11-13-1985");

	});

	it("Input is null .", function(){

		assert.equal(validEntry("null"), "null");

	});

	it("Input is undefined .", function(){

		assert.equal(validEntry("undefined"), "undefined");

	});

});