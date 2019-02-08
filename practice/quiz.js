function stuff (str){
    var strArr = str.split(" ")
    strArr.splice(4,1, "Montego")
    return strArr.join(" ")
}
console.log(stuff("Hello my name is Albert"))