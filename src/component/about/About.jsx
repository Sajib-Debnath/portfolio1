import React from "react";
// import web from "../src/images/hero-img.png";
import web from '../../images/hero-img.png';
// import Commom from "../../Commom";
import Common from '../Common';

const About = () => {
  return (
    <>
      <Common
        name="Welcome to About page"
        imgsrc={web}
        visit="/contact"
        btname="Contact Now"
      />
    </>
  );
};

export default About;
