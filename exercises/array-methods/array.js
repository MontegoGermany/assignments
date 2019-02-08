/*
Array Methods Exercise
10 JANUARY 2017
Create a new JavaScript file and put these two arrays at the beginning. You will write a single function that performs many operations on them.

var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

After every command, use console.log() to inspect your arrays. A good way to do that is to do something like:
console.log("fruit: ", fruit);

console.log("vegetables: ", vegetables);
1.Remove the last item from the vegetable array.

2.Remove the first item from the fruit array.

3.Find the index of "orange."

4. Add that number to the end of the fruit array.

5. Use the length property to find the length of the vegetable array.

6.Add that number to the end of the vegetable array.

7.Put the two arrays together into one array. Fruit first. Call the new Array "food".

8.Remove 2 elements from your new array starting at index 4 with one method.

9.Reverse your array.

10.Turn the array into a string and return it.

If you've done everything correctly, the last step should print the following string to the console:

3,pepper,1,watermelon,orange,apple
*/

//.push(argument addd here) adds to the end of the array
//.pop(no argument here) takes away from the end of the array & returns what was removed from the end
//.unshift(arguments here) adds to the front
//.shift(no arguments here) takes away from the front
//.indexOf(1st arg searches element, optional: 2nd arg index you want to search from) example at this site below
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
// .splice(startingIndex, numberToRemove[, itemsToInsert])
// Changes the contents of an array by removing existing elements and/or adding new elements.


var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];
// console.log(fruit + vegetables)
    
    //1
    vegetables.pop()
    console.log("1", vegetables)
    // 2
    fruit.shift()
    console.log("2", fruit)
    //3
    var orange = fruit.indexOf("orange");
    console.log("3", orange)
    //4
    fruit.push(orange)
    console.log("4", fruit) 
    //5
    var veggies = vegetables.length;
    console.log("5", veggies)
    //6
    vegetables.push(veggies)
    console.log("6", vegetables)
    //  7
    //  var food = [fruit.concat(vegetables)]
    // console.log(food)
    // //8
    // food.splice(4,2);
    // console.log(food)
    // //9
    // console.log(food.reverse())
    // //10











