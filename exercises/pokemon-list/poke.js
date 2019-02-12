
//ready stage 0,1,2,3,4
// 200 is code for good or meaning ok or passed the test
//


var xhr = new XMLHttpRequest();

xhr.onreadystatechange = function () {
    if(xhr.readyState === 4 && xhr.status === 200){
        var data = JSON.parse(xhr.responseText)
        // document.getElementById("display").innerHTML = "JSON Results:" + xhr.response
        console.log(data.objects[0].pokemon)
        for(var i = 0; i < data.objects[0].pokemon.length; i ++){
            var div = document.createElement("div");
            var text = document.createTextNode(`${data.objects[0].pokemon[i].name}`);
            div.appendChild(text)
            document.body.appendChild(div)
        }
       
    }
};

xhr.open("GET", "https://api.vschool.io/pokemon", true);
xhr.send();