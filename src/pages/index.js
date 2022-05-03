import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
// import InfoSection from '../components/InfoSection';
import {
  homeObjOne,
  // homeObjTwo,
  // homeObjThree,
  // homeObjFour,
  // homeObjFive,
} from '../components/InfoSectionNoImg/Data';
import {
  // homeObjOne,
  homeObjTwo,
  // homeObjThree,
  // homeObjFour,
  // homeObjFive,
} from '../components/InfoSectionNoImg2/Data';
import {
  // homeObjOne,
  // homeObjTwo,
  homeObjThree,
  // homeObjFour,
  // homeObjFive,
} from '../components/InfoSectionNoImg3/Data';
import {
  // homeObjOne,
  // homeObjTwo,
  // homeObjThree,
  homeObjFour,
  // homeObjFive,
} from '../components/InfoSectionNoImg4/Data';
// import {
//   // homeObjOne,
//   // homeObjTwo,
//   // homeObjThree,
//   // homeObjFour,
//   homeObjFive,
// } from '../components/InfoSectionNoImg5/Data';
// import Services from '../components/Services';
import InfoSectionNoImg from '../components/InfoSectionNoImg';
import InfoSectionNoImg2 from '../components/InfoSectionNoImg2';
import InfoSectionNoImg3 from '../components/InfoSectionNoImg3';
import InfoSectionNoImg4 from '../components/InfoSectionNoImg4';
// import InfoSectionNoImg5 from '../components/InfoSectionNoImg5';

function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      {/* <HeroSection /> */}
      {/* <InfoSection {...homeObjTwo} /> */}
      {/* <Services /> */}
      {/* <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjThree} /> */}
      <InfoSectionNoImg {...homeObjOne} />
      <InfoSectionNoImg2 {...homeObjTwo} />
      <InfoSectionNoImg3 {...homeObjThree} />
      <InfoSectionNoImg4 {...homeObjFour} />
      {/* <InfoSectionNoImg5 {...homeObjFive} /> */}
      <Footer />
    </>
  );
}

export default Home;
