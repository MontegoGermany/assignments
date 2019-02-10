


// let reverseStr = function(str){
//     // step 1. Use the split() method to return a new array
//     var splitString = str.split(""); // var splitString = "hello".split("");
//     //["h","e","l","o"]
    
//     // step 2. Use the reverse() method to reverse the new created array
//     var reverseArray = splitString.reverse(); // var reverseArray = ["h","e","l","l","o"].reverse()
//     //["o","l","l","e","h"]

//     //step 3. Use the join() method to join all elements of the array into a string
//     var joinArray = reverseArray.join(""); // var joinArray = ["o","l","l","e","h"].join("");
//     //"olleh"

//     //step 4. return the reversed string
//     return joinArray; //"olleh"
// }

// console.log(reverseStr("hello")) // logs olleh to the terminal




let isNum = function(str) {

    if (isNaN(+str)){
  
        return false
     }else{
    
        return true
    }
}

console.log(isNum(3))
console.log(isNum("three"))

let isEven = function(num) {
  
}








