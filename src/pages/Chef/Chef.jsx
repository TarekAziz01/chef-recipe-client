/* eslint-disable no-unused-vars */
import React, { useEffect, useState, useContext } from "react";
import {AuthContext} from '../../provider/AuthProvider'
import {Row, Spinner} from 'react-bootstrap'
import ChefCard from "../../component/ChefCard/ChefCard";

const Chef = () => {
    const [loading, setLoading] = useState(true)
    // const { user } = useContext(AuthContext);
    const [chefs, setChefs] = useState({});

    useEffect(() => {
        
      fetch("http://localhost:5000/chefs")
        .then((res) => res.json())
        .then((data) => {
          setChefs(data);
          setLoading(false)
        })
        
        .catch((error) => console.error(error));
      
      // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])


    if(loading){
        return <Spinner animation="border" variant="primary" />;
    }

    return (
      <div>
        <h2 className="d-flex justify-content-center my-5">
          Best Chef in house
        </h2>
        <Row xs={1} md={2} lg={3} className="g-4">
          {chefs.map((chef) => (
            <ChefCard key={chef.id} chef={chef}></ChefCard>
          ))}
        </Row>
      </div>
    );
};

export default Chef;