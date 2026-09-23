import React from 'react';
import {useState} from 'react';
function setNameandCollege() {
    const [name,setName]=useState("ABCD");
    const [college,setCollege]=useState("ABESEC");
    function ChangeName(){
        setName("Saloni");
    }
    function ChangeCollege(){
        setCollege("ABES Engineering College Ghaziabad");
    }
  return (
    <div>
              <h2>Name: {name}</h2>
              <h2>College: {college}</h2>
        <button onClick={ChangeName}>Set Name</button>
        <button onClick={ChangeCollege}>Set College</button>
      
    </div>
  )
}

export default setNameandCollege;