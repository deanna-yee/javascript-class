/*
Deanna Yee
deannayee@my.smccd.edu
CIS 114OL
todo.js  
Chapter 12
Assignment 5
4/6/17
*/
// todo.js #3
// This script manages a to-do list.

// This function does all the work.
// It is immediately-invoked.
(function(){
    
	// Variable that stores the tasks:
    var tasks = []; 

	// Function called when the form is submitted.
	// Function adds a task to the global array.
    function addTask() {
        'use strict';
        var task = document.getElementById('task');
        var output = document.getElementById('output');
        var message = '';

        if (task.value) {
            tasks.push(task.value);
            task.value = '';
            message = '<h2>To-Do</h2><ol>';
            for (var i = 0, count = tasks.length; i < count; i++) {
                message += '<li>' + tasks[i] + '</li>';
            }
            message += '</ol>';
            output.innerHTML = message;        
        } // End of task.value IF.

	    // Return false to prevent submission:
        return false;

    } // End of addTask() function.

    //asks for what task number to delete, deletes the task, and updates the list
    function deleteTask() {
        'use strict';
        var output = document.getElementById('output');
        var message = '';

        //prompt the task number to delete
        var deleteTask = prompt('What task number do you want to delete?');

        if(deleteTask != null) {
            //converts the task number to the index of the array it is at
            deleteTask = parseInt(deleteTask) - 1;

            //Chapter 12 Pursue Bullet 1
            //delete the task
            try{
                deleteTaskFromList(deleteTask);
            } catch (ex) {
                alert('Could not delete task because: ' + ex.message);
            }
            

            //make list
            message = '<h2>To-Do</h2><ol>';
            for (var i = 0, count = tasks.length; i < count; i++) {
                message += '<li>' + tasks[i] + '</li>';
            }
            message += '</ol>';

            //display list
            output.innerHTML = message;
        }
    }

    //Chapter 12 Pursue Bullet 1
    //deletes the task
    function deleteTaskFromList(deleteTask){
        'use strict'
        if((deleteTask >= 0) && (deleteTask < tasks.length)){
            tasks.splice(deleteTask, 1);
        } else {
            throw {name: 'Index Out Of Bounds Error',
            message: 'task number is not in range.'
                    };
        }
    }

    // Initial setup:
    function init() {
        'use strict';
        document.getElementById('add').onclick = addTask;
        document.getElementById('delete').onclick = deleteTask;
    } // End of init() function.
    window.onload = init;

})();