/*
Deanna Yee
deannayee@my.smccd.edu
CIS 114OL
file name: membership.js
assignment #: 2
2/3/17
*/
// membership.js
// This script calculates the cost of a membership.

// Function called when the form is submitted.
// Function performs the calculation and returns false.
function calculate() {
    
    // Be strict:
    'use strict';

    // Variable to store the total cost:
    var cost;

    // Get a reference to the form elements:
    var type = document.getElementById('type');
    var years = document.getElementById('years');
    var costOutput = document.getElementById('cost');
    
    // Convert the year to a number:
    if (years && years.value) {
        years = parseInt(years.value, 10);
    }
    
    // Check for valid data: 
   if (type && type.value && years && (years > 0) ) {
        
        // Determine the base cost:
        switch (type.value) {
            case 'basic':
                cost = 10.00;
                break;
            case 'premium':
                cost = 15.00;
                break;
            case 'gold':
                cost = 20.00;
                break;
            case 'platinum':
                cost = 25.00;
                break;
        } // End of switch.
        
        // Factor in the number of years:
        cost *= years;
        
        // Discount multiple years:
        if (years > 1) {
            if(years < 4){
                cost *= .90; // 90%
            }
            else if(years < 5){
                cost *= .85; // 85%
            }
            else{
                cost *= .80; // 80%
            }
        }
        
        // Show the total amount:
        if(costOutput.textContent !== undefined){
            costOutput.textContent = '$' + cost.toFixed(2);
        }else{
            costOutput.innerText = '$' + cost.toFixed(2);
        }
        
        
    } else { // Show an error:
        if(costOutput.textContent !== undefined){
            costOutput.textContent = 'Please enter valid values.';
        }else{
            costOutput.innerText = 'Please enter valid values.';
        }
    }
    
    // Return false to prevent submission:
    return false;
    
} // End of calculate() function.

// Initial setup:
function init() {
    'use strict';
    document.getElementById('theForm').onsubmit = calculate;
} // End of init() function.
window.onload = init;