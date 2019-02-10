var {sum} = require("./app")


    test("adds 1 + 2 to equal 3", function(){
        expect(sum(1,2)).toBe(3)
        expect(sum(2,1)).toBe(3)
    })

function sum(a, b){
    return +a + +b }
 module.exports.sum = sum
