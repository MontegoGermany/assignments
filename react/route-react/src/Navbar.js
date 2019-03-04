import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='nav'>
            <Link to ='/'></Link>
            <Link to ='/about'></Link>
            <Link to ='/services'></Link>
        </div>
    )
}












export default Navbar   
