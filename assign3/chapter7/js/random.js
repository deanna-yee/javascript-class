/*
Deanna Yee
deannayee@my.smccd.edu
CIS 114OL
random.js
Chapter 7
Assignment 3
2/21/17
*/
// random.js #2
// This script generates six random numbers.

// This function acts as a shortcut for document.getElementById().
// It takes an id string as its lone argument.
// It returns an element reference (i.e., an object).
function $(id) {
    'use strict';
    if (typeof id != 'undefined') {
        return document.getElementById(id);
    }
} // End of $ function.

function setText(elementId, message) {
    'use strict';
    if ( (typeof elementId == 'string')
    && (typeof message == 'string') ) {
        var output = $(elementId);
		if (output.textContent !== undefined) {
			output.textContent = message;
		} else {
			output.innerText = message;
		}
    } // End of main IF.
} // End of setText() function.

// This function returns a random number.
// The function takes an argument, limiting the maximum random number value.
function getRandomNumber(max) {
    'use strict';
    
    // Generate the random number:
    var n = Math.random();
    
    // If a max value was provided, multiply times it,
    // and parse n to an integer:
    if (typeof max == 'number') {
        n *= max;
        n = Math.floor(n);
    }
    
    // Return the number:
    return n;

} // End of getRandomNumber() function.

// Function called when the window is loaded.
// Function finds six random numbers and displays them in a paragraph element.
function showNumbers() {
    'use strict';

    // Variable to store the lucky numbers:
    var numbers = '';
    var numbers1 = '';
    var numbers2 = '';
    var numbers3 = '';
    var numbers4 = '';

    for (var i = 0; i < 6; i++) {
        numbers += getRandomNumber(100) + ' ';

        //Chapter 7 Pursue Bullet 4
        //no argument value
        numbers1 += getRandomNumber() + ' ';

        //Chapter 7 Pursue Bullet 4
        // argument max = 10
        numbers2 += getRandomNumber(10) + ' ';

        //Chapter 7 Pursue Bullet 4
        // argument max = 10
        numbers3 += getRandomNumber(50.50) + ' ';

        //Chapter 7 Pursue Bullet 4
        // argument max = 10
        numbers4 += getRandomNumber(5) + ' ';
    }

    // Show the numbers:
    setText('output', numbers);
    setText('output1', numbers1);
    setText('output2', numbers2);
    setText('output3', numbers3);
    setText('output4', numbers4);

} // End of showNumbers() function.
window.onload = showNumbers;