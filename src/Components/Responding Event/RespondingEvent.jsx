import './RespondingEvent.css';
import { useState } from 'react';
const colorList = ["#FF5733","#2980B9","#5B2C6F","#D4AC0D"]

function RespondingEvent(){
    const [currentValue, setCurrentValue]= useState("");

    function handleChange(){
        const element = document.querySelector('.colorBox');
        let colorValue = Math.floor(Math.random()*colorList.length); 
        setCurrentValue(colorList[colorValue])               
        element.style.backgroundColor = currentValue
    }

    return(
        <>
        <h1>Responding Event</h1>
        <div className="colorBox"></div>
        <button onClick={handleChange}>Change Color</button>
        </>
    )
}

export default RespondingEvent