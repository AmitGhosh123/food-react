import React from 'react'
import { Link } from 'react-router-dom'
import BannerImage from "../assets/pizza.jpeg"
import "./Home.css";

const Home = () => {
  return (
    <div className='home' style={{backgroundImage:`url(${BannerImage})`}}>
      <div className='headerContainer' >
        <h1>Arati's  kitchenette</h1>
        <p>Where every flavor tells a story.</p>
        <Link to="/menu">
          <button>Let's Eat</button>
        </Link>
      </div>
    </div>
  )
}

export default Home