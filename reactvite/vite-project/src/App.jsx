import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import logo from './assets/Logo.jpeg'
import MyState from './components/MyState'

import ICard from './components/ICard'
import ICardGallery from './components/ICardGallery'
import ColorChange from './components/ColorChange'
import SetNameandCollege from './components/SetNameandCollege'
import ImageManipulation from './components/ImageManipulation'
function App() {

  return (
    <div style={{border:"2px solid blue",width:"800px",height:"600px",display:"flex",justifyContent:"center",backgroundColor:"black", textAlign:'center'}}>
      {/* <ICardGallery/> */}
      {/* <MyState/> */}
      {/* <ColorChange/> */}
      {/* <SetNameandCollege/> */}
      <ImageManipulation/>
    </div> 
  )
}

export default App
