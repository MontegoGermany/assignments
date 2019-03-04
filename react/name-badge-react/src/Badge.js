import React from 'react'

// style the form to display a grid setup of repeat(1fr, 2)

const Badge = () => {

    return(
        <div>

            <form className='container'>
                <input className='field' type='text' placeholder='First Name'></input>
                <input className='field' type='text' placeholder='Last Name'></input>
                <input className='field' type='text' placeholder='Email'></input>
                <input className='field' type='text' placeholder='Date of Birth'></input>
                <input className='field' type='text' placeholder='Cell'></input>
                <input className='field' type='text' placeholder='Fav Color'></input>
                <input className='field' type='text' placeholder='Tell us about yourself'></input>
            </form>

            <button onClick >Submit</button>
        
        </div>
    )
}






export default Badge
