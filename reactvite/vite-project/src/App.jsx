import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import logo from './assets/Logo.jpeg'

import ICard from './components/ICard'
import ICardGallery from './components/ICardGallery'

function App() {

  return (
    <div style={{border:"2px solid blue",width:"800px",height:"auto",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",backgroundColor:"black", textAlign:'center'}}>
      <ICardGallery/>
    </div> 
  )
}

export default App
