/* eslint-disable no-unused-vars */
import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { Row, Spinner } from "react-bootstrap";
import ChefCard from "../../component/ChefCard/ChefCard";

const Chef = () => {
  const [loading, setLoading] = useState(true);
  // const { user } = useContext(AuthContext);
  const [chefs, setChefs] = useState({});

  useEffect(() => {
    fetch("https://chef-recipe-hunter-server-tarekaziz01.vercel.app/chefs")
      .then((res) => res.json())
      .then((data) => {
        setChefs(data);
        setLoading(false);
      })

      .catch((error) => console.error(error));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return (
      <div className="text-center m-5">
        <Spinner animation="border" variant="primary" />
      </div>
    );
  }

  return (
    <div>
      <h2 className="d-flex justify-content-center my-5">Best Chef in house</h2>
      <Row xs={1} md={2} lg={3} className="g-4">
        {chefs.map((chef) => (
          <ChefCard key={chef.id} chef={chef}></ChefCard>
        ))}
      </Row>
    </div>
  );
};

export default Chef;
