import React from "react";
import XMods from "./XMods";




const App = () => {
  const styles ={
        display: "grid",
        gridTemplateColumns: "repeat(5,1fr)",
        gridGap: "10px",
        padding: "10px",
  }
  const colorArr = [
    {
      name: 'Tego',
      color: 'red',
      phrase: 'hello'
    },{
      name: 'Way',
      color: 'seagreen',
      phrase: 'hello'
    },{
      name: 'Vron',
      color: 'Salmon',
      phrase: ''

    }
  ]
  const mappedXMods = colorArr.map( (person, i)=> {
    return <XMods title={'XMods'} color={person.color} name={person.name} key = {i} />
  })
  return(
    
    <div style = {styles}>
      <XMods title="XMods" color="black"/>
      <XMods title="XMods" color="darkgreen"   />
      <XMods title="XMods" color="midnightblue"  />
      <XMods title="XMods" color="blue"    />
      <XMods title="XMods" color="purple"   />
      <XMods title="XMods" color="darkred"  />
      <XMods title="XMods" color="salmon"  />
      <XMods title="XMods" color="coral"  />
      <XMods title="XMods" color="teal"   />
      <XMods title="XMods" color="aqua"  />
      {/* {mappedXMods} */}
    </div>
  )
}




export default App;
