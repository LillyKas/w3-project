
let images = document.getElementById("images"); 
let text = document.getElementById("text"); 
let buttonBox = document.getElementById('buttonBox');
let input = document.getElementById('input');
let inventory = document.getElementById('inventoryBox');
let lifeCount = 4;
let lifeEl = document.getElementById('lifeEl');
let elements = document.getElementById('elements');
let playerName;
let inventoryState = false;

input.addEventListener("keypress", setName);


 function setName (event) {
  console.log(input.value);
  if (event.key == "Enter" || event.keyCode == 13) {
    playerName =  input.value;
   // input.parentNode.removeChild(input)
    input.style.display = "none";
    advanceTo(scenario.two)
  }
};



const changeText = function(words) {
  text.innerHTML = words.replace("Your name", playerName);
};


 let changeImage = function(img) {
  images.style.backgroundImage = "url(" + img + ")";
}; 

const changeInventory = function(inv) {
  inventory.innerHTML += inv ;
  if(inv === "🥫🥫🥫" || inv === "🗡️🗡️🗡️" ){
    inventoryState = true  
    console.log(inventoryState + "läuft")
  }
  
};



let countSteps = 0;
const changeButtons = function(buttonList) {
  buttonBox.innerHTML = "";
 
  for (let i = 0; i < buttonList.length; i++) {
    buttonBox.innerHTML += "<button onClick="+buttonList[i][1]+">" + buttonList[i][0] + "</button>";
    
  };
  countSteps++
};

let advanceTo = function(s) {
 changeImage(s.image)
  changeText(s.text)
  changeButtons(s.buttons)
  changeInventory(s.inventory);
};

let death = function(){
 
  let random = prompt("Please enter a number between 1 and 5");
  let number = Math.trunc(Math.random()*100)
  console.log( random + "and" + number)
  if (random == number) {
   
    advanceTo(scenario.ten);
    alert("yay you are lucky! The zombies are distracted by a distant sound and leave you alone. You can continue your journey!")
   
  } else if(lifeCount > 0){  
      //alert("Oh no no no! The zombies break through the door and you become one of them....")
      document.getElementById('elements').removeChild(document.querySelector('.lifeItem'))
      alert("Try Again!")
      lifeCount--
  } else if (lifeCount <= 0 ){
    advanceTo(scenario.death);
  }
}

let fight = function(){

  if(inventoryState) {
    
    inventory.innerHTML = ""
    advanceTo(scenario.ten)

  } else {

    advanceTo(scenario.death)
  }
  
}

let scenario = {
  one: {
   image: "/assets/start.png",
    text: "Hello, oh brave player! What is your name?\n",
    inventory: "",
  },
  two: {
    image: "/assets/Cat-secondScenario.png",
    text: "You are waking up by a sudden noise. Oh no! Zombies are entering your house and are coming for you. What are you doing?",
    buttons: [["I hide in my bathroom", "advanceTo(scenario.three)"],["I run out of the door", "advanceTo(scenario.four)"]],
    inventory: "",
  },
  three: {
    image: "/assets/Cat-thirdScenario.png",
    text: "The zombies are breaking through the door. You are trying to kill as many as you can with your toothbrush but its not enough...",
    buttons: [["climb through window  + run into the city", "advanceTo(scenario.five)"],["climb through window  + run into the forest", "advanceTo(scenario.six)"]],
    inventory: "",
  },
    four: {
        image: "/assets/Cat-fourthScenario.png",
    text: "You are standing on the street. You can choose between going into the forest or into the city",
    buttons: [["i am going into town", "advanceTo(scenario.five)"],["i head to the forest", "advanceTo(scenario.six)"]],
    inventory: "",
  },
    five: {
        image: "/assets/Cat-fifthScenario.png",
    text: "You are now in town and you are hearing a noise. You have to options to hide. Go into the supermarket or into the weapon shop",
    buttons: [["Supermarket", "advanceTo(scenario.seven)"],["Weapon-Shop", "advanceTo(scenario.eight)"]],
    inventory: "",
  },

  six: {
    image: "/assets/Cat-sixthScenario.png",
    text: "You are entering the forest and start looking for a place to sleep. After hours of searching you finally find a hut which seems to be safe. Inside the hut you find a map which leads to a secret and safe island. You are excited!",
    buttons: [["I must go there immeditaley! ", "advanceTo(scenario.ten)"],["First i rest. Tomorrow I shall start my journey!", "advanceTo(scenario.nine)"]],
    inventory: "",
  },

  seven: {
    image: "/assets/Cat-seventhScenario.png",
    text: "You are now inside the  supermarket and find a whole bag of food. Your lucky day! In the bag you also find a secret map leading to a safe place on an island! Lucky day indeed! You head straight east! ",
    buttons: [["Lets head east!", "advanceTo(scenario.ten)"]],
    inventory: "🥫🥫🥫",
  },
  eight: {
    image: "/assets/Cat-eighthScenario.png",
    text: "You are now in the weapon shop and find a bunch of knives. Your lucky day! Besides the kinves you also find a secret map leading to a safe place on an island! Lucky day indeed! You head straight east!",
    buttons: [["Lets head east!", "advanceTo(scenario.ten)"]],
    inventory: "🗡️🗡️🗡️",
  },

  nine: {
    image: "/assets/Cat-ninethScenario.png",
    text: "You lay down to sleep. In the night you hear disturbig noises. The hut was a mistake. You are surronded by zombies with no chance to esacpe. Oh poor you!",
    buttons: [["Now the fade decides if you can continue or die", "death()"]],
    inventory: "",
  },

  ten: {
    image: "/assets/Cat-tenthScenario.png",
    text: "You start walking and come to a crossroad.",
    buttons: [["Left", "advanceTo(scenario.eleven)"],["Right", "advanceTo(scenario.twelve)"]],
    inventory: "", 
    
  },

  eleven: {
    image: "/assets/Cat-eleventhScenario.png",
    text: "You turn left and reach the port. Well done so far! You now the island must be straight ahead of you.",
    buttons: [["I charter a boat and head to the island", "advanceTo(scenario.thirteen)"],["I try to swim across.", "advanceTo(scenario.fourteen)"]],
    inventory: "",
  },

  twelve: {
    image: "/assets/Cat-twelvethScenario.png",
    text: "You turn right and reach the city again. You are lost... Either you head back to the crossroad or try to find a faster way to a port",
    buttons: [["Go back", "advanceTo(scenario.ten)"],["Continue", "advanceTo(scenario.sixteen)"]],
    inventory: "",
  },

  thirteen: {
    image: "/assets/Cat-thirteenthScenario.png",
    text: "Congrats! You reach the island. There is a small community, which is happy to have a new member. You live a happy life!",
    buttons: [["Start Again", "location.reload();"]],
    inventory: "",
  },

  fourteen: {
    image: "/assets/Cat-fourteenthScenario.png",
    text: "Oh no! You were defintely to confident. You struggle enormesly",
    buttons: [["Call for help and try to pull through", "advanceTo(scenario.seventeen)"],["Try to swim back. Maybe its not to late", "advanceTo(scenario.eighteen)"]],
    inventory: "",
  },

  fifteen: {
    image: "/assets/Cat-thirteenthScenario.png",
    text: "You turn back  and reach the port eventuelly . Well done so far! You now the island must be straight ahead of you. You find a boat and start your successful jouney to the island. You are safe!",
    buttons: [["Start Again", "location.reload();"]],
    inventory: "",
  },

  sixteen: {
    image: "/assets/Cat-sixteenthScenario.png",
    text: "Oh no! You were defintely to confident. You meet a zombie group. What do you do? If you have food in your inventory you can distract the zombies with it and run away back to the crossroad. If you have a weapon you can enter the fight and suceed",
    buttons: [["Let´s see if a fade as a zombie awaits you?", "fight()"]],
    input: "hhh",
    inventory: "",
  },

  seventeen: {
    image: "/assets/Cat-seventheenthScenario.png",
    text: "Congrats!someone on the island hears your call and rescues you. There is a small community, which is happy to have a new member. You live a happy life!",
    buttons: [["Start Again", "location.reload();"]],
    inventory: "",
  },

  eighteen: {
    image: "/assets/Cat-eighteenthScenario.png",
    text: "Well on the shore back you see the zombies already waiting for you. Either you become one of them or you will be set back to the crossroad. ",
    buttons: [["See if the fade as a zombie awaits you", "death()"]],
    inventory: "",
  },

  death: {
    image: "/assets/gameOver.png",
    text: "GAME OVER",
    buttons: [["Start Again", "location.reload();"]],
    inventory: "",
  }
  
};


advanceTo(scenario.one);