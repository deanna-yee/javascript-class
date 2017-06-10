/*
Deanna Yee
deannayee@my.smccd.edu
CIS 114OL
reservation.js
JQUERY Chapter 8
Assignment 4
3/21/17
*/

$(document).ready(function() {
	//moves the focus to the arrival date
	$("#arrival_date").focus();

	//validate form
	$("#reservation_form").validate({
		rules: {
			arrival_date: {
				required: true,
				date: true
			},
			nights: {
				required: true,
				digits: true,
				min: 1
			},
			name: {
				required: true
			},
			email: {
				required: true,
				email: true,
			},
			phone: {
				required: true,
				phoneUS: true
			}
		},
		messages: {
			nights: {
				min: "Please specify a positive integer."
			}
		}

	}); //end validate
}); // end ready

