import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">

        <div className="footer-content-left">
            <img src={assets.logo} alt="" className='logo'/>
             <p className='address'>42 Church Street, Wolverton MK 12 5JN Milton Keynes</p>
             <p className='phone-number'>01908 313838</p>
        </div>
  
        <div className="footer-content-right">
            <h2>Newsletter</h2>
             <p>Lorem ipsum is simply dummy text of the printing and typesetting industry.</p>
             <div className='subscribe'>
              <input type='email' placeholder='Your Email Address' required/>
              <button>Subscribe</button>
             </div>
        </div>

      </div>
      <hr />
      <div className="babyfoot">
        <p className="footer-copyright">© 2024 Braai Shack Restaurant — Restaurant website created by Zenchef.</p>
        <div className="babyfootlinks">
          <a href="">Disclaimer</a><a href="">Terms of Use</a><a href="">Privacy Policy</a><a href="">Cookies Policy</a>
        </div>
      </div>
    </div>
  )
}

export default Footer
