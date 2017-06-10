/*
Deanna Yee
deannayee@my.smccd.edu
CIS 114OL
today.js
Chapter 7
Assignment 3
2/21/17
*/
// today.js #2
// This script indicates the current date and time.

// This function is used to update the text of an HTML element.
// The function takes two arguments: the element's ID and the text message.
function setText(elementId, message) {
    'use strict';
    
    //Chapter 7 Pursue Bullet 2
    if ( (typeof elementId == 'string')
    && ((typeof message == 'string') || (typeof message == 'number')) ) {
        //Chapter 7 Pursue Bullet 1
        if((elementId != '') && (message != '')){
            // Get a reference to the paragraph:
            var output = document.getElementById(elementId);
            //Chapter 7 Pursue Bullet 3
            if(output !== null){
                // Update the innerText or textContent property of the paragraph:
        		if (output.textContent !== undefined) {
        			output.textContent = message;
        		} else {
        			output.innerText = message;
        		}
            } else { //Chapter 7 Pursue Bullet 3
                alert('Element does not exist.')
            }
        } else { //Chapter 7 Pursue Bullet 1
            alert('ElementId or message cannot be an empty string.')
        }
    
    } else { //Chapter 7 Pursue Bullet 2
        alert('elementId must be a string and message must be a string or a number.')
    }

} // End of setText() function.

// Call this function when the page has loaded:
function init() {
    'use strict';
    var today = new Date();
    var message = 'Right now it is ' + today.toLocaleDateString();
    message += ' at ' + today.getHours() + ':' + today.getMinutes();

    // Update the page:
    setText('bee', message);
    
} // End of init() function.
window.onload = init;