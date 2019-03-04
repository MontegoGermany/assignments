import React from "react";


const XMods = (props) => {
    const styles = {
        color: "white",
        backgroundColor: props.color,
        fontSize: "50px",
        border: "goldenrod solid 10px",
        title: props.title,
        info: props.info,
        // display: "grid",
        // gridTemplateColumns: "repeat(10,1fr)",
        // alignContent: "center",
        // padding: "50px",
        
    }
    return(
        <div style = {styles}>
            <h1>{props.title}</h1>
            <p>  My suit is {props.color}, & my aura is glowing {props.color}, I have {props.color} powers
                </p>

        </div>
    )
}

export default XMods;
