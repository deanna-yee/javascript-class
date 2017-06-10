/*
Deanna Yee
deannayee@my.smccd.edu
CIS 114OL
employee.js
Chapter 7
Assignment 3
2/21/17
*/

// employee.js #2
// This script creates an object using form data.

//Chapter 7 Pursue Bullet 7
//Gets the element with the id=id from the document 
function $(id) {
    'use strict';

    if(typeof id != 'undefined'){
        return document.getElementById(id);
    }
}

// Function called when the form is submitted.
// Function creates a new object.
function process() {
    'use strict';

    // Get form references:
    //Chapter 7 Pursue Bullet 7
    var firstName = $('firstName').value;
    //Chapter 7 Pursue Bullet 7
    var lastName = $('lastName').value;
    //Chapter 7 Pursue Bullet 7
    var department = $('department').value;

    // Reference to where the output goes:
    //Chapter 7 Pursue Bullet 7
    var output = $('output');

    // Create a new object:
    var employee = {
        firstName: firstName,
        lastName: lastName,
        department: department,
        getName: function() {
            return this.lastName + ', ' + this.firstName;
        },
        hireDate: new Date()
    }; // Don't forget the semicolon!
    
    // Create the ouptut as HTML:
    var message = '<h2>Employee Added</h2>Name: ' + employee.getName() + '<br>';
    message += 'Department: ' + employee.department + '<br>';
    message += 'Hire Date: ' + employee.hireDate.toDateString();
    
    // Display the employee object:
    output.innerHTML = message;
        
    // Return false:
    return false;
    
} // End of process() function.

// Initial setup:
function init() {
    'use strict';
    //Chapter 7 Pursue Bullet 7
    $('theForm').onsubmit = process;
} // End of init() function.
window.onload = init;