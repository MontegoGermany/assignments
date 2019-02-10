

var readline = require("readline-sync");

//Player enters the game
var name = readline.question("state your born name.");


//Greet the player
console.log(" Welcome " + name )

//Player chooses
var intro = readline.question("You must enter the games. Walk with me to the games, but first we must build your champion. [w] Walk, [p] Provide Inventory, [q] Quit Game", {limit: "wpq"}) 


var playerStatus = true;
var playerWins = false;

// loop for playerStatus = dead or alive
// keep playerStatus true while 
while(playerStatus && !playerWins){
    var action = readline.question("What would you like to do? [w] Walk to Character Creation/Choose Character, [p]")
}

//Champion Buildout

function Champ (name){
    this.name = name;
    this.attack = Math.floor(Math.random()*210)+150;
    this.hp = 2000;
    this.items = [];
    this.weaponAttack = Champ.attack * 2;
    this.playerStatus = true;
}
console.log(Champ())


var player = new Champ ("Worlds Greatest")

function Enemy (name, attack, hp){
    this.name = name;
    this.attack = attack;
    this.hp = hp;
    this.weaponAttack = attack * 1.5
}
// console.log(Enemy)

var enemies = [bot1, bot2, creature]

var attack1 = Math.floor(Math.random()*100)+50;
var attack2 = Math.floor(Math.random()*200)+100;
var superAttack = Math.floor(Math.random()*300)+200;
// console.log(attack1, attack2, superAttack)


var bot1 = new Enemy('Neo', attack1, 500)
var bot2 = new Enemy('One Punch Man', attack2, 1500)
var creature = new Enemy('Godzilla', superAttack, 1000)

