import React, { useState, useEffect } from 'react';
import { 
  FaBars,
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
  FaDiscord,
  FaTelegramPlane,
} from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll';
import {
  MobileIcon,
  Nav,
  NavbarContainer,
  NavItem,
  NavLinks,
  NavLogo,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElements';

import {
  SocialIcons,
  SocialIconLink
} from '../../components/Footer/FooterElements.js';

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            <NavLogo onClick={toggleHome} to='/'>
                  
            </NavLogo>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
            <SocialIcons>
              {/* <SocialIconLink href='/' target='_blank' aria-label='Facebook'>
                <FaFacebook />
              </SocialIconLink> */}
              {/* <SocialIconLink href='/' target='_blank' aria-label='Instagram'>
                <FaInstagram />
              </SocialIconLink> */}
              {/* <SocialIconLink
                href='/'
                target='_blank'
                aria-label='Youtube'
                rel='noopener noreferrer'
              >
                <FaYoutube />
              </SocialIconLink> */}
              <SocialIconLink
                target='_blank'
                aria-label='Twitter'
                href='https://twitter.com/DAO_Creators/'
              >
                <FaTwitter />
              </SocialIconLink>
              {/* <SocialIconLink href='/' target='_blank' aria-label='Linkedin'>
                <FaLinkedin />
              </SocialIconLink> */}
              <SocialIconLink
                target='_blank'
                aria-label='Discord'
                href='/'
              >
                <FaDiscord />
              </SocialIconLink>
              <SocialIconLink
                target='_blank'
                aria-label='Telegram'
                href='//t.me/creators_dao'
              >
                <FaTelegramPlane />
              </SocialIconLink>
            </SocialIcons>
            
              {/* <NavItem>
                <NavLinks
                  to='about'
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={-80}
                >
                  About
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to='discover'
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={-80}
                >
                  Discover
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to='services'
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={-80}
                >
                  Services
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to='signup'
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={-80}
                >
                  Sign Up
                </NavLinks>
              </NavItem> */}
            </NavMenu>
            <NavBtn>
             {/* <NavBtnLink to='/signin'>Sign In</NavBtnLink> */}
             {/* <NavBtnLink 
              to={{ pathname: "https://stackoverflow.com/questions/42914666/react-router-external-link" }} 
              target="_blank"
              >
                Launch App 
                </NavBtnLink> */}
                <NavLogo onClick={toggleHome} to='/'>
              {/* CREATOR DAO */}
                  <div class="button">CREATORS DAO</div>
                  <link rel="preconnect" href="https://fonts.googleapis.com"></link>
                  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
                  <link href="https://fonts.googleapis.com/css2?family=Dosis:wght@600&display=swap" rel="stylesheet"></link>
            </NavLogo>
            </NavBtn>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
