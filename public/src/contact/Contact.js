import React from 'react'
import './Contact.css'

function Contact() {
  return (
    <section className='contact'>
           <div className="heading">Contact Me</div>
    <p>Please fill out the form below to contact with me</p>
    <div className="input">
      <input type="text" placeholder='Your Name' className="name" /> <br />
      <input type="text" placeholder='Your Email' className="em" /> <br />
   <input type="text" placeholder='Your Message' className="in" />
    </div>
    <button className="submit">
      Submit
    </button>
    <div className="s">
     <a href="https://www.linkedin.com/in/abhishek-sharma-5026641ba/"><img src="https://pbs.twimg.com/profile_images/1661161645857710081/6WtDIesg_400x400.png" alt="" /> </a>
     <a href="https://github.com/Abhishek12838383"><img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="" /> </a> 
     <a href="https://www.facebook.com/profile.php?id=100006567513375">  <img src="https://play-lh.googleusercontent.com/U202Yto9o6IT1ZA8bgigA5q4nIzvu0S9ztl2d0WQSj6Iw0hIw5W7SIAnH0U2-Kk3nao" alt="" /> </a> 
    </div>
    </section>
  )
}

export default Contact
