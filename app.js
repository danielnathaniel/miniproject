

initiateFirst = () => {

	document.getElementById("petSleep").addEventListener("click", userPet.addSleepiness);
	document.getElementById("petEat").addEventListener("click", userPet.addWeight);
	document.getElementById("petPlay").addEventListener("click", userPet.addBored);
	setInterval(setMetrics, 500)
	setInterval(userPet.increaseBored, 2500);
	setInterval(userPet.increaseSleepiness, 2500)
	setInterval(userPet.increaseHunger, 2500)
	setInterval(userPet.addAge, 3000)

}

setMetrics = () => {

	document.getElementById("hungerDisplay").innerText = "Hunger = " + userPet.hunger;
	document.getElementById("sleepinessDisplay").innerText = "Sleepiness = " + userPet.sleepiness
	document.getElementById("boredomDisplay").innerText = "Boredom = " + userPet.boredom
	document.getElementById("ageDisplay").innerText = "Age = " + userPet.age

	if (userPet.age === 3) {
	  document.getElementById("petPicture").style.backgroundImage = "url('images/pokemon-4784547_960_720.png')";
	  document.getElementById("petPicture").style.width = "250px";
	  document.getElementById("petPicture").style.height = "250px";

	  document.getElementById("userNotification").innerText = "YOUR TAMAGOTCHI HAS EVOLVED!!!!!";
	  // alert("YOU HAVE EVOLVED!");
}
	if ( userPet.sleepiness === 10 || userPet.boredom === 10 || userPet.hunger === 10 )	{
		document.getElementById("petPicture").style.backgroundImage = "url('images/Screen Shot 2022-07-07 at 4.15.02 PM.png')";
		// alert("Your pet is in heaven now")
		document.getElementById("petPicture").style.animation = "null";
		document.getElementById("userNotification").innerText = "YOUR TAMAGOTCHI HAS GONE TO HEAVEN!!!!!";

	}	

}


userName = (newName) => {
  newName = prompt("Please enter your Tamagotchi's name", "CHARQUEEN").toUpperCase();
  if (newName != null) {
    document.getElementById("userPetName").innerText =
    "YOUR TAMAGOTCHI'S NAME IS " + newName + "!";
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
	document.body.style.backgroundSize = "cover"
	}
	lightOff = () => {
	document.body.style.background = "url('images/darkness.png')center center fixed";
	document.body.style.backgroundSize = "cover"
	}
}


	let userPet = new Pet()

// new pet is an object and is no longer a class







