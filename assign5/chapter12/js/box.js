/*
Deanna Yee
deannayee@my.smccd.edu
CIS 114 OL
File Name: box.js
Chapter: Chapter 12
Assignment #: 5
Date: 4/6/17 
*/

//This script calculates the volume of a box

//Function called when the form is submitted
//Function performs the calculation and returns false;
function calculateBox(){
	'use strict';

	//For storing the volume:
	var volume;

	//Get a reference to the form values
	var length = document.getElementById('length').value;
	var width = document.getElementById('width').value;
	var height = document.getElementById('height').value;

	try{
		//Chapter 12 Pursue Bullet 4
		//checks to see if length, width, and height is a number and greater than 0
		assert((!(isNaN(length)) && (length > 0)), 
				'The length must be a number and greater than 0.');
		assert((!(isNaN(width)) && (width > 0)), 
				'The width must be a number and greater than 0.');
		assert((!(isNaN(height)) && (height > 0)), 
				'The height must be a number and greater than 0.');

		//Perform the calculation
		volume = length * width * height;

		//Format the volume:
		volume = volume.toFixed(4);

		//Display the volume:
		document.getElementById('volume').value = volume;
	}catch(ex){
		alert(ex.message);
	}

	//Return false to prevent submission:
	return false;
}

//Chapter 12 Pursue Bullet 4
//asserts whether an expression is true and gives a message for it
function assert(expression, message) {
	if(!(expression)){
		throw { name: 'Assertion Exception',
				message: message
		};
	}
}

//Function called when the window has been loaded
//Function needs to add an event listener to the form
function init(){
	'use strict';
	document.getElementById('theForm').onsubmit = calculateBox;
}

window.onload = init;