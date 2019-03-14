import React, { Component } from 'react'
// import axios from 'axios'

// I want axios request to grab data for recipes 
// I want an input box and button to submit info for a get request
// I want that info to display in an ouput box
// Optionally I would like the history to display to an Unordered List
// I want button that will link info to Nutrifacts of the recipe


class Recipe extends Component {
    constructor () {
        super ()
        this.state = {
            loading: false,
            recipes: JSON.parse(localStorage.getItem('recipes'))
        }
    }

    // componentDidMount () {
        // axios.get(`https://www.food2fork.com/api/search?key=fd9669f8c1723bc6c61faa585e3a903c`)
        // .then(response => {
        //     localStorage.setItem('recipes', JSON.stringify(response.data.recipes))
        //     console.log(response)
        //     this.setState({recipes:response.data.recipes})
        // })
        // this.setState({oading: true})
        // fetch('https://www.food2fork.com/api/search?key=d079c56982fed6952ece42c5092de7e6&q=chicken%20breast&page=2')
        // .then(response => response.json())
        // .then(data => {
        //     this.setState({
        //         loading: false,
        //         recipes: data
        //     })
        // })
    // }
// I want an input box to type in the data you would like to request
// I want a submit button to do a get request for the data
// I want the data from the request to appear in an outputbox

    render() {
        console.log(this.state)
        const mappedRecipes = this.state.recipes.map((recipe, i )=> <li><a  href={this.state.recipes[i].source_url}>{recipe.title} </a></li> )
        const text = this.state.loading ? <h1>loading...</h1> : <ul>{mappedRecipes}</ul>
        return (
            <div>
                <input type='text'></input>
                <button type='submit'>Search</button>
                {text}
                {this.state.recipes.recipe}
            </div>
        )
    }
}



export default Recipe


