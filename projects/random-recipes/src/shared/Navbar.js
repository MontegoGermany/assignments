import React from 'react'
import { Link } from 'react-router-dom'
// import Home from 'Home'
// import Recipe from 'Recipe'



const Navbar = (props) => {
    return (
        <div className='nav'>
            <Link to='/'>Home</Link>
            <Link to='/recipe'>Recipe</Link>
            <Link to='/about'>About</Link>
        </div>
    )
}




export default Navbar