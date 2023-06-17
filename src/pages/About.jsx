import React from 'react'
import "./About.css"
import Coffee from "../assets/coffee.jpg"

const About = () => {
  return (
    <div className='about'>
        <div className="aboutTop"
        style={{backgroundImage : `url(${Coffee})`}}
        >

        </div>
        <div className="aboutBottom">
            <h1>ABOUT US</h1>
            <p> Welcome to our homemade food business! We are a passionate team of culinary enthusiasts dedicated to bringing you delicious homemade meals made with love and care. Our journey began with a simple idea – to share the joy of homemade food with our community.

At our food business, we believe in the power of homemade meals to nourish not only the body but also the soul. We understand the importance of using fresh, high-quality ingredients sourced from local farmers and suppliers. Our skilled chefs pour their expertise and creativity into every dish, ensuring a burst of flavors and a memorable dining experience for our customers.</p>
<p>
We take pride in the authenticity and uniqueness of our homemade recipes. Whether it's a comforting bowl of soup, a hearty main course, or a decadent dessert, each dish is thoughtfully crafted to deliver homemade goodness right to your doorstep. We are committed to upholding the highest standards of hygiene and food safety, guaranteeing that every meal is prepared in a clean and controlled environment.

Our food business aims to foster a sense of community and connection through food. We value the relationships we build with our customers and strive to create a warm and welcoming atmosphere. Your satisfaction is our top priority, and we are always open to feedback and suggestions to continuously improve our offerings.
        </p></div>
    </div>
  )
}

export default About