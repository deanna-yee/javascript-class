/*
Deanna Yee
deannayee@my.smccd.edu
CIS 114OL
tasks.js
Chapter 6
Assignment 3
2/20/17
*/
// task.js
// This script manages a to-do list.

// Need a global variable:
var tasks = []; 

// Function called when the form is submitted.
// Function adds a task to the global array.
function addTask() {
    'use strict';

    // Get the task:
    var task = document.getElementById('task');

    // Reference to where the output goes:
    var output = document.getElementById('output');

    
    // For the output:
    var message = '';

    if (task.value) {
    
        // Add the item to the array:
        //Chapter 6 Pursue  Bullet 3
        tasks[tasks.length] = task.value;

        //Chapter 6 Pursue Bullet 4
        task.value = '';

        //Chapter 6 Pursue Bullet 3
        var randomTaskIndex = Math.floor((Math.random() * tasks.length));
        //Chapter 6 Pursue  Bullet 3
        var randomTask = tasks[randomTaskIndex]; 
        
        // Update the page:
        //Chapter 6 Pursue Bullet 3
        message = 'You have ' + tasks.length + ' task(s) in your to-do list. Random Task: ' + randomTask;
		
        if (output.textContent !== undefined) {
			output.textContent = message;
		} else {
			output.innerText = message;
		}
        
    } // End of task.value IF.

    // Return false to prevent submission:
    return false;
    
} // End of addTask() function.

// Initial setup:
function init() {
    'use strict';
    document.getElementById('theForm').onsubmit = addTask;
} // End of init() function.
window.onload = init;