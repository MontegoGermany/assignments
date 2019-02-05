//// Create a function that takes two strings as arguments and returns the number of times the first string is found in the second string.

// function charCount(myChar, str) {
//     var counter = 0
//      for(i = 0; i < str.length; i++){
//        if(myChar === str[i])
//        counter++
//      }
//        return counter
//     }
    
//     console.log(charCount("a", "edabit")) // 1
//     console.log(charCount("c", "Chamber of secrets")) // 1
//     console.log(charCount("f", "frank and his friends have offered five foxes for sale")) // 7




var ask = require("readline-sync")
// create conditons to ask 3 options
ask.keyInSelect(["Put hand in hole", "Find the key", "Open the door"], "Choose Wisely...")

var isAlive = true
var haveKey = false

while(isAlive === true){
   var index = ask.keyInSelect(["Put hand in hole", "Find the key", "Open the door"], "Choose Wisely...")
  if(index === 0){
      console.log("Wasted")
      isAlive = false
  }else if(index === 1) {
      
      console.log("Search for the key!")
  }else if (index === 2) {
      //condition for if they have the key 
    
      if()
  }

}
