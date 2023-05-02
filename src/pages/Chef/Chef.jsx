/* eslint-disable no-unused-vars */
import React, { useEffect, useState, useContext } from "react";
import {AuthContext} from '../../provider/AuthProvider'
import {Spinner} from 'react-bootstrap'

const Chef = () => {
    const [loading, setLoading] = useState(true)
    const { user } = useContext(AuthContext);
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

    console.log(chefs);

    if(loading){
        return <Spinner animation="border" variant="primary" />;
    }

    return (
        <div>
            {
                chefs.map(chef => <p
                key ={ chef.id}
                > {chef.name}</p>)
            }
        </div>
    );
};

export default Chef;