import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FooterContainer = styled.footer`
  background-color: #00050b; //original: #101522
`;

export const FooterWrap = styled.div`
  padding: 12px 6px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
`;

export const FooterLinksContainer = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (max-width: 820px) {
    padding-top: 32px;
  }
`;

export const FooterLinksWrapper = styled.div`
  display: flex;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 16px;
  text-align: left;
  width: 160px;
  box-sizing: border-box;
  color: #fff;

  @media screen and (max-width: 420px) {
    margin: 0;
    padding: 10px;
    width: 100%;
  }
`;

export const FooterLinkTitle = styled.h1`
  font-size: 14px;
  margin-bottom: 16px;
`;

export const FooterLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 14px;

  &:hover {
    color: #01bf71;
    transition: 0.3s ease-out;
  }
`;

export const SocialMedia = styled.section`
  max-width: 1000px;
  width: 100%;
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1500px;
  margin: 15px auto 15px auto;
  flex-direction: column;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const SocialLogo = styled(Link)`
  color: #fff;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  font-weight: bold;
`;

export const WebsiteRights = styled.small`
  // color: #fff;
  // margin-bottom: 16px;

  body {
  background-color:#000000;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
  .button {
  display: inline-block;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  padding: 7px;
  border: none;
  font: normal 35px/normal "Lobster", cursive;
  color: rgba(255,255,255,1);
  text-decoration: normal;
  text-align: center;
  -o-text-overflow: clip;
  text-overflow: clip;
  white-space: pre;
  text-shadow: 0 0 1px rgba(255,255,255,1) , 0 0 2px rgba(255,255,255,1) , 0 0 2px rgba(255,255,255,1) , 0 0 0 #fff , 0 0 0 #fff , 0 0 0 #fff , 0 0 0 #fff ;
  -webkit-transition: all 200ms cubic-bezier(0.42, 0, 0.58, 1);
  -moz-transition: all 200ms cubic-bezier(0.42, 0, 0.58, 1);
  -o-transition: all 200ms cubic-bezier(0.42, 0, 0.58, 1);
  transition: all 200ms cubic-bezier(0.42, 0, 0.58, 1);
}

.button:hover {
  text-shadow: 0 0 1px rgba(255,255,255,1) , 0 0 2px rgba(255,255,255,1) , 0 0 2px rgba(255,255,255,1) , 0 0 2px #00ffff , 0 0 4px #00ffff , 0 0 8px #00ffff , 0 0 16px #00ffff ;
}

@media screen and (max-width: 285px) {

  .button {
    font: normal 15px/normal "Lobster", cursive;
   }
}

@media screen and (max-width: 415px) {

  .button {
    font: normal 20px/normal "Lobster", cursive;
   }
}
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
`;

export const SocialIconLink = styled.a`
  color: #fff;
  font-size: 32px;
`;
