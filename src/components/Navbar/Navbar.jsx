import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import "material-symbols"
import MobileNav from './MobileNav/MobileNav';

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const toogleMenu = () => {
    setOpenMenu(!openMenu);
  };



  return (
    <>
      <MobileNav isOpen={openMenu} toggleMenu={toogleMenu} />

      <nav className='nav-wrapper'>
        <div className='nav-content'>
          <img className='logo' src='./assets/images/code.png' alt='logo' />

          <ul>
            <li>
              <Link className='menu-item' to='/'>Home</Link>
            </li>
            <li>
              <Link className='menu-item' to='/Skills'>Skills</Link>
            </li>
            <li>
              <Link className='menu-item' to='/Projects'>Projects</Link>
            </li>
            <li>
              <Link className='menu-item' to='/Contact'>Contact</Link>
            </li>

            <button className='contact-btn' onClick={() => { }}>
              Hire Me
            </button>
          </ul>

          <button className='menu-btn' onClick={toogleMenu}>
            <span
              class={"material-symbols-outlined"}
              style={{ fontSize: "1.8rem" }}
            >
              {openMenu ? "close" : "menu"}

            </span>
          </button>
        </div>
      </nav>

    </>
  );
};

export default Navbar