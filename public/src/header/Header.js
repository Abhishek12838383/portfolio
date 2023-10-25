import React from 'react'
import './Header.css'
import {BiAlbum} from 'react-icons/bi'

function Header() {
  return (
    <div className='header'>
      <div className="h">Hello</div>
      <div className="intro">
        I'm Abhishek Sharma <mark>Front End Developer</mark>
      </div>
      <p>l am skilled and passionate front end developer with a experience of ui/ux design field with making user friendly websites</p>
      <a href='https://drive.google.com/file/d/1lv0jNRFLkYWzl9q8CyZhoFzI37KGBcn-/view?usp=sharing' className="hire">
   My <BiAlbum/>
        Resume</a>
    </div>
  )
}

export default Header
