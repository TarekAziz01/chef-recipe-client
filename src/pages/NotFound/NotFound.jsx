/* eslint-disable no-unused-vars */
import React from 'react';
import ErrorPhoto from '../../photos/error.png'
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
      <div className="text-center mt-5">
        <img src={ErrorPhoto} alt="" />
        <h4>Page not found!</h4>
        <h4>Go to the <Link to='/'>Homepage</Link></h4>
      </div>
    );
};

export default NotFound;