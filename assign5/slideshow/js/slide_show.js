/*
Deanna Yee
deannayee@my.smccd.edu
CIS 144OL
File Name: slide_show.js
Chapter #: JQUERY Chapter 9
Assignment #: 5
4/8/17
*/

$(document).ready(function() {
	var nextSlide = $("#slides img:first-child");
	var nextCaption;
	var nextSlideSource;
	var pause = false;
		
	// the function for running the slide show
    var runSlideShow = function() {
    	//display the next image 
    	if (nextSlide.next().length == 0) {
			nextSlide = $("#slides img:first-child");
		}
		else {
			nextSlide = nextSlide.next();
		}  
       	$("#caption").fadeOut(1000);
       	$("#slide").fadeOut(1000,
       		function () {
				nextSlideSource = nextSlide.attr("src");
				nextCaption = nextSlide.attr("alt");
				$("#slide").attr("src", nextSlideSource).fadeIn(1000);					
				$("#caption").text(nextCaption).fadeIn(1000);
			}
		);
	}

	// start the slide show
	var timer = setInterval(runSlideShow, 3000);

	$("#prev").click(function(){
		//display the previous image
		nextSlide = nextSlide.prev();
		$("#caption").fadeOut(1000);
       	$("#slide").fadeOut(1000,
	       	function () {
				nextSlideSource = nextSlide.attr("src");
				nextCaption = nextSlide.attr("alt");
				$("#slide").attr("src", nextSlideSource).fadeIn(1000);					
				$("#caption").text(nextCaption).fadeIn(1000);
			}
		);

		//disable prev button for first image
		if(nextSlide.prev().length == 0){
			$("#prev").prop("disabled", true);
		}

		//enable next if button is disabled
		if($("#next").prop("disabled")){
			$("#next").prop("disabled", false);
		}

	});

	$("#play").click(function(){
		if(pause == true){
			//slide show is not paused
			pause = false;

			//change button to Pause
			$("#play").val("Pause");

			//disable prev and next buttons
			$("#prev").prop("disabled", true);
			$("#next").prop("disabled", true);

			//run slide show
			timer = setInterval(runSlideShow, 3000);
		}else{
			//slide show is paused 
			pause = true;

			//stop the slide show
			clearInterval(timer);

			//change button to Play
			$("#play").val("Play");

			//enable and disable prev and next buttons
			if(nextSlide.next().length == 0){
				//disable next if it is the last image
				$("#prev").prop("disabled", false);
				$("#next").prop("disabled", true);
			}else if(nextSlide.prev().length == 0){
				//disable prev if it is the first image
				$("#prev").prop("disabled", true);
				$("#next").prop("disabled", false);
			}else{
				//enable prev and next for images that are not first or last
				$("#prev").prop("disabled", false);
				$("#next").prop("disabled", false);
			}
		}
	});

	$("#next").click(function(){
		//go to next slide image
		runSlideShow();

		//disable next button for last image
		if(nextSlide.next().length == 0){
			$("#next").prop("disabled", true);
		}

		//enable prev if button is disabled
		if($("#prev").prop("disabled")){
			$("#prev").prop("disabled", false);
		}
	});
	
});