// Script 10.1 - errorMessages.js
/*
Deanna Yee
deannayee@my.smccd.edu
CIS 114OL
errorMessage.js
Chapter 10
Assignment 4
3/19/17
*/
// This script defines functions for adding and removing error messages.

// This function adds the error message.
// It takes two arguments: the form element ID and the message.
function addErrorMessage(id, msg) {
   	'use strict';
    
    // Get the form element reference:
    var elem = document.getElementById(id);
    
    // Define the new span's ID value:
    var newId = id + 'Error';
    
    // Check for the existence of the span:
    var span = document.getElementById(newId);
    if (span) {
        span.firstChild.value = msg; // Update
    } else { // Create new.
    
        // Create the span:
        span = document.createElement('span');
        span.id = newId;
		span.className = ' error'
        span.appendChild(document.createTextNode(msg));
        
        // Add the span to the parent:
        elem.parentNode.appendChild(span);
        //Chapter 10 Pursue 2
        elem.previousSibling.className += ' error';
        //elem.previousSibling.className = 'error';

    } // End of main IF-ELSE.

} // End of addErrorMessage() function.

// This function removes the error message.
// It takes one argument: the form element ID.
function removeErrorMessage(id) {
   	'use strict';

    // Get a reference to the span:
    var span = document.getElementById(id + 'Error');
	if (span) {
        
        //Chapter 10 Pursue 2
	    // Remove the class from the label:
        var oldClassName = span.previousSibling.previousSibling.className;
        var spaceIndex = oldClassName.length - 5;
        span.previousSibling.previousSibling.className = oldClassName.slice(0, spaceIndex);
	    //span.previousSibling.previousSibling.className = null;
    
	    // Remove the span:
	    span.parentNode.removeChild(span);

	} // End of IF.
    
} // End of removeErrorMessage() function.