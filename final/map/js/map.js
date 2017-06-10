/*
Deanna Yee
deannayee@my.smccd.edu
CIS 114 OL
File Name: map.js
Final exam
Date: 5/22/17
*/

$(document).ready(function(){
	var geocoder = new google.maps.Geocoder();
	var infoWindow = infoWindow = new google.maps.InfoWindow();

	//locations of museums
	var locations = [
		[
			"The Walt Disney Family Museum",
			"104 Montgomery St Presidio of San Francisco San Francisco, CA",
			"http://www.waltdisney.org/",
			"https://www.yelp.com/biz/the-walt-disney-family-museum-san-francisco"
		],
		[
			"Exploratorium",
			"Pier 15 San Francisco, CA",
			"https://www.exploratorium.edu/",
			"https://www.yelp.com/biz/exploratorium-san-francisco-2"
		],
		[
			"Children's Creativity Museum",
			"221 4th St San Francisco, CA ",
			"https://creativity.org/",
			"https://www.yelp.com/biz/childrens-creativity-museum-san-francisco-3"
		],
		[
			"Cartoon Art Museum",
			"781 Beach St San Francisco, CA",
			"http://cartoonart.org/",
			"https://www.yelp.com/biz/cartoon-art-museum-san-francisco"
		],
		[
			"California Academy of Sciences",
			"55 Music Concourse Dr San Francisco, CA",
			"http://www.calacademy.org/",
			"https://www.yelp.com/biz/california-academy-of-sciences-san-francisco"
		]
	];
			
	//geocoding San Francisco
	geocoder.geocode({address: "San Francisco, CA"}, function(results){

	
		//store the location
		var sfLatLng = new google.maps.LatLng(results[0].geometry.location.lat(),
			results[0].geometry.location.lng());
					
		//center around home town and set zoom
		var mapOptions = {
			zoom: 12, 
			center: sfLatLng, 
			mapTypeId: google.maps.MapTypeId.ROADMAP
		};

		//display map
		var map = new google.maps.Map($("#map").get(0), mapOptions);

		//create an infowindow and marker for each location
		$.each(locations, function(i, location){
			geocoder.geocode({address: location[1]}, function(results){
				var latLng = new google.maps.LatLng(results[0].geometry.location.lat(),
					results[0].geometry.location.lng());
				
				var marker = new google.maps.Marker({
					position: latLng,
					map:map
				});

				marker.addListener("click", function(){
					infoWindow.setContent(
						"<h2>" + location[0] + "</h2>" +
							"<p>address: " + location[1] + "</p>" +
							"Website: <a href=" + location[2] + ">" + location[2] + "</a></br></br>" +
							"<a href=" + location[3] + ">Yelp Review</a>"
					);
					infoWindow.open(map, marker);
				});
			});
		});
	});

});