/* eslint-disable no-unused-vars */
import React from 'react';
import Chef from '../Chef/Chef';
import Banner from '../Banner/Banner';
import { Container } from 'react-bootstrap';
import AboutUs from '../../component/AboutUs/AboutUs';
import FeatureSection from '../FeatureSection/FeatureSection';


const Home = () => {
    return (
      <div>
        <Container>
          <Banner></Banner>
          <Chef></Chef>
          <FeatureSection></FeatureSection>
          <AboutUs></AboutUs>
        </Container>
      </div>
    );
};

export default Home;