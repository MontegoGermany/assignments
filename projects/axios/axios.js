// axios.get("https://api.vschool.io/Mark/todo").then(function(res, req) {// get request, need to get data from todo api
// const div = document.getElementById("root"); // grab the div on the index.html and store it the div variable.
// const p = document.createElement("div"); // create a new div and store in the p variable. This div is not on the page yet. It's just in javascript
// p.innerText = res.data[0].title // the p div, add the data in the response in between the tags, so it desplays on the page.
// div.appendChild(p); // add the p div to the div that;s on the page.
// });



axios.get("https://api.vschool.io/montego/todo/").then(function(res, req){ 
    const div = document.getElementById("root");
    const p = document.createElement("div");
    p.innerText += res.data.map( todo)
    div.appendChild(p);
});



axios.get("https://api.vschool.io/montego/todo").then(response =>{
    renderTodos(response.data)
})

function renderTodos(todos){
    todos.forEach(function(todos){
        var parent = document.createElement("div");
        parent.className = "todo";
        var input = document.createElement("input")
        input.className="input";
        input.type="checkbox";

        input.addEventListener("click", handledChecked)
        parent.appendChild(input);
        addStrikeThrough(parent, todo.completed, input)
        document.getElementById("todo-list").appendChild(parent);
    })
}



axios.get("https://api.vschool.io/montego/todo").then(function(response) {
    response.data.forEach(function(todo){
        document.getElementById("list").innerHTML += todo.title 
        // pay attention to the plus equals "+=" to display multiple content at once
        console.log(todo.title);
        console.log(todo.description);
    })
})