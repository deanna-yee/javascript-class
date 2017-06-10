/*
Deanna Yee
deannayee@my.smccd.edu
CIS 114 OL
File Name: qupte.js
Chapter: 11
Assignment #: 7
Date: 5/6/17 
*/
// Script 10.3 - os.js
// This script creates two linked select menus.

// Establish functionality on window load:
window.onload = function() {
    'use strict';

	// Create the Ajax object:
	var ajax = getXMLHttpRequestObject();
	
	// Function to be called when the readyState changes:
	ajax.onreadystatechange = function() {

		// Check the readyState property:
		if (ajax.readyState == 4) {
		
			// Check the status code:
		    if ( (ajax.status >= 200 && ajax.status < 300) 
		    || (ajax.status == 304) ) {

				// Parse the response:
				var data = JSON.parse(ajax.responseText);

				// Update the page:
				var output = document.getElementById('quote');
				var content = '';
				data.forEach(function(entry){
					content += entry.name + ' (' + entry.t + ')' + ': $' + entry.l +
						'\n';
				});
				output.innerText = content;
			
		    } // End of status IF.
				
		} // End of readyState IF.

	}; // End of onreadystatechange function.
	
	// Fetch the initial data:
	ajax.open('GET', 'resources/quote.json', true);
	ajax.send(null);
	
	// Use a timer to fetch the data again:
	var stockTimer = setInterval(function() {
	
	    ajax.open('GET', 'resources/quote.json', true);
		ajax.send(null);
	
	}, 60000);
		
    
}; // End of onload anonymous function.