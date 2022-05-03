import React from 'react';
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SidebarRoute,
  SideBtnWrap
} from './SidebarElements';
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
import {
  SocialIcons,
  SocialIconLink
} from '../../components/Footer/FooterElements.js';

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
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
                href='//www.twitter.com/'
              >
                <FaTwitter />
              </SocialIconLink>
              {/* <SocialIconLink href='/' target='_blank' aria-label='Linkedin'>
                <FaLinkedin />
              </SocialIconLink> */}
              <SocialIconLink
                target='_blank'
                aria-label='Discord'
                href='//www.twitter.com/'
              >
                <FaDiscord />
              </SocialIconLink>
              <SocialIconLink
                target='_blank'
                aria-label='Telegram'
                href='t.me/squiddoll_official'
              >
                <FaTelegramPlane />
              </SocialIconLink>
          {/* <SidebarLink
            to='about'
            onClick={toggle}
            smooth={true}
            duration={500}
            spy={true}
            exact='true'
            offset={-80}
          >
            About
          </SidebarLink>
          <SidebarLink
            to='discover'
            onClick={toggle}
            smooth={true}
            duration={500}
            spy={true}
            exact='true'
            offset={-80}
          >
            Discover
          </SidebarLink>
          <SidebarLink
            to='services'
            onClick={toggle}
            smooth={true}
            duration={500}
            spy={true}
            exact='true'
            offset={-80}
          >
            Services
          </SidebarLink>
          <SidebarLink
            to='signup'
            onClick={toggle}
            smooth={true}
            duration={500}
            spy={true}
            exact='true'
            offset={-80}
          >
            Sign Up
          </SidebarLink> */}
        </SidebarMenu>
        {/* <SideBtnWrap>
          <SidebarRoute to='/signin'>Sign In</SidebarRoute>
        </SideBtnWrap> */}
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
