import React, { Component } from 'react'
// import {Link} from 'react-router-dom'



class Home extends Component {
    constructor(){
        super() 
        this.state = {}
    }

        render() {
            return (
                 <div className='home'>  
                 <h1 className='header'> Random Recipe </h1>
                 <img src='/Users/student/dev/assignments/projects/random-recipes/src/shared/recipe.jpeg' alt='Recipe'/>
                 {/* <button {<Link to='./Recipe'></Link>}> Recipe </button> */}
                 </div>
        )
    }

}










export default Home