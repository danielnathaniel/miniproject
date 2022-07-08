// Requirements
// You must have a game object or class for your Tamagotchi, and event listeners/handlers that call methods in your game object or class.

// Your application must be deployed on Github Pages. There will be a demo on how to deploy to Github Pages next week. If you want to try before then, check out this resource.

// You must build incrementally and make commits as you go. You will be expected to show a commit history that reflects taking careful measured steps and building one feature at a time.

// Create a repo for your Tamagotchi pet on github.com NOT on github enterprise.

// ***Make a commit after you finish each of the following

// Create an Object or Class (look at your notes on JS Classes if you forgot) for your Tamagotchi

// Instantiate your Tamagotchi (If you created a class)

// Display a character of your choice on the screen to represent your pet

// Display the following metrics for your pet:

// Hunger (1-10 scale)
// Sleepiness (1-10 scale)
// Boredom (1-10 scale)
// Age
// ***Add buttons to the screen to feed your pet, turn off the lights, and play with your pet.

// Add the ability to name your pet.

// Style the page.

// Increase your pet's age every x minutes

// Increase your pet's Hunger, Sleepiness, and Bored metrics on an interval of your choosing.

// You pet should die if Hunger, Boredom, or Sleepiness hits 10.

// *****Morph your pet at certain ages. 

// ***Animate your pet across the screen while it's alive.

initiateFirst = () => {

	document.getElementById("petSleep").addEventListener("click", userPet.addSleepiness);
	document.getElementById("petEat").addEventListener("click", userPet.addWeight);
	document.getElementById("petPlay").addEventListener("click", userPet.addBored);
	setInterval(setMetrics, 500)
	setInterval(userPet.increaseBored, 3000);
	setInterval(userPet.increaseSleepiness, 3000)
	setInterval(userPet.increaseHunger, 3000)
	setInterval(userPet.addAge, 2000)



}

setMetrics = () => {

	document.getElementById("hungerDisplay").innerText = "Hunger = " + userPet.hunger;
	document.getElementById("sleepinessDisplay").innerText = "Sleepiness = " + userPet.sleepiness
	document.getElementById("boredomDisplay").innerText = "Boredom = " +userPet.boredom
	document.getElementById("ageDisplay").innerText = "age = " + userPet.age

	if (userPet.age === 4) {
	  document.getElementById("petPicture").style.backgroundImage = "url('images/pokemon-4784547_960_720.png')";
	  document.getElementById("petPicture").style.width = "320px";
	  document.getElementById("petPicture").style.height = "320px";

	  		alert("YOU HAVE EVOLVED!")
}
	if ( userPet.sleepiness === 10 || userPet.boredom === 10 || userPet.hunger === 10 )	{
		document.getElementById("petPicture").style.backgroundImage = "url('images/Screen Shot 2022-07-07 at 4.15.02 PM.png')";
		alert("Your pet is in heaven now")
		document.getElementById("petPicture").style.animation = "null";
	}	

}


userName = () => {
  let newName = prompt("Please enter your pet's name", "Lucy");
  if (newName != null) {
    document.getElementById("userPetName").innerText =
    "Your pet's name is " + newName + "!";
    initiateFirst();
  }
}


class Pet {
	constructor(){
		this.age = 0
		this.sleepiness = 0
		this.boredom = 0
		this.hunger = 0
	}

	addWeight = () => {
		if(this.hunger > 0){this.hunger--}
	}
	
	addAge = () => {
		if(this.age < 50){this.age++}
	}

	addBored = () => {
		if (this.boredom > 0) {this.boredom--}
	}

	addSleepiness = () => {
		if(this.sleepiness > 0){this.sleepiness--} 
	}

	increaseBored = () => {
		if (this.boredom < 11)this.boredom++
	}
	increaseSleepiness = () => {
		if(this.sleepiness < 11){this.sleepiness++}
	}
	increaseHunger = () => {
		if(this.hunger < 11){this.hunger++};
	}
	lightOn = () => {
	document.body.style.background = "url('images/retro-s-videogame-tunnel-background-mountains-sun-bit-depth-field-inspired-vintage-videogames-web-print-156623128.jpeg') no-repeat center center fixed";
	}
	lightOff = () => {
	document.body.style.background = "url('images/darkness.png')"
	}

}

	let userPet = new Pet()

// new pet is an object and is no longer a class



//did the above code in button id in JS
// need to create a button before this works-did this in html

// console log hungry and use dom manip to put in broswer ---use innertext https://sebhastian.com/display-javascript-variable-html/ 









