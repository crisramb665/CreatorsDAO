import styled from 'styled-components';

export const InfoContainer = styled.div`
  color: #fff;
  // background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(18,53,64,1) 100%);

  background: rgb(2,20,41);
  background: radial-gradient(circle, rgba(2,20,41,1) 0%, rgba(0,5,11,1) 100%);

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  } 
`;

export const InfoWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 700px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
`;

export const InfoRow = styled.div`
  margin-top:230px;
  
  
  
`;

export const Column1 = styled.div`

`;

export const Column2 = styled.div`

`;

export const TextWrapper = styled.div`
  max-width: 740px;
  text-align:center;
  padding-top: 0;
  padding-bottom: 60px;
`;

export const TopLine = styled.div`
  color: #19DEDF;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  font-family: 'Source Code Pro', monospace;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  font-family: 'Source Code Pro', monospace;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? '#f7f8fa' : '#f7f8fa')};

  @media screen and (max-width: 1080px) {
    font-size: 32px;
  }
`;

export const Subtitle = styled.p`
  max-width: 740px;
  margin-bottom: 35px;
  font-size: 18px;
  font-family: 'Source Code Pro', monospace;
  line-height: 24px;
  color: ${({ darkText }) => (darkText ? '#fff' : '#fff')};
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: center;
`;

