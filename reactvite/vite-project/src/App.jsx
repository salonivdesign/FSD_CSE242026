import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import logo from './assets/Logo.jpeg'

import ICard from './components/ICard'

function App() {

  return (
    <>
    <div style={{border:"2px solid blue",width:"800px",height:"800px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",backgroundColor:"black", textAlign:'center'}}>
            <h1 style={{fontFamily:'Arial',color:'white'}}>Abes Engineering College</h1>
            <img src={logo} alt="Abes image" style={{width:"300px",height:"200px"}}/>
            <h2 style={{color:'white'}}>Roll no. : 24003200100965</h2>
            <h2 style={{color:'white'}}>Name : Saloni Verma</h2>
            <h2 style={{color:'white'}}> Branch:Computer Science and Engineering</h2>
            <h2 style={{color:'white'}}>Section : CSE 24</h2>
            <h2 style={{color:'white'}}>Skills : Html, CSS, JavaScript, Data Structures in Python </h2>
    </div> 
    </>
  )
}

export default App
