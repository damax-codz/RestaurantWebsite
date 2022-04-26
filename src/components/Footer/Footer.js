import {Link} from 'react-router-dom';
import './Footer.css'

import facebook from '../../images/logo-facebook.svg'
import instagram from '../../images/logo-instagram.svg'
import twitter from '../../images/logo-twitter.svg'
import message from '../../images/mail-outline.svg'

function Footer() {
  return (
    <footer>
      <div class="footer__container">
        <div class="socials">
          <a href="#" class="logo">Afrikan Pot</a>
          <div class="footer__social-links">
            <a href="#">
              <img src={facebook} alt="facebook" />
            </a>
            <a href="#">
              <img src={instagram} alt="instagram" />
            </a>
            <a href="#">
              <img src={twitter} alt="twitter" />
            </a>
          </div>
        </div>
        <div class="footer__support-links">
          <ul>
            <li>Support</li>
            <li>
              <Link to="/contact" >Contact Us</Link>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
            <li>
              <a href="#">Logistics</a>
            </li>
            <li>
              <a href="#">Customer Care</a>
            </li>
          </ul>
        </div>
        <div class="footer__company">
          <ul>
            <li>Afrikan Pot</li>
            <li>
            <Link to="/">Home</Link>
            </li>
            <li>
            <Link to="/about">About</Link>
            </li>
            <li>
            <Link to="/products">Products</Link>
            </li>
            <li>
              <a href="#">Newsroom</a>
            </li>
          </ul>
        </div>
        <div class="footer__newsletter">
          <div>
            <img src={message} alt="message" />
            <p>Stay up to date on the latest from Afrikan Pot</p>
          </div>
          <form action="" class="footer__form">
            <input type="text" placeholder="Enter your e-mail address" />
            <button>Sign Up</button>
          </form>
        </div>
      </div>
    </footer>
  )
}

export default Footer