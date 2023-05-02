/* eslint-disable no-unused-vars */
import React from 'react';
import Chef from '../Chef/Chef';
import Banner from '../Banner/Banner';
import { Container } from 'react-bootstrap';


const Home = () => {
    return (
      <div>
        <Container>
          <Banner></Banner>
          <Chef></Chef>
        </Container>
      </div>
    );
};

export default Home;