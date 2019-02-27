import React, {Component} from 'react';

class App extends Component { // extends means for the class to inherit the props of the component
    constructor(){ // class is simply a constructor function that must use the keyword method super()
        super()
        console.log(this)
        this.state = {
            counter: 3
        }
        // this.add = this.add.bind(this)
        // the satement above is used in a regular function to bind (this) to refer to the parent function
        //=> functions behavior causes the function to refer to the parent function
    }

    add = () => {
        this.setState((prevState) => {
            return {
                counter: prevState.counter + 1
            }
        })
    }

    subtract = () => {
        this.setState((prevState) => {
            return {
                counter: prevState.counter - 1
            }
        })
    }

    render() {
        return(

            <div>
            Hello
            <h1> Counter: {this.state.counter}</h1>
            <button onClick={this.add}>+</button>
            <button onCklick={this.subtract}>-</button>
        </div>
            )
    }

}












export default App;