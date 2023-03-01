import { useState } from 'react'
import reactLogo from './assets/mainlogo.png'
import './App.css'

function App() {

 
  return (
    <div className="App">
      <div>
        
        <a href="https://www.tyflannagan.tech/" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>SoundSpace</h1>
      <div className="card">
        <button onClick={ () => { console.log("hello")}}>
          Enter 
        </button>
        <p>
          Enter to join others and share your sounds!
        </p>
      </div>
      <p className="read-the-docs">
        Click on the logo to learn more
      </p>
    </div>
  )
}

export default App
