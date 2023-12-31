import logo from '../Assets/logo-black.png';
import logoWhite from '../Assets/logo-blue.png';
import menu from '../Assets/home/menu.png';
import close from '../Assets/home/close.png';
import { useState } from 'react';

const Navbar = () => {

  const [toggle, setToggle] = useState(false);

  const switchToggle = () => {
    setToggle(!toggle)
  }

  return(
    <div className="navbar">

      <div className="nav-socials">
        <div className="primary-info">
          <p><i className='fa fa-envelope'></i> binarybroske@gmail.com</p>|
          <p><i className='fa fa-phone'></i>+254 791 880 412</p>
        </div>
        <div className="platforms">
            <i className="fab fa-facebook"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-github"></i>
            <i className="fab fa-instagram"></i>
       </div>

      </div>

      <div className="nav-links">
        <div className="nav-logo">
          <img src={logo} alt='img'/>
        </div>
        <div className="responsive">
          <img className='resposniveLogo' src={logo} alt='img'/>
          <img onClick={switchToggle} src={toggle ? close : menu  } alt="menu" />
        </div>
        <div className="links">
          <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/">Services</a></li>
              <li><a href="/">Portfolio</a></li>
              <li><a href="/">Pricing</a></li>
              <li><a href="/">Contact</a></li>
          </ul>
        </div>
      </div>

    </div>
  )
  }

export default Navbar
