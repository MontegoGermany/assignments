// everything in react is being compiled to a plain javascript version of itself
// which is why we import react from reac because 

import React from "react"; // the react library will enable jsx to render in react
import ReactDOM from "react-dom";


//JSX is javascript rendention/version of html with slight differences
ReactDOM.render( <h1> Hello World!</h1>, document.getElementById("root"))

// to use 2 jsx elements adjacently you must wrap them in an element
/*
ReactDOM.render(<div> <h1> Hello World!</h1> <p>This is my paragraph</p> </div>, document.getElementById("root"))
*/