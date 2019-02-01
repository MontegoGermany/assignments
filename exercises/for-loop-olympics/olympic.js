


//Preliminaries


// 1
// for( var i = 0; i < 10; i ++){
//     console.log(i)
// }

//          2.1
// for(var i = num.length - 1; i > 0; i--){
//     console.log(num[i])
// }
            2.2
// for(var i = 9; i >= 0; i --){
//     console.log(i)
// }

//              3
// var fruit = ["banana", "orange", "apple", "kiwi"]

// for(var i = 0; i < fruit.length; i++){
//     console.log(fruit[i])
// }


//              Bronze medal



           //  1
// var num1 = []

// for(var i = 0; i <= 9; i ++){
    
//     num1.push(i)
// }
// console.log(num1)


//             2 
// for(i = 0; i <= 100; i++){
//     if(i % 2 === 1){
//         console.log(i);
//     }
// }


//           3   
// var fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]
// var trashIt = []

// for(i = 0; i < fruit.length; i++){
//     // console.log(fruit[i])
//     if(i % 2 === 1){
//         trashIt.push(fruit[i])
//     }
// }
//  console.log(trashIt)



//             Silver Medal



//                 1

// var peopleArray = [
//     {
//       name: "Harrison Ford",
//       occupation: "Actor"
//     },
//     {
//       name: "Justin Bieber",
//       occupation: "Singer"
//     },
//     {
//       name: "Vladimir Putin",
//       occupation: "Politician"
//     },
//     {
//       name: "Oprah",
//       occupation: "Entertainer"
//     }
//   ]

//   for(i = 0; i < peopleArray.length; i ++) {
//     console.log(peopleArray[i].name)
//   }


//                2  & 3


// var peopleArray = [
//     {
//       name: "Harrison Ford",
//       occupation: "Actor"
//     },
//     {
//       name: "Justin Bieber",
//       occupation: "Singer"
//     },
//     {
//       name: "Vladimir Putin",
//       occupation: "Politician"
//     },
//     {
//       name: "Oprah",
//       occupation: "Entertainer"
//     }
//   ]

// var occupations = []
// var names = []
//   for(i = 0; i < peopleArray.length; i ++){
     //               2
    //   names.push(peopleArray[i].name)
    //          
    //                3
    //   occupations.push(peopleArray[i].occupation)
    //   }
    //          2
    //   console.log(names)

    //           3
    //   console.log(occupations)

// console




//                  Gold


//              1

var gld = []


// for(var i = 0; i < 3; i ++){
//     gld.push([])
//     for (var a = 0; a < 3; a ++){
//         gld[i].push(0)
//     }
// }
// console.log(gld)

//            2

// for(var i = 0; i < 3; i ++){
//     gld.push([i, i, i])
    
// }

// console.log(gld)

//          3

for(var i = 0; i < 3; i ++){
    gld.push([])
    for(var a = 0; a < 3; a ++){
        gld[i].push('x')
    }
}
console.log(gld)