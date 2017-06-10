
/*
Deanna Yee
deannayee@my.smccd.edu
CIS 144OL
File Name: tests.js
Chapter #: 12
Assignment #: 5
4/6/17
*/// tests.js
// This script runs some tests against the utilities library from Chapter 8.

// Define the tests:
var myTests = function() {
	'use strict';
	
	// Test that $() returns an element when provided with a valid ID:
	function testGetElement() {
		jsUnity.assertions.assertNotNull(U.$('output'));
	}
	
	// Test that $() returns null when provided with an invalid ID:
	function testGetInvalidElement() {
		jsUnity.assertions.assertNull(U.$('doesNotExist'));
	}

	//Chapter 12 Pursue Bullet 5
	//Test that $() returns undefined when provided with no argument
	function testGetInvalidElementWithNoArgument(){
		jsUnity.assertions.assertUndefined(U.$());
	}

	//Chapter 12 Pursue Bullet 5
	//Test that $() returns null when provided with wrong type of argument
	function testGetInvalidElementWithWrongTypeOfArgument(){
		jsUnity.assertions.assertUndefined(U.$(5));
	}
	
	// Test that setText() returns true when provided with a valid ID:
	function testSetText() {
		jsUnity.assertions.assertTrue(U.setText('output', 'test'));
	}
	
	// Test that setText() returns false when provided with an invalid ID:
	function testCannotSetText() {
		jsUnity.assertions.assertFalse(U.setText('doesNotExist', 'test'));
	}

	//Chapter 12 Pursue Bullet 5
	//Test that setText() returns false when provided with no argument
	function testCannotSetTextWithNoArgument(){
		jsUnity.assertions.assertFalse(U.setText());
	}

	//Chapter 12 Pursue Bullet 5
	//Test that setText returns false when provided with wrong type of argument
	function testCannotSetTextWithWrongTypeOfArgument(){
		jsUnity.assertions.assertFalse(U.setText(5, 'test'));
	}
	
}; // End of myTests anonymous function.

// Define the logging function:
jsUnity.log = function(message) {
	U.$('results').innerHTML += '<p>' + message + '</p>';
};

// Run the tests:
jsUnity.run(myTests);