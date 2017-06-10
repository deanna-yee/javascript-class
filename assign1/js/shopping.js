/*
Deanna Yee
deannayee@my.smccd.edu
CIS 114 OL
File Name: shopping.js
Book/ Chapter: Modern JavaScript/Chapter 4
Assignment #: 1
Date: 1/21/17 
*/
// Script 4.3 - shopping.js - version 2
// This script calculates an order total.

// Function called when the form is submitted.
// Function performs the calculation and returns false.
function calculate() {
	'use strict';
	var total;

	//gets the values from the inputs
    var quantity = document.getElementById('quantity').value;
    var price = document.getElementById('price').value;
    var tax = document.getElementById('tax').value;
    var shippingCost = document.getElementById('shipping').value; 
    var discount = document.getElementById('discount').value;
	
	//Calculate the total
	total = quantity * price;
	tax /= 100;
	tax++;
	total *= tax;
	total += parseInt(shippingCost);
	total -= discount;
	
	// Format the total:
	total = total.toFixed(2);
	
	document.getElementById('total').value = total;
	return false;    
} // End of calculate() function.

function init() {
	'use strict';
	document.getElementById('theForm').onsubmit = calculate;
} // End of init() function.

window.onload = init;