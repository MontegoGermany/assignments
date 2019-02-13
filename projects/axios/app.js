


axios.get("https://api.vschool.io/montego/todo").then(function(response){
    // console.log(response.data)
    for(var i = 0; i < response.data.length; i ++){
        
           
            if(response.data.completed === true){
            
            document.getElementById("axios").innerHTML += response.data[i].title.strike()
        }else{
            document.getElementById("axios").innerHTML += response.data[i].title + " "

          }

        console.log(response.data)
    }
  
})
