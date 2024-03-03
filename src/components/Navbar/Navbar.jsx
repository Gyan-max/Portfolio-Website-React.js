import React, { useState } from 'react'
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
              <a className='menu-item' href='/'>Home</a>
            </li>
            <li>
              <a className='menu-item' href='#Skills'>Skills</a>
            </li>
            <li>
              <a className='menu-item' href='#Projects'>Projects</a>
            </li>
            <li>
              <a className='menu-item' href='#Contact'>Contact Me</a>
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