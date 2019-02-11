


var readline = require("readline-sync")

// create players
// user
function Champion(){
    this.name = name;
    this.attack = 1000;
    this.hp = 2000;
    this.weapon = [];
    this.item = []
    this.superPowerAttack = 10000
}

//enemy
function Enemy(){
    this.name = name;
    this.hp = 1000;
    this.attack = 500;

}

var playerName = introName;
var enemies = ["fear", "thinking", "anxiety"] 

// greet player
var introName = readline.question("Hello! I am Tron. What is your name? ")

 console.log("Greetings! " + introName + " & Welcome to the Games")

 // create a command to walk then randomaize an encounter from an enemy

 var walkingSequence = readline.keyIn(" What would you like to do?: [w] Walk with me into the Games, [q] Quit the Games, [p] Print Inventory ", {limit:"$<w,q,p>" })


 // create function for action of walking & conditions for options of [w],[q],[p]

 