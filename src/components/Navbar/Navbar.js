import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../Button/button'
import './Navbar.css'






function Navbar() {
   
    function dropDown(){
        document.querySelector('.dropdown').style.display='flex'
        document.querySelector('.cover').style.width='60%'
        document.body.style.overflowY='hidden'
    }
    function dropUp(){
        document.querySelector('.dropdown').style.display='none'
        document.querySelector('.cover').style.width='0%'
        document.body.style.overflowY='scroll'

    }
 
  return (
      <>
    <div className='dropdown' > 
    <div className='cover' >
        <div>
        <div className='cancel' onClick={dropUp}><img src='images.png' alt='cancel' /></div>
        <ul>
         <Link to='/'><li>Home</li></Link> 
         <hr></hr>
         <Link to='/about'><li>About</li></Link>
         <hr></hr>
         <Link to='/contact'><li>Contact</li></Link>
         <hr></hr>
         <Link to='/products'><li>Products</li>  </Link>
         <hr></hr>
     </ul>
        </div>
        <div className='shorts'><span>FAQ</span>  |  <span>info</span>  |  <span>map</span>  |  </div>

    </div>
    </div>

    <div className='navbar'>
     <h3>logo</h3>
     <div className='links'>

     <ul>
         <Link to='/'><li>Home</li></Link> 
         <Link to='/about'><li>About</li></Link>
         <Link to='/contact'><li>Contact</li></Link>
         <Link to='/products'><li><Button name='Products' color='rgb(201, 28, 28)' bg='white' /></li>  </Link>
     </ul>
     </div>
        <div className='menubutton' onClick={dropDown}> <img src='menu.png' alt='menu' />  </div>
    </div>
   </>
  )
}

export default Navbar