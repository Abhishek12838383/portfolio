import React from 'react'
import './Portfolio.css'

function Portfolio() {
  return (
    <section className='portfolio'>
     <div className="heading">My Portfolio</div>
    <p>This is my project section where i have made many websites with html ,css ,js and bootstrap and also made some clones with framwork like Reactjs </p>

    <div className="img-1">
     <a href="https://task-66859.web.app/"> <img src="https://i.pinimg.com/originals/9e/53/b9/9e53b988fcc29aab3101a96df0ae2e46.png" alt="" /> </a>
     <a href="https://responsive-website-e217a.web.app/">  <img src="https://i.ytimg.com/vi/_mojbx4Z7dQ/maxresdefault.jpg" alt="" /> </a>
     <a href="https://fir-19478.web.app/">  <img src="https://media.designrush.com/inspiration_images/136768/conversions/_1524503075_233_Amazon-Website-Design-Homepage-mobile.jpg" alt="" /> </a>
    </div>
    <div className="img-2">
    <a href="https://clone-by-react.web.app/">  <img src="https://helios-i.mashable.com/imagery/articles/06CN9HpdYJ3zWr2vUfYDFBG/hero-image.fill.size_1248x702.v1623387368.png" alt="" /> </a>
    <a href="">  <img src="https://images.musement.com/cover/0001/100/predator-v5-jpg_header-99107.jpeg" alt="" /> </a>
    <a href="">  <img src="https://images.musement.com/cover/0001/100/predator-v5-jpg_header-99107.jpeg" alt="" /> </a>
    </div>
    </section>
  )
}

export default Portfolio
