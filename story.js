//Decision Paths

const texts = [
  //Level 0
  [ 
    {text: "You awake by a sudden noise. Oh no! Zombies have entered your house and are coming for you. What do you do?",
      A: "I hide in my bathroom", // --> iteration 1.1
      B: "I run out of the door", }, // --> go to iteration 1.2 
  ],

  //Level 1
  [ 
    //Iteration 1.1
    { text: "The zombies break through the door. You try to kill as many as you can with your toothbrush but its not enough.",
    A: "i climb out of the window and run down the street that leads into the city", // -> iteration 2.1
    B: "i climb out of the window and run down the street that leads into the forest", // -> iteration 2.2
    Alive: true },

    //Iteration 1.2
    {text: "You stand on the street. Do you go to the forest to hide in a hut or do you go to the street and head for the city maybe you can find some",
      A: "i go to the street and head out to the town to find some information there", // -> iteration 2.1
      B: "i head east to the forest to look for a hut to hide", // -> iteration 2.2
      Alive: true}, 
  ],

  //Level 2
  [
    // Iteration 2.1
    {text: "You are now in town and you hear a noise. You have to options to hide. Go into the supermarket or into the weapon shop",
      A: "Supermarket", // --> iteration 3.1
      B: "Weapon-Shop",
      Alive: true }, {},// --> iteration 3.2

    // Iteration 2.2
    { text: "You enter the forest and start looking for the hut. After hours of searching you finally find it. Inside the hut is pure chaos but you find a map which leads to a secret and safe island. You are excited!",
      A: "I must go there immeditaley! I turn east and start walking", // --> iteration 3.3
      B: "First i rest. Tomorrow is a new day. I shall start my journey then!",
      Alive: true}, // --> iteration 3.4
  ],

  //Level 3
  [
    // Iteration 3.1
    {text: "You are now in the supermarket and find a whole back of food. Your lucky day! In the bag you also find a secret map leading to a safe place on an island! Lucky day indeed! You head straight east! ",
     A: "Lets head east!",  // --> iteration 4.1
     Alive: true},
     

    // Iteration 3.2
    {text: "You are now in the weapon shop and find a new and completey equppied rifle. Your lucky day! Besides the rifle you also find a secret map leading to a safe place on an island! Lucky day indeed! You head straight east!",
     A: "Lets head east!", // --> iteration 4.1
     Alive: true}, 

    // Iteration 3.3
    {text: "You start walking east. BUt oh now you meet a group of zombies. do you fight or do you run?",
      A: "I will run away as fast as i can!", // --> iteration 4.2
      B: "I fight! And i will succeed", // --> iteration 4.3
      Alive: true}, 

    // Iteration 3.4
    {text: "You lay down to sleep. In the night you hear disturbig noises. The hut was a mistake. You are surronded by zombies with no chance to esacpe. Oh poor you!",
      A: " ",
      B: " ", 
      Alive: false}, 
  ]

];


var advanceTo = function(s) {
    changeText(s.text)
  };


var scenario = {
    one: {
      text: "You have finally decided to take your dog out for a walk. You smile and pat your trusty companion's head. What the dog's name?\n",
    },
    two: {
      text: "Your dog yanks at the leash. You hear dogs barking and see an old abandoned house. Strangely, the door is wide open. What do you want to do?",
      buttons: [["Turn and run", "advanceTo(scenario.three)"],["Enter The House", "advanceTo(scenario.four)"]]
    },
    three: {
      image: "https://1.bp.blogspot.com/-83pWE4JxQxM/ViiOd_7nGTI/AAAAAAAADUg/yCJ8iAB-gMY/s1600/postapoc5.jpg",//"https://s4.postimg.org/t1g20apst/261819008_d4316c1bdf_o.jpg",
      text: "A wild gang of rabid dogs are gaining on you. Against your better judgement you enter the creepy house for saftey. Your dog is whincing and may be injured.",
      buttons: [["continue", "advanceTo(scenario.four)"]]
    },
      four: {
      image: "https://s6.postimg.org/kz5m1cnkh/2919478782_c343d14be6_b.jpg",
      text: "Your dog has run, barking loudly, into the basement. You wonder what's down there. The door jammed when you slammed it behind you. You are going to need something to pry it back open",
      buttons: [["Follow your Dog Downstairs", "advanceTo(scenario.five)"],["Search the Kitchen for a knife", "advanceTo(scenario.five)"]]
    },
      five: {
      image: "https://s6.postimg.org/kz5m1cnkh/2919478782_c343d14be6_b.jpg",
      text: "TO BE CONTINUED...",
  
    },
    
  };


  
  
  //this is the code that starts the game
  advanceTo(scenario.one);

class Button {
  constructor(iterationX, iterationY, option) {
    this.iterationX = iterationX;
    this.iterationY = iterationY;
    this.data = texts;
    this.option = option;
  }

  displayText() {

    if(this.option === "A"){
        console.log(this.data[ this.iterationX][this.iterationY].A);
        //document.querySelector("#btn-A").value = this.data[ this.iterationX][this.iterationY].A
        document.querySelector("#btn-B").value = this.data[ this.iterationX][this.iterationY].B
        document.querySelector(".text").innerText = this.data[ this.iterationX][this.iterationY].text

  } else if (this.option === "B"){
    console.log(this.data[ this.iterationX][this.iterationY].B);
    document.querySelector("#btn-A").value = this.data[ this.iterationX][this.iterationY].A
    document.querySelector("#btn-B").value = this.data[ this.iterationX][this.iterationY].B
    document.querySelector(".text").innerText = this.data[ this.iterationX][this.iterationY].text
  } 
  }
}
