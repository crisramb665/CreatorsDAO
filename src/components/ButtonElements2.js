import styled from 'styled-components';
import { Link } from 'react-scroll';
import { Link as LinkR} from 'react-router-dom';

export const Button = styled(LinkR)`

  border-radius: 2px;
  background: ${({ primary }) => (primary ? 
    'rgb(25,222,223) radial-gradient(circle, rgba(25,222,223,1) 0%, rgba(10,169,170,1) 100%)' 
    : 
    'rgb(25,222,223) radial-gradient(circle, rgba(25,222,223,1) 0%, rgba(10,169,170,1) 100%)'
    )};
  white-space: nowrap;
  padding: ${({ big }) => (big ? '20px 54px' : '18px 60px')};
  color: ${({ dark }) => (dark ? '#ffffff' : '#ffffff')};
  font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
  font-weight: bolder;
  font-family: 'Source Code Pro', monospace;
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? 
      'rgb(20,151,152) radial-gradient(circle, rgba(20,151,152,1) 0%, rgba(11,105,106,1) 100%)' 
      : 
      'rgb(20,151,152) radial-gradient(circle, rgba(20,151,152,1) 0%, rgba(11,105,106,1) 100%)'
      )};
  }
`;
