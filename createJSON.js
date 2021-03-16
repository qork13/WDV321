// JavaScript Document
/*
	This file will:
	
	- Create a Javascript object including an array
	- Convert the Javascript object into a JSON object
	- Store the JSON object into local storage
	
	Goal: Provide an example of how to create JSON objects in Javascript
	Goal: Provide an example of how to consume JSON objects in Javascript

	Use the following data for your JSON object

		student_id = 332443
		student_gpa = 3.6
		student_courses = ["WDV101","WDV131","WDV105"]

		student_id = 545467
		student_gpa = 2.7
		student_courses = ["WDV101","WDV131","WDV105","WDV221","WDV205"]	
		
		student_id = 128574
		student_gpa = 3.4
		student_courses = ["WDV101","WDV131","WDV105","WDV221","WDV205","WDV341"]	



*/

item1 = {student_id:332443, student_gpa:3.6, student_courses:["WDV101","WDV131","WDV105"]};

item2 = {student_id:545467, student_gpa:2.7, student_courses:["WDV101","WDV131","WDV105","WDV221","WDV205"]};

item3 = {student_id:128574, student_gpa:3.4, student_courses:["WDV101","WDV131","WDV105","WDV221","WDV205","WDV341"]};

json_item1 = JSON.stringify(item1);
json_item2 = JSON.stringify(item2);
json_item3 = JSON.stringify(item3);

localStorage.setItem("student1", json_item1);
localStorage.setItem("student2", json_item2);
localStorage.setItem("student3", json_item3);



