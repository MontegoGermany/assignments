// for loop 3 parts
// statement 1 sets a variabble before the for loop starts (var i = 0)
// statement 2 defines the condition for the loop to run (i must be equal to 0)
// statement 3 increases a value (i++) each time the code block in the loop has been executed


// var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"]

// for(var i  = 0; i == officeItems.length; i++) {
//     console.log()
// }

// Loop through the following array and log to the console 
// "old enough" if they are 18 or older, 
// and "not old enough" if they aren't 18.


var peopleWhoWantToSeeMadMaxFuryRoad = [
    {
      name: "Mike",
      age: 12,
      gender: "male"
    },
    {
      name: "Madeline",
      age: 80,
      gender: "female"
    },
    {
      name: "Cheryl",
      age: 22,
      gender: "female"
    },
    {
      name: "Sam",
      age: 30,
      gender: "male"
    },
    {
      name: "Suzy",
      age: 4,
      gender: "female"
    }
  ] 

console.log(peopleWhoWantToSeeMadMaxFuryRoad)


 
  for(var i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++){
    if(peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18){
      console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough to see Max Fury movie")
    }else{
      console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is not old enough to see Mad Max Fury movie")
    }

  }

   
console.log("keep going")




// function furyMovie(array){
 
//   for(var i = 0; i < array.length; i++){
//     if(array[i].age >= 18){
//       console.log(array[i].name + " is old enough to see Max Fury movie")
//     }else{
//       console.log( array[i].name + " is not old enough to see Mad Max Fury movie")
//     }

//   }


// }    
// console.log("keep going")
// console.log(furyMovie(peopleWhoWantToSeeMadMaxFuryRoad))






