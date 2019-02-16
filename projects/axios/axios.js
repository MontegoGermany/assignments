// axios.get("https://api.vschool.io/Mark/todo").then(function(res, req) {// get request, need to get data from todo api
// const div = document.getElementById("root"); // grab the div on the index.html and store it the div variable.
// const p = document.createElement("div"); // create a new div and store in the p variable. This div is not on the page yet. It's just in javascript
// p.innerText = res.data[0].title // the p div, add the data in the response in between the tags, so it desplays on the page.
// div.appendChild(p); // add the p div to the div that;s on the page.
// });



// axios.get("https://api.vschool.io/montego/todo/").then(function(res, req){ 
//     const div = document.getElementById("root");
//     const p = document.createElement("div");
//     p.innerText += res.data.map( todo)
//     div.appendChild(p);
// });



axios.get("https://api.vschool.io/montego/todo").then(response =>{
    renderTodos(response.data)
})

// created function for renderTodos for call renderTodos functioncall on line 20

function renderTodos(todos){ // names response.data from line 20 to todos here as a function parameter
    todos.forEach(function(todo){ // the forEach() method was used to loop through todo

        var parent = document.createElement("div");

        parent.className = "todo";
        var text = document.createTextNode(todo.title);
        parent.appendChild(text);

        var input = document.createElement("input")
        input.className="input";
        input.type="checkbox";

        input.addEventListener("click", handledChecked)

        parent.appendChild(input);

        if(todo.completed){
            parent.classList.toggle("strikened");
            input.checked = true;
        }
        
        document.getElementById("todo-list").appendChild(parent)
    })
}

function handleChecked(e){
    console.log("here");
    e.target.parentNode.classList.toggle("strikened");
}


// axios.get("https://api.vschool.io/montego/todo").then(function(response) {
//     response.data.forEach(function(todo){
//         document.getElementById("list").innerHTML += todo.title 
//         // pay attention to the plus equals "+=" to display multiple content at once
//         console.log(todo.title);
//         console.log(todo.description);
//     })
// })9