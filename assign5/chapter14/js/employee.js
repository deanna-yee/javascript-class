/*
Deanna Yee
deannayee@my.smccd.edu
CIS 144OL
File Name: employee.js
Chapter #: 14
Assignment #: 5
4/7/17
*/
// employee.js #2
// This script creates an object using form data.

//Chapter 14 Pursue Bullet 1
//Constructor for Employee
function Employee(firstName, lastName, department) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.department = department;
    this.hireDate = new Date();
    this.getName = function() {
        return this.firstName + ' ' + this.lastName; 
    };
}

//Chapter 14 Pursue Bullet 7
//Returns the name of the month
Date.prototype.getMonthName = function(){
    switch(this.getMonth()){
        case 0:
            return 'January';
        case 1:
            return 'February';
        case 2:
            return 'March';
        case 3:
            return 'April';
        case 4:
            return 'May';
        case 5:
            return 'June';
        case 6:
            return 'July';
        case 7:
            return 'August';
        case 8:
            return 'September';
        case 9:
            return 'October';
        case 10:
            return 'November';
        case 11:
            return 'December';
        default:
            break;
    }
}

// Function called when the form is submitted.
// Function creates a new object.
function process() {
    'use strict';

    // Get form references:
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var department = document.getElementById('department').value;

    // Reference to where the output goes:
    var output = document.getElementById('output');

    // Create a new object:
    //Chapter 14 Pursue Bullet 1
    var employee = new Employee(firstName, lastName, department);
    
    //Chapter 14 Pursue Bullet 1
    /*var employee = {
        firstName: firstName,
        lastName: lastName,
        department: department,
        getName: function() {
            return this.lastName + ', ' + this.firstName;
        },
        hireDate: new Date()
    };*/ // Don't forget the semicolon!
    
    // Create the ouptut as HTML:
    var message = '<h2>Employee Added</h2>Name: ' + employee.getName() + '<br>';
    message += 'Department: ' + employee.department + '<br>';
    
    //Chapter 14 Pursue Bullet 7
    message += 'Hire Date: ' + employee.hireDate.getMonthName() + ' ' + 
                employee.hireDate.getDate() + ', ' + employee.hireDate.getFullYear();
    
    // Display the employee object:
    output.innerHTML = message;
        
    // Return false:
    return false;
    
} // End of process() function.

// Initial setup:
function init() {
    'use strict';
    document.getElementById('theForm').onsubmit = process;
} // End of init() function.
window.onload = init;