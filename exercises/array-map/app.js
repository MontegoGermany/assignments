// 1) Make an array of numbers that are doubles of the first array
// function doubleNumbers(arr){

// }

// doubleNumbers([2, 5, 100]); // [4, 10, 200]

//     1.
// var doubleNums = [2,5,100]
// var newArr = doubleNums.map(function(nums){
//     return nums * 2
// })
// console.log(newArr)


// 2) Take an array of numbers and make them strings
// function stringItUp(arr){

// }

// stringItUp([2, 5, 100]); // ["2", "5", "100"]

// var nums = [2, 5, 100]
// var newNums = nums.map(function(num1){
//     return num1.toString()
// })
// console.log(newNums)

//3) Capitalize each of an array of names
// function capitalizeNames(arr){

// }

// capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"]); 
// ["John", "Jacob", "Jingleheimer", "Schmidt"]

// var names = ["john", "JACOB", "jinGleHeimer", "schmidt"]

// var newName = names.map(function(change){
//     return change.slice(0,1).toUpperCase() + change.slice(1,change.length).toLowerCase()
// })
//  console.log(newName)


// 4) Make an array of strings of the names

// function namesOnly(arr){

// }

// namesOnly([
//     {
//         name: "Angelina Jolie",
//         age: 80
//     },
//     {
//         name: "Eric Jones",
//         age: 2
//     },
//     {
//         name: "Paris Hilton",
//         age: 5
//     },
//     {
//         name: "Kayne West",
//         age: 16
//     },
//     {
//         name: "Bob Ziroll",
//         age: 100
//     }
// ]) 
// ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]


// var names =[
   
//     {
//             name: "Angelina Jolie",
//             age: 80
//     },
//     { 
//             name: "Eric Jones",
//             age: 2
//     },
//     {
//             name: "Paris Hilton",
//             age: 5
//     },
//     {
//             name: "Kayne West",
//             age: 16
//     },
//     {
//             name: "Bob Ziroll",
//             age: 100
//     }
// ]

// var newArr = names.map(function(myArr){
//     return myArr.name
// })
// console.log(newArr)


// 5) Make an array of strings of the names saying whether 
// or not they can go to The Matrix

// var people =[
//     {
//         name: "Angelina Jolie",
//         age: 80
//     },
//     {
//         name: "Eric Jones",
//         age: 2
//     },
//     {
//         name: "Paris Hilton",
//         age: 5
//     },
//     {
//         name: "Kayne West",
//         age: 16
//     },
//     {
//         name: "Bob Ziroll",
//         age: 100
//     }
// ] 

// var newArr = people.map(function(person){
    
//     if(person.age > 18){
//        return person.name+ " can go to the Matrix";
//     } else {
//         return person.name + " is under age"
//     }

// })

// console.log(newArr)

// ["Angelina Jolie can go to The Matrix", 
// "Eric Jones is under age!!", 
// "Paris Hilton is under age!!", 
// "Kayne West is under age!!", 
// "Bob Ziroll can go to The Matrix"]

// 6) Make an array of the names in h1s, and the ages in h2s

var squad = [
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
] 

var newHead = squad.map(function(person){
    return`<h1>${person.name}</h1><h2>${person.age}</h2>`
})
console.log(newHead)
// ["<h1>Angelina Jolie</h1><h2>80</h2>", 
// "<h1>Eric Jones</h1><h2>2</h2>", 
// "<h1>Paris Hilton</h1><h2>5</h2>", 
// "<h1>Kayne West</h1><h2>16</h2>", 
// "<h1>Bob Ziroll</h1><h2>100</h2>"]
