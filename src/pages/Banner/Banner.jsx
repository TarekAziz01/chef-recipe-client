/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react';
import bannerFood from '../../photos/bannerFood.jpg';
import { Row } from 'react-bootstrap';
import LazyLoad from "react-lazy-load";

const Banner = () => {
    return (
      <Row xs={1} md={2} className="g-4 text-center ">
        <div className="d-flex align-items-center">
          <div>
            <h1 className="text-success">Spice Garden</h1>
            <h6>
              Transport yourself to an exotic garden of flavor with Spice
              Garden's authentic Indian cuisine.
            </h6>
          </div>
        </div>
        
        <LazyLoad height={''}>
            <img className="img-fluid" src={bannerFood} alt="" />
          </LazyLoad>
      </Row>
    );
};

export default Banner;