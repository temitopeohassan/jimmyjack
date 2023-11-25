import React, { useState } from 'react';
import Logo from '../../assets/assets/images/png/brands/logo.png';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import "../../App.css";
import {
  Nav,
  NavContainer,
  NavLogo,
  NavItem,
  NavLinks,
  NavMenu,
  MobileIcon,
} from "./NavbarElements";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
      if (window.scrollY >= 100) {
          setColorchange(true);
      } else {
          setColorchange(false);
      }
  };
  window.addEventListener("scroll", changeNavbarColor);

  return (
    <>
      <IconContext.Provider value={{ color: '#000' }}>
    <Nav className={
        colorChange
            ? "navbar colorChange"
            : "navbar"
    }>
  <NavContainer style={{ color: 'transparent' }}>
  <NavLogo to='/' > 
    <img src={Logo} alt='JJTS & Co' />
    </NavLogo>
    <MobileIcon onClick={handleClick}>
      {click ? <FaTimes /> : <FaBars />}
    </MobileIcon>
    <NavMenu onClick={handleClick} click={click}>
    
      <NavItem>
    <NavLinks to='/'onClick={closeMobileMenu}>Home</NavLinks>
    </NavItem>

    <NavItem>
    <NavLinks to='/about'onClick={closeMobileMenu}>About JJTS & Co</NavLinks>
    </NavItem>

    <NavItem>
    <NavLinks to='/shop'onClick={closeMobileMenu}> Shop Jimmy Jack</NavLinks>
    </NavItem>
  

    <NavItem>
    <NavLinks to='/contact'onClick={closeMobileMenu}>Contact</NavLinks>
    </NavItem>

    </NavMenu>
   
  </NavContainer>
 
</Nav>
</IconContext.Provider>
 
    </>
  );
}

export default Navbar;