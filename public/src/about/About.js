import React from 'react'
import './About.css'

function About() {
  return (
   <section className="about">
    <div className="heading">What I Do</div>
    <p>I have three internships experience in various field such as interface designer ,product designer , and UI/UX designer. after that i switch to front end developement where i have projects experience i have made many projects in react js and also made clones  </p>
    <div className="about-info-1">
      <div className="img">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFCvYRA7Mx_EV_dFaNakVpap-HnuX1pHy0vg&usqp=CAU" alt="" />
      </div>
      <div className="title">
        Front End Development <br />
      <h4>  In front end i have project experience </h4>
      </div>

    </div>
    <div className="about-info-2">
      <div className="img">
        <img src="https://www.chitkara.edu.in/blogs/wp-content/uploads/2022/06/ux-vs-ui.jpg" alt="" />
      </div>
      <div className="title">
        UI/UX Design <br />
       <h4> In UI/UX design i have three internships experience as various roles</h4>
      </div>

    </div>
  
   </section>
  )
}

export default About
