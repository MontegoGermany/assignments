//higher order functions
//method- a built-in function that is part of an pbject
// a method is always tied on to something by a dot "."
//forEach
// Array.forEach(function)
//runs a function as its parameter
// every higher order is going take an anonynous function

// var numbers =[1,2,3,4,5,6]
// numbers.forEach(function(number){
//     console.log(number + 4)
// })

//Map

// var numbers =[1,2,3,4,5,6]
// var newArr = numbers.map(function(number){
//     return number * 2
// })
// console.log(newArr)


// Filter
// var numbers = [12, 9, 143, 84, 4]

// var newArr = numbers.filter(function(number){
//     return number < 80 
// })
// console.log(newArr)

// //Find
var numbers = [ 12,30,5,62,18,53]

var foundNum = numbers.find(function(number){
    return number > 20
})

console.log(foundNum)



// map- returns the changed item in an array
//filter- returns an array with every item that meets the condition of the boolean in return
//find- returns/finds 1 item based on the return condittion
//findIndex- returns the itmes index in the object
//every & some both returns a boolean (every-means every item must meet the condition to be true else will return false)
//sort- takes 2 arguments separated by a "," & sorts the items by the condition set in return and returns it in an [array]
//reduce- takes 2 arugments(start(index),current(index)) shows you the number before and what is has become
// reduce- shows you progressive steps of accumulation of anything
