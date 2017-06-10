/*
Deanna Yee
deannayee@my.smccd.edu
CIS 114 OL
File Name: itunes.js
Final exam
Date: 5/20/17
*/

$(document).ready(function(){
	"use strict";
	$("#search").click(
		function(){
			var userInput = $("#searchInput").val();
			userInput = encodeURIComponent(userInput).replace(/%20/g, "+");
			var params = "term=" + userInput + 
				"&country=US&media=music&entity=musicTrack&limit=20";
			var url = "http://itunes.apple.com/search?" + params + "&callback=?";
			$.getJSON(url, function(data){
				var html = "";
				$.each(data.results, function(i, item){
					var currency = item.currency;
					html += "<div class='song'>" +
						"<span>" +
							"<div class='infoTitle'>" +
								"<p>Track:</br>" +
								"Track Price:</br>" +
								"Artist:</br>" +
								"Collection:</br>" +
								"Collection Price:</br>" +
								"Primary Genre:</p>" +
							"</div>" +
							"<div class='info'>" +
								"<p>" + item.trackCensoredName + 
								"  <a href=" + item.previewUrl + ">Preview</a></br>" +
								item.trackPrice + " " + currency + "</br>" +
								"<a href=" + item.artistViewUrl + ">" + 
									item.artistName + "</a></br>" +
								"<a href=" + item.collectionViewUrl + ">" + 
									item.collectionCensoredName +"</a></br>" +
								item.collectionPrice + " " + currency +"</br>" +
								item.primaryGenreName +"</p>" +
							"</div>" +
						"</span>" +
						"<img class='albumImg' src=" + item.artworkUrl100 + ">" +
					"</div>"
				});
				$("#output").html(html);
			});

		});
});