import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Main from "./components/Main"
import Navbar from "./components/Navbar"

export default function App() {
  const [darkMode, setdarkMode] = useState(false)

  function handleToggle() {
    console.log("toggled")
    setdarkMode(prevdarkMode => !darkMode)
  }
  console.log(darkMode)

  return (
    <div className="App">
      <Navbar darkMode={darkMode} toggleDarkMode={handleToggle}/>
      <Main darkMode={darkMode}/>
    </div>
  )
}


