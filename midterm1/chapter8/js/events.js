/*
Deanna Yee
deannayee@my.smccd.edu
CIS 114OL
events.js
Chapter 8
Midterm 1
3/3/17
*/
// Script 8.8 - events.js

// Function called when events occur.
// Function reports the event type and target.
function reportEvent(e) {
    'use strict';

    // Get the event object:
    if (typeof e == 'undefined') e = window.event;

    //Chapter 8 Pursue Bullet 5
    //Clear the output textarea
    U.$('output').value = '';

    // Get the event target:
    var target = e.target || e.srcElement;
    
    // Establish the output message:
    var msg = target.nodeName + ': ' + e.type + '\n';
    
    // Add the output to the textarea:
    U.$('output').value += msg;
    
} // End of reportEvent() function.

// This function is called when the form is submitted.
// It adds and removes event handlers
// and returns false to prevent submission.
//Chapter 8 Pursue Bullet 7
function setHandlers(e) {
    'use strict';

    //Chapter 8 Pursue Bullet 7
    //Get the event object
    if (typeof e == 'undefined') e = window.event;

    // List of possible events:
    var events = ['mouseover', 'mouseout', 'click', 'keypress', 'blur'];
    
    // Add or remove event handlers accordingly:
    for (var i = 0, count = events.length; i < count; i++) {
        var checkbox = U.$(events[i]); // Get the element.
        if (checkbox.checked) { // Is it checked?
            U.addEvent(document, events[i], reportEvent);
        } else {
            U.removeEvent(document, events[i], reportEvent);
        }
    } // End of FOR loop.
    
    // Clear the output textarea:
    U.$('output').value = '';

    //Chapter 8 Pursue Bullet 5
    //Notify when the form is submitted and event handlers have been registered
    U.$('output').value = 'The form has been submitted and the event ' + 
                            'handlers have been registered.';
    
    //Chapter 8 Pursue Bullet 7
    // Prevent the form's submission:
    if (e.preventDefault) {
        e.preventDefault();
    } else {
        e.returnValue = false;
    }
    return false;

    
} // End of setHandlers() function.

// Establish functionality on window load:
window.onload = function() {
    'use strict';

   // U.$('theForm').onsubmit = setHandlers;
    //Chapter 8 Pursue Bullet 7
    U.addEvent(U.$('theForm'), 'submit', setHandlers);
    
};