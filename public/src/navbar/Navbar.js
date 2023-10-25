import React from 'react'
import './Navbar.css'

function Navbar() {
  return(
      <nav className="navbar">
        <img src="https://static.wixstatic.com/media/478355_45f373005f50447ca1d9191c21d70dc7~mv2.png/v1/fill/w_744,h_744,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/478355_45f373005f50447ca1d9191c21d70dc7~mv2.png" alt="" />
        <div className="nav-menu">
         <ul>
          <li>Home</li>
        <li>About</li>
          <li>Portfolio</li>
          <li>Clients</li>
         </ul>
        </div>
        <button className="nav-contactbtn">
          Contact me
        </button>
      </nav>
  
  )
}

export default Navbar
