import React from 'react';
import { Switch, Route } from 'react-router-dom'
import './App.css'
import Navbar from './shared/Navbar'
// import Footer from './shared/Footer'
import Home from './shared/Home'
import Recipe from './shared/Recipe'
import About from './shared/About'



// I want to route switch 
// I want my Navbar and Footer to remain fixed
// I want switch between Home, Activity, Recipe, & Nutrifacts


const App = () =>  {
  return (
      <div background='recipe.jpeg' >
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/recipe' component={Recipe}/>
          <Route path='/about' component={About}/>
        </Switch>
        {/* <Footer /> */}
      </div>
    )
  
  
}



export default App;
