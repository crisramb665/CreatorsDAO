import React from 'react';
import { Button } from '../ButtonElements';
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  // Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  EspecialWord,
} from './InfoElements';

const InfoSectionNoImg = ({
  lightBg,
  imgStart,
  topLine,
  lightText,
  headline1,
  especialWord,
  headline2,
  description,
  description2,
  buttonLabel,
  img,
  alt,
  id,
  primary,
  darkText,
  dark,
  dark2
}) => {
  console.log(primary);
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>

                {/* <Heading lightText={lightText}>{headline}</Heading> */}

                <Heading >{headline1}</Heading>
                <EspecialWord >{especialWord}</EspecialWord>
                <Heading >{headline2}</Heading>

                <Subtitle darkText={darkText}>{description}</Subtitle>
                <Subtitle darkText={darkText}>{description2}</Subtitle>
                <BtnWrap>
                  <Button
                    to={{ pathname: "https://docs.creatorsdao.tech/" }}
                    target="_blank"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact='true'
                    offset={-80}
                    primary={primary ? 1 : 0}
                    dark={dark ? 1 : 0}
                    dark2={dark2 ? 1 : 0}
                  >
                    {buttonLabel}
                  </Button>
                </BtnWrap>
              </TextWrapper>
            </Column1>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSectionNoImg;
