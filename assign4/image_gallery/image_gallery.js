/*
Deanna Yee
deannayee@my.smccd.edu
CIS 114OL
image_gallry.js
JQUERY Chapter 5
Assignment 4
3/21/17
*/

$(document).ready(function() {
	//gets the image url and captions for each image and preload images
	$("#image_list a").each(function() {
		//gets the image url
		var imageURL = $(this).attr("href");

		//gets the captions
		var caption = $(this).attr("title");

		//preloads image
		var swappedImage = new Image();
		swappedImage.src = imageURL;
	}); // end each

	//set up event handlers for links
	$("#image_list a").click(function(evt){
		var imageURL = $(this).attr("href");
		$("#image").attr("src", imageURL);

		//swap caption
		var caption = $(this).attr("title");
		$("#caption").text(caption);

		//cancel the default action of the link
		evt.preventDefault(); //jQuery cross-browser method
	}); //end click

	//move focus to first thumbnail
	$("li:first-child a").focus();
}); //end ready