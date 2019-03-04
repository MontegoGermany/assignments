import React, {Component} from 'react'


class Names extends Component{
    constructor(){
    super()
    this.state = {
        firstName:'',
        lastName:'',
        name: []
    }


}


render() {
    return (
        <div>

        <input className='firstName' type='text' name='First Name' placeholder='First Name'></input>
        <br/>
        <input className='lasttName' type='text' name='Last Name' placeholder='Last Name'></input>
        <br/>
        <button className='submit' >Submit</button>
        </div>
    )
}

}





export default Names