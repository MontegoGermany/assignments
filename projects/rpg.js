var user = new Champion(name);
var enemies = [villian1, villian2, villian3]
var villian1 = new Enemy("Neo", 2)
var villian2 = new Enemy("OnePunchMan", 5)
var villian3 = new Enemy("Godzilla", 8)


var readline = require("readline-sync");

var imAlive = true;
var youveWon = false;

// create players
// user
function Champion(name){
    this.name = name;
    this.attack = 1000;
    this.hp = 2000;
    this.weapon = [];
    this.item = [];
    this.superPowerAttack = 10000;
    this.playerStatus = true;
}

//enemy
function Enemy(name, lvl){
    this.name = name;
    this.hp = 1000 * lvl;
    this.attack = 1000 * lvl;
    this.lvl = lvl;

}

// greet player
var name = readline.question("Hello! I am Tron. What is your name? ");

 console.log("Greetings! " + user + ", & Welcome to the Games");

 // create function for action of walking & conditions for options of [w],[q],[p]
 //loop 
 
 while(imAlive && !youveWon){
    var introGame = readline.keyIn(" What would you like to do?: [w] Walk with me into the Games, [q] Quit the Games, [p] Print Inventory ", {limit:"wqp" })
     if(introGame === "w"){
         console.log("Lets take a walk, this is an exciting to be a part of The Games. Theres a plethora of new features and contestants that will be fun to see.")
            walk()
     }

 }


 // creating random scenarios during the walking sequence for enemy encounter(fight1) to happen 1:3 times
 function walk(){
     var walkingSequence = Math.floor(Math.random()*3)
     if(walkingSequence === 1){
            scene1()

     }else{
         console.log("The Games is a place of Extraordinary Performances, I've been obsessed since I was created and beared witness to its marvels!")
     }


}

function scene1(){
    console.log(" We're walking to the games")
    var fight = readline.keyIn("A random enemy has impeded our path and seems to be looking for a fight, what would you like to do [j] Jump-to-The-Games or [f] Fight and practice a little, The Games are highly competitive?", {limit:"jf"})
    if(fight === "f"){
        // var enemy == 
        var enemy = enemySelect()
        console.log("enemy:",enemy)
        while(enemy.hp > 0 && user.hp > 0){
            fight(enemy)
        }
        if(enemy.hp <= 0){
            console.log("you've won the sparring match, lets continue to The Games")
        // when the enemy dies push an array of a sword object to the users inventory  

        }else if(user.hp <= 0){
            console.log("You lost and are deemed unfit for The Games")
            imAlive = false;
        }
    }else{ fight === "j";
        jump()
        
    }
}

// fight function created
function fight(enemy){
    var enemyRandom = Math.floor(Math.random()*4)
    if(enemyRandom === 1){
        miss()
    }else{
        user.hp -= enemy.attack
        enemy.hp -= player.attack
        console.log(`${user.hp}`)
        console.log(`${enemy.hp}`)
    }
}

function enemySelect(){
    var enemiesRandom = Math.floor(Math.random()*enemies.length)
    console.log(enemiesRandom)
    return enemies[enemiesRandom]
}


function miss(){
    console.log("missed hit")
}