
//let images = document.getElementById("images"); 
let text = document.getElementById("text"); 
let buttonBox = document.getElementById('buttonBox');
let input = document.getElementById('input');

let playerName;

input.addEventListener("keypress", setName);



 function setName (event) {
  console.log(input.value);
  if (event.key == "Enter" || event.keyCode == 13) {
    playerName =  input.value;
    input.parentNode.removeChild(input)
    advanceTo(scenario.two)
  }
};



const changeText = function(words) {
  text.innerHTML = words.replace("Your Name", playerName);
};


/* let changeImage = function(img) {
  images.style.backgroundImage = "url(" + img + ")";
}; */



const changeButtons = function(buttonList) {
  buttonBox.innerHTML = "";
  for (var i = 0; i < buttonList.length; i++) {
    buttonBox.innerHTML += "<button onClick="+buttonList[i][1]+">" + buttonList[i][0] + "</button>";
  };
};

var advanceTo = function(s) {
 // changeImage(s.image)
  changeText(s.text)
  changeButtons(s.buttons)
};

let death = function(){
    console.log("death")
}

let finishGame = function(){
    console.log("Finished Game")
}



var scenario = {
  one: {
   // image: "",
    text: "Hello, oh brave player! What is your name?\n",
  },
  two: {
     //image: " ",
    text: "You awake by a sudden noise. Oh no! Zombies have entered your house and are coming for you. What do you do?",
    buttons: [["I hide in my bathroom", "advanceTo(scenario.three)"],["I run out of the door", "advanceTo(scenario.four)"]]
  },
  three: {
     //image: " ",
    text: "The zombies break through the door. You try to kill as many as you can with your toothbrush but its not enough.",
    buttons: [["climb through window  + run into the city", "advanceTo(scenario.five)"],["climb through window  + run into the forest", "advanceTo(scenario.six)"]]
  },
    four: {
     //image: " ",
    text: "You stand on the street. Do you go to the forest to hide in a hut or do you go to the street and head for the city maybe you can find some",
    buttons: [["go to the street and head out to the town to find some information there", "advanceTo(scenario.five)"],["i head east to the forest to look for a hut to hide", "advanceTo(scenario.six)"]]
  },
    five: {
     //image: " ",
    text: "You are now in town and you hear a noise. You have to options to hide. Go into the supermarket or into the weapon shop",
    buttons: [["Supermarket", "advanceTo(scenario.seven)"],["Weapon-Shop", "advanceTo(scenario.eight)"]]
  },

  six: {
    // image: " ",
    text: "You enter the forest and start looking for the hut. After hours of searching you finally find it. Inside the hut is pure chaos but you find a map which leads to a secret and safe island. You are excited!",
    buttons: [["I must go there immeditaley! I turn east and start walking", "advanceTo(scenario.ten)"],["First i rest. Tomorrow is a new day. I shall start my journey then!", "advanceTo(scenario.nine)"]]
  },

  seven: {
    // image: " ",
    text: "You are now in the supermarket and find a whole back of food. Your lucky day! In the bag you also find a secret map leading to a safe place on an island! Lucky day indeed! You head straight east! ",
    buttons: [["Lets head east!", "advanceTo(scenario.ten)"]]
  },
  eight: {
    // image: " ",
    text: "You are now in the weapon shop and find a new and completey equppied rifle. Your lucky day! Besides the rifle you also find a secret map leading to a safe place on an island! Lucky day indeed! You head straight east!",
    buttons: [["Lets head east!", "advanceTo(scenario.ten)"]]
  },

  nine: {
     //image: " ",
    text: "You lay down to sleep. In the night you hear disturbig noises. The hut was a mistake. You are surronded by zombies with no chance to esacpe. Oh poor you!",
    buttons: [["Now your fade is in your hands. Spin to find out", "death()"]]
  },

  ten: {
    // image: " ",
    text: "You head east and come to a crossroad.",
    buttons: [["Left", "advanceTo(scenario.eleven)"],["Right", "advanceTo(scenario.twelve)"]]
  },

  eleven: {
    //image: " ",
    text: "You turn left and reach the port. Well done so far! You now the island must be straight ahead of you.",
    buttons: [["I charter a boat and head to the island", "advanceTo(scenario.thirteen)"],["I try to swim across.", "advanceTo(scenario.fourteen)"]]
  },

  twelve: {
     //image: " ",
    text: "You turn right and reach the city again. You are lost... Either you head back to the crossroad or try to find a faster way to a port",
    buttons: [["Go back", "advanceTo(scenario.fifteen)"],["Continue", "advanceTo(scenario.sixteen)"]]
  },

  thirteen: {
    // image: " ",
    text: "Congrats! You reach the island. There is a small community, which is happy to have a new member. You live a happy life!",
    buttons: [["Finish", "finishGame()"]]
  },

  fourteen: {
     //image: " ",
    text: "Oh no! You were defintely to confident. You struggle enormesly",
    buttons: [["Call for help and try to pull through", "advanceTo(scenario.seventeen)"],["Try to swim back. Maybe its not to late", "advanceTo(scenario.eighteen)"]]
  },

  fifteen: {
    // image: " ",
    text: "You turn back  and reach the port eventuelly . Well done so far! You now the island must be straight ahead of you. You find a boat and start your successful jouney to the island. You are safe!",
    buttons: [["Finish", "finishGame()"]]
  },

  sixteen: {
   // image: " ",
    text: "Oh no! You were defintely to confident. You meet a zombie group and become one of them. Game over",
    buttons: [["Your fade as a zombie awaits you", "death()"]]
  },

  seventeen: {
    // image: " ",
    text: "Congrats!someone on the island hears your call and rescues you. There is a small community, which is happy to have a new member. You live a happy life!",
    buttons: [["Finish", "finishGame()"]]
  },

  eighteen: {
    // image: " ",
    text: "Well on the shore back you see the zombies already waiting for you. You become one of them",
    buttons: [["Your fade as a zombie awaits you", "death()"]]
  },



  
};


advanceTo(scenario.one);