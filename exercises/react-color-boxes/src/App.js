import React from "react";
import XMods from "./XMods";




const App = () => {
  const styles ={
        display: "grid",
        gridTemplateColumns: "repeat(5,1fr)",
        gridGap: "10px",
        padding: "10px",


  }
  
  return(
    
    <div style = {styles}>
      <XMods title="XMods" color="green"  />
      <XMods title="XMods" color="darkgreen"   />
      <XMods title="XMods" color="midnightblue"  />
      <XMods title="XMods" color="blue"    />
      <XMods title="XMods" color="purple"   />
      <XMods title="XMods" color="darkred"  />
      <XMods title="XMods" color="salmon"  />
      <XMods title="XMods" color="coral"  />
      <XMods title="XMods" color="teal"   />
      <XMods title="XMods" color="aqua"  />
    </div>
  )
}




export default App;
