
import React, {Component} from 'react'
import './App.css'
import Navbar from './shared/Navbar.js'
import Footer from './shared/Footer.js'



class App extends Component{
    constructor(){
        super() 
        this.styles = styles
            
        
    }

    render(){
        return(
            <div>
                <Navbar />
                <Footer />
            </div>
        )
    }
}


export default App
