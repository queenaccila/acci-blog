import acciLogo from './assets/acci-logo.png'
import './App.css'
import Navbar from './global-components/Navbar'

function App() {
  return (
    <>
      <Navbar />
      <img src={acciLogo} className="acci-logo"/>
      <h1 className="title-style">Acci</h1>
    </>
  )
}

export default App
