// 1) Sort an array from smallest number to largest
// function leastToGreatest(arr) {
//     // your code here
//   }
  
//   console.log(leastToGreatest([1, 3, 5, 2, 90, 20])); // [1, 2, 3, 5, 20, 90]

//   var numbers = [1, 3, 5, 2, 90, 20]

//   var newArr = numbers.sort(function(num1, num2){
//       return num1 > num2
//   })
//   console.log(newArr)

//   2) Sort an array from largest number to smallest

// var nArr = numbers.sort(function(a, b){
//         return a < b
// })
//     console.log(nArr)

//  3) Sort an array from shortest string to longest

// var story = ["dog", "wolf", "by", "family", "eaten"]

// var arrStory = story.sort(function(sml, lgl){
//     return sml.length > lgl.length
// })
// console.log(arrStory)

// 4) Sort an array alphabetically

// var story2 = ["dog", "wolf", "by", "family", "eaten"]

// var toyStory = story2.sort(function(wrd1, wrd2){
//     return wrd1 > wrd2
// })
// console.log(toyStory)

// 5) Sort the objects in the array by age

var people =[
    {
        name: "Quiet Samurai",
        age: 22
    },
    {
        name: "Arrogant Ambassador",
        age: 100
    },
    {
        name: "Misunderstood Observer",
        age: 2
    },
    {
        name: "Unlucky Swami",
        age: 77
    }
]

var myArr = people.sort(function(person, x){
    return person.age - x.age
})
console.log(myArr)

//sorted least to greatest