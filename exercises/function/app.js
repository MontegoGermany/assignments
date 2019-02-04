
//             1
// function myFunct(num1, num2){
    
//     return num1 + num2

// }
// console.log(myFunct(210,210))


//             2
// function newFun(num6,num7,num8){
//     return Math.max(num6,num7,num8)

// }

// console.log(newFun(300,400,1000))


//            3

// function moreFun(numX) {
    
//     if( numX %2 === 0) {
//         return "even"
//     }else{
//         numX %2 === 1 
//         return "odd" 
//     }
// }
// console.log(moreFun(23))

function str(oneThing) {

    if( oneThing.length <= 20){
        return oneThing + oneThing
    }else{
        return oneThing.slice(oneThing.length / 2)
    }

}
console.log(str("steph"))

