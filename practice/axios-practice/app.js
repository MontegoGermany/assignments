// axios.request(url).then(function(){

// })

axios.get("https://api.vschool.io/montego/todo").then(function(response){
    displayTodos(response.data)
})

function displayTodos (todos){
    todos.forEach(function(todo){
        // document.getElementById('todos').innerHTML += 
        // `<div class="todo">
        //     <h1>Title: ${todo.title}</h1>
        //     <p>Description: ${todo.description}</p>
        //     <img src="${todo.imgUrl}" />
        //     <p>Price: ${todo.price}</p>
        //     <span>completed: ${todo.completed}</span>
        // </div>`

        var outerDiv = document.createElement('div')
        outerDiv.className = "todo"
        var title = document.createElement('h1')
        title.innerText = `Title: ${todo.title}`
        outerDiv.appendChild(title)
        var description = document.createElement('p')
        description.innerText = `Description: ${todo.description}`
        outerDiv.appendChild(description)
        var img = document.createElement('img')
        img.src = `${todo.imgUrl}`
        outerDiv.appendChild(img)
       
        var checkBox = document.createElement("input")
        checkBox.type = 'checked'
        form.appendChild(checkBox)

        
        document.getElementById('todos').appendChild(outerDiv)
        console.log(outerDiv)
        
    }
    )}

    
    axios.post("https://api.vschool.io/montego/todo", newObject).then(function(response){
        console.log(response.data)

        // create input boxes for user to post user data to data array
       
        document.form.addEventListener("submit", function(e){
e.preventDefault();
    })

})

// var newObject = {
//     title: 'buy milk',
//     description: 'good milk',
//     price: 2,
//     imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Milk_glass.jpg/220px-Milk_glass.jpg",
//     completed: false
// }
// axios.post("https://api.vschool.io/montego/todo",newObject).then(function(response){
//     console.log(response.data)
// })

// var updatedObject = {
//     title: 'new title',
//     completed: true
// }

// axios.put("https://api.vschool.io/montego/todo/5c61c4f4f98bcf721950ba5d", updatedObject ).then(function(response){
//     console.log(response.data)
// })

// axios.delete("https://api.vschool.io/montego/todo/5c61c4f4f98bcf721950ba5d").then(function(response){
//     console.log(response.data)
// })