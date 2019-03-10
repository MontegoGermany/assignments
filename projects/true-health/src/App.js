import React, { Component } from 'react';
import './App.css';
import Navbar from './shared/Navbar'
import Footer from './shared/Footer'


// I want to route switch 
// I want my Navbar and Footer to remain fixed
// I want switch between Home, Activity, Recipe, & Nutrifacts


class App extends Component {
  constructor(){
    super()

  }

  render() {
    return (
      <div>
        <Navbar />
        <Footer />
      </div>
    )
  }
  
}



export default App;
