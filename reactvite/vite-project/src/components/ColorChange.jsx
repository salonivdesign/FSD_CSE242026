import React from 'react'
import {useState} from 'react'
function ColorChange() {
     const [red,setRed]=useState(0);
        const [green,setGreen]=useState(0);
        const [blue,setBlue]=useState(0);
    function SetRed(){
        setRed(255); setGreen(0); setBlue(0);
    }
    function SetGreen(){
        setRed(0); setGreen(255); setBlue(0);
    }
    function SetBlue(){
        setRed(0); setGreen(0); setBlue(255);
    }
       
  return (
    <div>
        <div style={{border:"2px solid red",backgroundColor:`rgb(${red}, ${green}, ${blue})`, height:"400px", width:"400px"}}>
            
        </div>
        <div>
            <button onClick={SetRed}>Red</button>
        <button onClick={SetGreen}>Green</button>
        <button onClick={SetBlue}>Blue</button>
        </div>
    </div>

    
  )
}

export default ColorChange