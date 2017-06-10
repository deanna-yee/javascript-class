/*
Deanna Yee
deannayee@my.smccd.edu
CIS 114 OL
File Name: subset_expansion.js
Assignment #: midterm 2
Date: 4/17/17 
*/

/*when link is clicked show the information that is hidden and change link to show less
	when the link is clicked again hide the information that needs to be hidden and
	change the link to show more again */
$(document).ready(function(){
	$("#jdom a").click(function(){
		$(this).toggleClass("showMore");
		if($(this).attr("class") != "showMore"){
			$(this).text("Show more");
			$(this).prev().hide();
		}else{
			$(this).text("Show less");
			$(this).prev().show();
		}
	}); //end click
}); //end ready