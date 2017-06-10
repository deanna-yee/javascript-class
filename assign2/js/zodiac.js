/*
Deanna Yee
deannayee@my.smccd.edu
CIS 114OL
file name: zodiac.js
assignment #: 2
2/6/17
*/

//This script calculates your chinese zodiac sign based on your birth year and month

//function called when the form is submitted
//function finds your zodiac sign and return false
function findSign() {
	//Be strict
	'use strict'

	//Traits for each sign
	// order: Monkey, Rooster, Dog, Pig, Rat, Ox, Tiger, Rabbit, Dragon, Snake, Horse, Goat
	var traits = [
	   'Quick-witted, charming, lucky, adaptable, bright, versatile, lively, smart', //monkey
	   'Honest, energetic, intelligent, flamboyant, flexible, diverse, confident', //rooster
	   'Loyal, sociable, courageous, diligent, steady, lively, adaptable, smart', //dog
	   'Honorable, philanthropic, determined, optimistic, sincere, sociable', //pig
	   'Intelligent, adaptable, quick-witted, charming, artistic, sociable', //rat
	   'Loyal, reliable, thorough, strong, reasonable, steady, determined', //ox
	   'Enthusiastic, courageous, ambitious, leadership, confidence, charismatic', //tiger
	   'Trustworthy, empathic, modest, diplomatic, sincere, sociable, caretakers', //rabbit
	   'Lucky, flexible, eccentric, imaginative, artistic, spiritual, charismatic', //dragon
	   'Philosophical, organized, intelligent, intuitive, elegant, attentive, decisive', //snake
	   'Adaptable, loyal, courageous, ambitious, intelligent, adventurous, strong ', //horse
	   'Tasteful, crafty, warm, elegant, charming, intuitive, sensitive, calm', //goat
	];

	//name of animal
	var nameOfAnimal = "";
	
	//image name
	var imageName = "";

	//Get reference to the form elements
	var year = document.getElementById('year');
	var month = document.getElementById('month');
	var trait = document.getElementById('trait');
	var animal = document.getElementById('animal');
	var image = document.getElementById('image');

	//convert the year to a number
	if(year && year.value){
		year = parseInt(year.value, 10);
	}

	//check for valid data
	if(year && (year >= 1000) && (year <= 9999) && month && month.value){
		//make the year one less if the month is january
		if(month.value == 'January'){
			year--;
		}

		//determine the chinese zodiac sign
		var traitIndex = year % 12;
		switch(traitIndex){
			case 0: //Monkey
				imageName = "monkey.jpg";
				nameOfAnimal = "Monkey";
				break;
			case 1: //Rooster
				imageName = "rooster.jpg";
				nameOfAnimal = "Rooster";
				break;
			case 2: //Dog
				imageName = "dog.jpg";
				nameOfAnimal = "Dog";
				break;
			case 3: //Pig
				imageName = "pig.jpg";
				nameOfAnimal = "Pig";
				break;
			case 4: //Rat
				imageName = "rat.jpg";
				nameOfAnimal = "Rat";
				break;
			case 5: //Ox
				imageName = "ox.jpg";
				nameOfAnimal = "Ox";
				break;
			case 6: //Tiger
				imageName = "tiger.jpg";
				nameOfAnimal = "Tiger";
				break;
			case 7: //Rabbit
				imageName = "rabbit.jpg";
				nameOfAnimal = "Rabbit";
				break;
			case 8: //Dragon
				imageName = "dragon.jpg";
				nameOfAnimal = "Dragon";
				break;
			case 9: //Snake
				imageName = "snake.jpg";
				nameOfAnimal = "Snake";
				break;
			case 10: //Horse
				imageName = "horse.jpg";
				nameOfAnimal = "Horse";
				break;
			case 11: //Goat
				imageName = "goat.jpg";
				nameOfAnimal = "Goat";
				break;
			default:
				break;
		}

		//show image of animal
		image.src = "./images/" + imageName;

		//show name of animal
		if(animal.textContent !== undefined){
			animal.textContent = nameOfAnimal;
		}else{
			animal.innerText = nameOfAnimal;
		}

		//show traits for animal
		if(trait.textContent !== undefined){
			trait.textContent = traits[traitIndex];
		}else{
			trait.innerText = traits[traitIndex];
		}


	} else { //Show an error
		if(trait.textContent !== undefined){
			trait.textContent = 'Please enter valid values.';
		}else{
			trait.innerText = 'Please enter valid values.';
		}
	}

	return false;
}

function init() {
	'use strict'
	document.getElementById('zodiacForm').onsubmit = findSign;
}

window.onload = init;