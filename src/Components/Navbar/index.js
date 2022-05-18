import React, {useState, useEffect} from 'react';
import { MobileIcon, Nav, NavbarContainer, NavBtn, NavBtnLink, NavItem, NavLinkR, NavLinks, NavLogo, NavLogoImg, NavMenu } from './NavbarElements'
import {FaBars} from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';
import logo from '../../Assets/Images/logo.png';

const Navbar = ({toggle}) => {
  const [scrollNav, setScrollNav] = useState(false)
  const changeNav = () => {
    if(window.scrollY >= 80) {
      setScrollNav(true)
    } else {
      setScrollNav(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNav)
  }, [])

  const toggleHome = () => {
    scroll.scrollToTop();
  }

  return (
    <>
        <Nav scrollNav={scrollNav}>
            <NavbarContainer>
                <NavLogo onClick={toggleHome} to={'/'}>
                  <NavLogoImg src={logo}></NavLogoImg>
                  ELECTRON
                </NavLogo>
            <MobileIcon onClick={toggle}>
                <FaBars/>
            </MobileIcon>
            <NavMenu>
                <NavItem>
                    <NavLinkR onClick={toggleHome} to="/">Home</NavLinkR>
                </NavItem>
                <NavItem>
                    <NavLinkR to="quemSomos">Quem somos?</NavLinkR>
                </NavItem>
                <NavItem>
                    <NavLinkR to="missoes">Missões</NavLinkR>
                </NavItem>
                <NavItem>
                    <NavLinkR to="visao">Visão</NavLinkR>
                </NavItem>
                <NavItem>
                    <NavLinkR to="responsabilidades">Responsabilidades</NavLinkR>
                </NavItem>
            </NavMenu>
            </NavbarContainer>
        </Nav>
    </>
  )
}

export default Navbar