

var add1 = document.getElementById("add1")
var add2 = document.getElementById("add2")

var sub1 = document.getElementById("sub1")
var sub2 = document.getElementById("sub2")

var multi1 = document.getElementById("multi1")
var multi2 = document.getElementById("multi2")

var div1 = document.getElementById("div1")
var div2 = document.getElementById("div2")


document.getElementById('Add').addEventListener('click', function(){
    document.getElementById('showAdd').innerHTML = `<p>${+add1.value + +add2.value}</p>`
})

document.getElementById("subtract").addEventListener("click", function(){
    document.getElementById("difference").innerHTML = `<p>${parseInt(sub1.value) - parseInt(sub2.value)}</p>`
})

document.getElementById("multiply").addEventListener("click", function(){
    document.getElementById("product").innerHTML = multi1.value * multi2.value
    
})

document.getElementById("divide").addEventListener("click", function(){
    document.getElementById("quotient").innerHTML = div1.value / div2.value
})

