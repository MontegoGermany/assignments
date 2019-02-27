import React, {Component} from 'react'
import './App'

class App extends Component {
    constructor(){
        super()
        this.state = {
            box1: "white",
            box2: "white",
            box3: "white",
            box4: "white"

        }
    }

    changeBlack = () => {
        this.setState((prevState)=>{
            return {
                color: prevState.color // change prevState to color black onClick
            }
        })
    }

    render() {
        return(
            <div class='beatPad'>
                <div>First box</div>
                <div>Second box</div>
                <div>Third box</div>
                <div>Fourth box</div>
            </div>
        )
    }



}







export default App