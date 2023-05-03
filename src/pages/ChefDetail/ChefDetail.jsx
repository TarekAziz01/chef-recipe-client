/* eslint-disable no-unused-vars */
import React from 'react';
import { Row } from 'react-bootstrap';
import { useLoaderData, useParams } from 'react-router-dom';
import Recipecard from '../../component/RecipeCard/Recipecard';

const ChefDetail = () => {
    const chefDetail = useLoaderData();
    const {name, likes, description, experience, photo, numRecipes, recipes} = chefDetail
    console.log(chefDetail)
    const { id } = useParams();
    return (
      <div className="mt-5">
        <h3>detail about chef</h3>
        <h3 className="d-flex justify-content-center mb-5">Detail About {name}</h3>
        <div>
          <Row xs={1} md={2} lg={3} className="g-4">
            {recipes.map((recipe) => (
              <Recipecard key={recipe.id} recipe={recipe}></Recipecard>
            ))}
          </Row>
        </div>
      </div>
    );
};

export default ChefDetail;