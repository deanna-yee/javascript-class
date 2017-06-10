/*
Deanna Yee
deannayee@my.smccd.edu
CIS 114OL
tasks2.js
Chapter 6
Assignment 3
2/20/17
*/
// tasks.js #2
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
        tasks.push(task.value);
        //Chapter 6 Pursue Bullet 4
        task.value = '';
        
        // Update the page:
        //Chapter 6 Pursue Bullet 6
        message = '<h2>To-Do</h2><ol><li>';
        //Chapter 6 Pursue Bullet 6
        message +=tasks.join('</li><li>');
        //Chapter 6 Pursue Bullet 6
        message += '</li></ol>';
        
        output.innerHTML = message;
        
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