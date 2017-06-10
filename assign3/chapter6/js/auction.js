/*
Deanna Yee
deannayee@my.smccd.edu
CIS 114OL
auction.js
Chapter 6
Assignment 3
2/20/17
*/
//auction.js
/*This script indicates the amount of hours, minutes and seconds 
left until the auction ends*/

//Call this function when the page has loaded
//Chapter 6 Pursue Bullet 1
function init() {
	//Want to be strict:
	'use strict'

	//Create a Date object for now
	var now = Date.now() || (new Date()).getTime();

	//Create a Date object for end of auction
	var auctionEnd = new Date('20 Mar 2017 20:00:00 UTC');

	//Get reference to the paragraphs
	var currentTime = document.getElementById('currentTime');
	var auctionEnds = document.getElementById('auctionEnds');
	var time = document.getElementById('time');

	//display current time
	var currentTimeMessage = 'Local Time: ' + Date();

	//display when the auction ends
	var auctionEndMessage = 'UTC Time: ' + auctionEnd.toUTCString() + '; Local Time: ' + auctionEnd;

	//calculate time left in hours, minutes, and seconds
	var hours = 0;
	var minutes = 0;
	var seconds = 0;
	if (now < auctionEnd){
		//ms in an hour
		var msHours = 1000 * 60 * 60;
		//ms in an minute
		var msMins = 1000 * 60;
		//ms in a second
		var msSecs = 1000;

		//calculate time left  in milliseconds
		var timeLeft = auctionEnd - now;
		
		//convert milliseconds to hours, minutes, and seconds
		hours = parseInt(timeLeft/msHours);
		timeLeft -= (hours * msHours);
		minutes = parseInt(timeLeft/msMins);
		timeLeft -= (minutes * msMins);
		seconds = parseInt(timeLeft/msSecs);

		
	}
	//display time left
	var timeLeftMessage = hours + " hours, " + minutes + " minutes, " + seconds + " seconds";

	//Update the innerText or textContent property of the paragraph:
	if(currentTime.textContent !== undefined) {
		currentTime.textContent = currentTimeMessage;
	} else {
		currentTime.innerText = currentTimeMessage;
	}

	if(auctionEnds.textContent !== undefined) {
		auctionEnds.textContent = auctionEndMessage;
	} else {
		auctionEnds.innerText = auctionEndMessage;
	}

	if(time.textContent !== undefined) {
		time.textContent = timeLeftMessage;
	} else {
		time.innerText = timeLeftMessage;
	}
} 

window.onload = init;