// JavaScript Document

var assert = require('chai').assert;	//Chai assertion library
var validInput = require('../app/validateRequiredField');
var validPhoneNumber= require('../app/validatePhoneNumber');

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