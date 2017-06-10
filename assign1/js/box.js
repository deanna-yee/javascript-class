/*
Deanna Yee
deannayee@my.smccd.edu
CIS 114 OL
File Name: box.js
Book/ Chapter: Modern JavaScript/Chapter 4
Assignment #: 1
Date: 1/23/17 
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

	if((length > 0) && (width > 0) && (height > 0)){
		//Perform the calculation
		volume = length * width * height;

		//Format the volume:
		volume = volume.toFixed(4);

		//Display the volume:
		document.getElementById('volume').value = volume;
	}else{
		alert("Please enter values greater than 0");
	}

	//Return false to prevent submission:
	return false;
}

//Function called when the window has been loaded
//Function needs to add an event listener to the form
function init(){
	'use strict';
	document.getElementById('theForm').onsubmit = calculateBox;
}

window.onload = init;