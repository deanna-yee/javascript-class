/*
Deanna Yee
deannayee@my.smccd.edu
CIS 114 OL
File Name: calculator.js
Book/ Chapter: Modern JavaScript/Chapter 4
Assignment #: 1
Date: 1/24/17 
*/

//This script calculates the future value of your investment

// Function called when the form is submitted.
// Function performs the calculation and returns false.
function calculateFutureValue() {
	'use strict';
	var futureValue;

	var currencyFormatter = new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD',
		minimumFractionDigits: 2,
	});

	//gets the values from the inputs
    var principal = document.getElementById('principal').value;
    var interestRate = document.getElementById('rate').value;
    var years = document.getElementById('years').value;
	
	//Calculate the future value
	years = parseInt(years);
	interestRate /= 100;
	interestRate++;
	futureValue = principal * Math.pow(interestRate, years);
	
	// Format the future value:
	futureValue = currencyFormatter.format(futureValue);
	
	document.getElementById('future').value = futureValue;
	return false;    
}

function init() {
	'use strict';
	document.getElementById('theForm').onsubmit = calculateFutureValue;
}

window.onload = init;