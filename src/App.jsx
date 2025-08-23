import { useState } from 'react'
import acciLogo from './assets/acci-logo.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <img src={acciLogo} className="acci-logo"/>
      <h1>Vite + React</h1>
      <div className="card">
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
    </>
  )
}

export default App
