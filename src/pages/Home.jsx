import acciLogo from '../assets/acci-logo.png'
import './Home.css'

function Home() {
  return (
    <>
      <img src={acciLogo} className="acci-logo"/>
      <h1 className="title-style">Acci's Blog</h1>
      <div className="description">
        <h3 className="description-header">She/Her ✦ 23 ✦ Sep 29th ✦ PST</h3>
        <p className="description-text">My cozy corner of the internet where I share my projects, art, and general thoughts on things I like.</p>
      </div>
    </>
  )
}

export default Home