import React, { Component } from 'react';


// created a 
class App extends Component { 
      constructor(){
        super()
        this.state = {
          firsName:'',
          lastName:'',
          stageName:'',
          names:[]

        }
      }

      handleChange = (event) => {
        this.setState({
          [event.target.name]:event.target.value
        })
      }

      handleSubmit = e =>{
        e.preventDefault();
        this.setState((prevState)=>{
          const {firstName, lastName, stageName} = prevState
            return{
              firstName: '',
              lastname:'',
              stageName:'',
              names:[{firstName, lastName, stageName}, ...prevState.names]
            }
        })
      }


      render(){
        const mappedName = this.state.names.map((name, i)=> {
          return <li key={i}>{name.firstName} {name.lastName} {name.stageName}</li>
            
            
          
        })

        return (
          <div>
          <form onSubmit={this.handleSubmit}>
              <input type='text' value={this.state.firstName} name='firstName' placeholder='First Name' onChange={this.handleChange}></input>
              <br/>
              <input type='text' value={this.state.lastName} name='lastName' placeholder='Last Name' onChange={this.handleChange}></input>
              <br/>
              <input type='text' value={this.state.stageName} name='stageName' placeholder='Stage Name' onChange={this.handleChange}></input>
              <h1>{this.state.firstName} {this.state.lastName}</h1>
              <button>Submit</button>
          </form>

              <ul>
                {mappedName}
              </ul>
          </div>
        )
      }
}
 

export default App;