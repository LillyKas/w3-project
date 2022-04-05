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
  ],

   //Level 4
   [
    // Iteration 4.1
    {text: "You head east and come to a crossroad.",
     A: "Left",  // --> iteration 5.1
     B: "Right",  // --> iteration 5.2
     Alive: true},
     

    // Iteration 4.2
    {text: "You run as fast as you can and finally outrun them. You come to a crossroad. Which way do you choose? ",
    A: "Left",  // --> iteration 5.1
    B: "Right",  // --> iteration 5.2
     Alive: true}, 

    // Iteration 4.3
    {text: "You fight bravely but you die.",
      A: " ",
      B: " ", 
      Alive: false}, 

  ],
   //Level 5
   [
    // Iteration 5.1
    {text: "You turn left and reach the port. Well done so far! You now the island must be straight ahead of you.",
     A: "I charter a boat and head to the island",  // --> iteration 6.1
     B: "I try to swim across.",  // --> iteration 6.2
     Alive: true},
     

    // Iteration 5.2
    {text: "You turn right and reach the city again. You are lost... Either you head back to the crossroad or try to find a faster way to a port",
    A: "Go back",  // --> iteration 6.3
    B: "Continue",  // --> iteration 6.4
     Alive: true}, 

  ],
     //Level 6
     [
        // Iteration 6.1
        {text: "Congrats! You reach the island. There is a small community, which is happy to have a new member. You live a happy life!",
         A: " ", 
         B: " ",  
         Alive: true},
         
    
        // Iteration 6.2
        {text: "Oh no! You were defintely to confident. You struggle enormesly",
        A: "Call for help and try to pull through",  // --> iteration 7.1
        B: "Try to swim back. Maybe its not to late",  // --> iteration 7.2
         Alive: true}, 

         // Iteration 6.3
        {text: "You turn back  and reach the port eventuelly . Well done so far! You now the island must be straight ahead of you. You find a boat and start your successful jouney to the island. You are safe!",
        A: " ", 
        B: " ", 
         Alive: true}, 

            // Iteration 6.4
        {text: "Oh no! You were defintely to confident. You meet a zombie group and become one of them. Game over",
        A: " ", 
        B: " ", 
         Alive: false }, 
    
      ],

       //Level 7
     [
        // Iteration 7.1
        {text: "Congrats!someone on the island hears your call and rescues you. There is a small community, which is happy to have a new member. You live a happy life!",
         A: " ", 
         B: " ",  
         Alive: true},
         
    
        // Iteration 7.2
        {text: "Well on the shore back you see the zombies already waiting for you. You become one of them",
        A: "",  
        B: "", 
         Alive: false}, 

      ],

];

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
        document.querySelector("#btn-A").value = this.data[ this.iterationX][this.iterationY].A
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
