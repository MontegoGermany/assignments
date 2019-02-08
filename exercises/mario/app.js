
// Total Price for each baddie = total caught * baddie price
//how can I refer to each baddie and refer to the correct input?
//Whatever is put in caught input will determine the 
//total price of the baddie

//sumOfBaddie === TotalPrice
//value of caught * total price
var gomCoin = 5;
var bombCoin= 7;
var cheepCoin= 11;


var goomba = document.getElementById("TotalGoombas")
var bombomb = document.getElementById("TotalBombs")
var cheepCheep = document.getElementById("TotalCheeps")


goomba.oninput = function(){
    var gomCaught = document.getElementById("TotalGoombas").value;
    var total= gomCaught * gomCoin;
    document.getElementById("goombaPrice").innerHTML = total;
}

bombomb.oninput = function(){
    var bombCaught = document.getElementById("TotalBombs").value;
    var total = bombCaught * bombCoin;
    document.getElementById("bombombPrice").innerHTML = total
}

cheepCheep.oninput = function(){
    var cheepCaught = document.getElementById("TotalCheeps").value;
    var total = cheepCaught * cheepCoin;
    document.getElementById("cheepPrice").innerHTML = total;
}

window.oninput = function(){
   var gom = document.getElementById("goombaPrice").innerHTML
    var bom = document.getElementById("bombombPrice").innerHTML
    var cheep = document.getElementById("cheepPrice").innerHTML
    var peachPays = +gom + +bom + +cheep;
    document.getElementById("peachPays").innerHTML = peachPays
    
}