import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../Button/button'
import './home.css'
import bike from '../../images/fast-delivery.png'
import food from '../../images/food.png'
import shake from '../../images/handshake.png'



function Home() {
  return (
      <>
    <div className='container'>
    
    <section className='writeup'>
    <h1>Hasty and tasty!</h1>
    <h3>“We welcome your appetite. satisfy your stomach with our Naija delicacies.</h3>
    <Link to='/products'><Button name='Order now' color='white' bg='rgb(201, 28, 28)' /></Link>
    </section>

    <section className='imag'>
    <img src='https://c4.wallpaperflare.com/wallpaper/110/296/976/chicken-grilled-vegetables-potatoes-wallpaper-preview.jpg' alt='food'></img>
    </section>
    </div>

    <div className='featurescontainer'>
        
    <section className='head'>
    <h3>OUR CORE FEATURES</h3>
    <hr></hr>
    </section>

    <section className='features'> 
    <div className='box'>
    <div className='icons'>
    <img src={bike} alt='food'></img>
    </div>
    <h4>WE DELIVER ANYWHERE </h4>
    <p> Our services are not limited to any place around the globe</p>
        
    </div>
    <div className='box'>
    <div className='icons'>
    <img src={food} alt='food'></img>
    </div>
    <h4>WE'VE GOT THE BEST DISHES </h4>
    <p> from the hands of professionals comes our marvelous dishes</p>
        
    </div>
    <div className='box'>
    <div className='icons'>
    <img src={shake} alt='hand'></img>
    </div>
    <h4> WE ARE RELIABLE </h4>
    <p> order your food and in matter of seconds we are at your door step </p>
        
    </div>

    </section>
  
    </div>
      </>
  )
}

export default Home