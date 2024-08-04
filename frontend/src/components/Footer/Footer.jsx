import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Footer.css';
import { assets } from '../../assets/assets';



  gsap.registerPlugin(ScrollTrigger);

  // useEffect(() => {
  //   gsap.from(".footer-content-left", {
  //     opacity: 0,
  //     x: -100,
  //     duration: 0.75,
  //     ease: "power2.out",
  //     scrollTrigger: {
  //       trigger: ".footer-content-left",
  //       start: "top 80%",
  //       end: "top 60%",
  //       scrub: 5,
  //     }
  //   });

  //   gsap.from(".footer-content-right", {
  //     opacity: 0,
  //     x: 100,
  //     duration: 0.75,
  //     ease: "power2.out",
  //     scrollTrigger: {
  //       trigger: ".footer-content-right",
  //       start: "top 80%",
  //       end: "top 60%",
  //       scrub: 5,
  //     }
  //   });

    // gsap.from(".babyfoot", {
    //   opacity: 0,
    //   y: 50,
    //   duration: 0.75,
    //   ease: "power2.out",
    //   scrollTrigger: {
    //     trigger: ".babyfoot",
    //     start: "top 90%",
    //     end: "top 70%",
    //     scrub: 5,
    //   }
    // });

  // }, []);
  const Footer = () => {
  return (
    <>
    <footer className="footer">
    <div className="footer-container">
        <div className="footer-brand">
            <a rel="noopener noreferrer" href="#" className="footer-brand-link">
                <div className="footer-brand-icon">
            <img src={assets.logo} alt="" className='logo'/>

                </div>
            </a>
        </div>
        <div className="footer-links">
          <div className="footpara">
           <p className='address'>42 Church Street, Wolverton MK 12 5JN Milton Keynes</p><br />
             <p className='phone-number'>01908 313838</p>
          </div>
            <div className="footer-links-section">
                <h3 className="footer-links-title">Product</h3>
                <ul className="footer-links-list">
                    <li><a rel="noopener noreferrer" href="#">Features</a></li>
                    <li><a rel="noopener noreferrer" href="#">Integrations</a></li>
                    <li><a rel="noopener noreferrer" href="#">Pricing</a></li>
                    <li><a rel="noopener noreferrer" href="#">FAQ</a></li>
                </ul>
            </div>
            <div className="footer-links-section">
                <h3 className="footer-links-title">Company</h3>
                <ul className="footer-links-list">
                    <li><a rel="noopener noreferrer" href="#">Privacy</a></li>
                    <li><a rel="noopener noreferrer" href="#">Terms of Service</a></li>
                </ul>
            </div>
            {/* <div className="footer-links-section">
                <h3 className="footer-links-title">Developers</h3>
                <ul className="footer-links-list">
                    <li><a rel="noopener noreferrer" href="#">Public API</a></li>
                    <li><a rel="noopener noreferrer" href="#">Documentation</a></li>
                    <li><a rel="noopener noreferrer" href="#">Guides</a></li>
                </ul>
            </div> */}
            <div className="footer-links-section">
                <div className="footer-links-title">Social media</div>
                <div className="footer-social">
                    <a rel="noopener noreferrer" href="#" title="Facebook" className="footer-social-link">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" className="footer-social-icon">
                            <path d="M32 16c0-8.839-7.167-16-16-16-8.839 0-16 7.161-16 16 0 7.984 5.849 14.604 13.5 15.803v-11.177h-4.063v-4.625h4.063v-3.527c0-4.009 2.385-6.223 6.041-6.223 1.751 0 3.584 0.312 3.584 0.312v3.937h-2.021c-1.984 0-2.604 1.235-2.604 2.5v3h4.437l-0.713 4.625h-3.724v11.177c7.645-1.199 13.5-7.819 13.5-15.803z"></path>
                        </svg>
                    </a>
                    <a rel="noopener noreferrer" href="#" title="Twitter" className="footer-social-link">
                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="footer-social-icon">
                            <path d="M23.954 4.569a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.691 8.094 4.066 6.13 1.64 3.161a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.061a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z"></path>
                        </svg>
                    </a>
                    <a rel="noopener noreferrer" href="#" title="Instagram" className="footer-social-link">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" className="footer-social-icon">
                            <path d="M16 0c-4.349 0-4.891 0.021-6.593 0.093-1.709 0.084-2.865 0.349-3.885 0.745-1.052 0.412-1.948 0.959-2.833 1.849-0.891 0.885-1.443 1.781-1.849 2.833-0.396 1.020-0.661 2.176-0.745 3.885-0.077 1.703-0.093 2.244-0.093 6.593s0.021 4.891 0.093 6.593c0.084 1.704 0.349 2.865 0.745 3.885 0.412 1.052 0.959 1.948 1.849 2.833 0.885 0.891 1.781 1.443 2.833 1.849 1.020 0.391 2.181 0.661 3.885 0.745 1.703 0.077 2.244 0.093 6.593 0.093s4.891-0.021 6.593-0.093c1.704-0.084 2.865-0.355 3.885-0.745 1.052-0.412 1.948-0.959 2.833-1.849 0.891-0.885 1.443-1.776 1.849-2.833 0.391-1.020 0.661-2.181 0.745-3.885 0.077-1.703 0.093-2.244 0.093-6.593s-0.021-4.891-0.093-6.593c-0.084-1.704-0.355-2.871-0.745-3.885-0.412-1.052-0.959-1.948-1.849-2.833-0.885-0.891-1.776-1.443-2.833-1.849-1.020-0.396-2.181-0.661-3.885-0.745-1.703-0.072-2.244-0.093-6.593-0.093zM16 2.88c4.271 0 4.781 0.021 6.469 0.093 1.557 0.072 2.405 0.333 2.969 0.553 0.751 0.291 1.281 0.641 1.854 1.219 0.573 0.573 0.927 1.104 1.219 1.854 0.22 0.563 0.48 1.412 0.553 2.969 0.072 1.688 0.093 2.199 0.093 6.469s-0.021 4.781-0.093 6.469c-0.072 1.557-0.333 2.405-0.553 2.969-0.291 0.751-0.641 1.281-1.219 1.854-0.573 0.573-1.104 0.927-1.854 1.219-0.563 0.22-1.412 0.48-2.969 0.553-1.688 0.072-2.199 0.093-6.469 0.093s-4.781-0.021-6.469-0.093c-1.557-0.072-2.405-0.333-2.969-0.553-0.751-0.291-1.281-0.641-1.854-1.219-0.573-0.573-0.927-1.104-1.219-1.854-0.22-0.563-0.48-1.412-0.553-2.969-0.072-1.688-0.093-2.199-0.093-6.469s0.021-4.781 0.093-6.469c0.072-1.557 0.333-2.405 0.553-2.969 0.291-0.751 0.641-1.281 1.219-1.854 0.573-0.573 1.104-0.927 1.854-1.219 0.563-0.22 1.412-0.48 2.969-0.553 1.688-0.072 2.199-0.093 6.469-0.093zM16 7.797c-4.527 0-8.203 3.677-8.203 8.203s3.677 8.203 8.203 8.203 8.203-3.677 8.203-8.203-3.677-8.203-8.203-8.203zM16 9.907c3.359 0 6.094 2.735 6.094 6.094s-2.735 6.094-6.094 6.094-6.094-2.735-6.094-6.094 2.735-6.094 6.094-6.094zM24.24 6.583c-1.054 0-1.906 0.852-1.906 1.906s0.852 1.906 1.906 1.906c1.054 0 1.906-0.852 1.906-1.906s-0.852-1.906-1.906-1.906z"></path>
                        </svg>
                    </a>
                    <a rel="noopener noreferrer" href="#" title="GitHub" className="footer-social-link">
                        <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="footer-social-icon">
                            <path d="M16 0.396c-8.837 0-16 7.125-16 15.904 0 7.028 4.584 13.002 10.94 15.092 0.8 0.146 1.096-0.344 1.096-0.772 0-0.386-0.016-1.661-0.022-3.016-4.451 0.963-5.39-2.138-5.39-2.138-0.728-1.823-1.778-2.308-1.778-2.308-1.453-0.987 0.109-0.967 0.109-0.967 1.604 0.107 2.448 1.614 2.448 1.614 1.428 2.422 3.746 1.723 4.66 1.318 0.144-1.024 0.558-1.723 1.016-2.118-3.555-0.398-7.29-1.755-7.29-7.812 0-1.724 0.616-3.132 1.63-4.234-0.163-0.398-0.707-2.006 0.152-4.18 0 0 1.33-0.412 4.36 1.615 1.26-0.347 2.61-0.52 3.956-0.527 1.343 0.007 2.696 0.18 3.96 0.527 3.024-2.027 4.35-1.615 4.35-1.615 0.864 2.174 0.318 3.782 0.156 4.18 1.012 1.102 1.628 2.51 1.628 4.234 0 6.072-3.74 7.408-7.303 7.797 0.57 0.484 1.088 1.448 1.088 2.92 0 2.108-0.019 3.805-0.019 4.324 0 0.432 0.286 0.926 1.106 0.772 6.348-2.09 10.928-8.065 10.928-15.092 0-8.779-7.162-15.904-16-15.904z"></path>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    </div>
    <div className="footer-bottom">
        <p className="footer-bottom-text">© 2024 Braai Shaark Co. All rights reserved.</p>
    </div>
</footer>
    </>
  )
}

export default Footer
