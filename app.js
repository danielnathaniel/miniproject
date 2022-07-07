// Requirements
// You must have a game object or class for your Tamagotchi, and event listeners/handlers** that call methods in your game object or class.

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

// *****Morph your pet at certain ages. not using keyframes - 

// ***Animate your pet across the screen while it's alive.

initiateFirst = () => {

	document.getElementById("petSleep").addEventListener("click", userPet.addSleepiness);
	document.getElementById("petEat").addEventListener("click", userPet.addWeight);
	document.getElementById("petPlay").addEventListener("click", userPet.addBored);
	setInterval(setMetrics, 100)
	setInterval(userPet.increaseBored, 5000);
	setInterval(userPet.increaseSleepiness, 5000)
	setInterval(userPet.increaseHunger, 5000)
	setInterval(userPet.addAge, 20000)


}

setMetrics = () => {

	document.getElementById("hungerDisplay").innerText = "Hunger = " + userPet.hunger;
	document.getElementById("sleepinessDisplay").innerText = "Sleepiness = " + userPet.sleepiness
	document.getElementById("boredomDisplay").innerText = "Boredom = " +userPet.boredom
	document.getElementById("ageDisplay").innerText = "age = " + userPet.age
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
	constructor(name, age, sleepiness, weight, boredom, hunger){
		this.name = name
		this.age = 0
		this.sleepiness = 0
		this.boredom = 0
		this.hunger = 0
	}

	addWeight = () => {
		this.weight++
		this.hunger--
	}
	
	addAge = () => {
		this.age++
	}

	addBored = () => {
		this.boredom--
	}

	addSleepiness = () => {
		this.sleepiness--
		console.log(this.sleepiness)
	}

	increaseBored = () => {
		this.boredom++
	}
	increaseSleepiness = () => {
		this.sleepiness++
	}
	increaseHunger = () => {
		this.hunger++
	}

}

	let userPet = new Pet()

// new pet is an object and is no longer a class



//did the above code in button id in JS
// need to create a button before this works-did this in html

// console log hungry and use dom manip to put in broswer ---use innertext https://sebhastian.com/display-javascript-variable-html/ 









