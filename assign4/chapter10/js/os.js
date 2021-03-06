// Script 10.3 - os.js
/*
Deanna Yee
deannayee@my.smccd.edu
CIS 114OL
os.js
Chapter 10
Assignment 4
3/19/17
*/
// This script creates two linked select menus.

//Chapter 10 Pursue 6
function addMenuOptions(id, options){
	'use strict'

	var menu = document.getElementById(id);
	if(menu){
		while (menu.firstChild){
			menu.removeChild(menu.firstChild);
		}

		if(options){
			// Add the options to the menu:
			for (var i = 0, count = options.length; i < count; i++) {
				var opt = document.createElement('option');
				opt.text = opt.value = options[i];
			    menu.appendChild(opt);
			}	
		}
	}
}

// Function called when the first menu's value changes.
// Function updates the second menu.
function updateMenu() {
    'use strict';
    
    // Get references to the menus:
	var os = document.getElementById('os');
	var os2 = document.getElementById('os2');

	// For storing the options:
	var options = null;
    
    //Chapter 10 Pursue 6
	// Empty the second menu:
	/*while (os2.firstChild) {
		os2.removeChild(os2.firstChild);
	}*/

    // Determine the options:
    if (os.value == 'Windows') {
		options = ['7 Home Basic', '7 Home Premium', '7 Professional', '7 Ultimate', 'Vista', 'XP'];
 	} else if (os.value == 'Mac OS X') {
		options = ['10.7 Lion', '10.6 Snow Leopard', '10.5 Leopard', '10.4 Tiger'];
    }

    //Chapter 10 Pursue 6
    addMenuOptions('os2', options);

	// Update the menu:
	if (options) {
		os2.disabled = false;

		//Chapter 10 Pursue 6
		// Add the options to the menu:
		/*for (var i = 0, count = options.length; i < count; i++) {
			var opt = document.createElement('option');
			opt.text = opt.value = options[i];
		    os2.appendChild(opt);
		}*/
		
	} else { // No selection!
        os2.disabled = true;
	}

} // End of updateMenu() function.

// Establish functionality on window load:
window.onload = function() {
    'use strict';

    // Get the select menu:
	var os = document.getElementById('os');

	//Chapter 10 Pursue 6
	// Add the new options:
	var options = ['Choose', 'Windows', 'Mac OS X'];
	addMenuOptions('os', options);

	//Chapter 10 Pursue 6
	// Clear out the existing options:
	/*while (os.firstChild) {
		os.removeChild(os.firstChild);
	}
	
	//Chapter 10 Pursue 6
	// Add the new options:
	for (var i = 0, count = options.length; i < count; i++) {
		var opt = document.createElement('option');
		opt.text = opt.value = options[i];
	    os.appendChild(opt);
	}*/
    
    // Add an event handler:
    os.onchange = updateMenu;
    
    // Create the other select menu:
	var os2 = document.createElement('select');
	os2.id = 'os2';
	os2.disabled = true;
	os.parentNode.appendChild(os2); 

};