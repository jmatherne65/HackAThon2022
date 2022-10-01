import React from 'react'
import {Nav, NavbarContainer, NavLogo} from './NavbarElements'; 

const Navbar = () => {
  return (
    <>
        <NavbarContainer>
            <NavLogo to='/'>dolla</NavLogo>
            <h1>Hey</h1>
        </NavbarContainer>
    </>
  )
}

export default Navbar;
