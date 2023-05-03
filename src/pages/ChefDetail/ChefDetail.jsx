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
        <img src={photo} alt="" />
        <h4 className="d-flex justify-content-center mb-5">{name}</h4>
        <p className="d-flex justify-content-center ">{description}</p>
        <div className="d-flex gap-5">
          <p>Experiance {experience}</p>
          <p>likes {likes}</p>
          <p>Number of Recipe {numRecipes}</p>
        </div>
        <div>
            <h4 className='my-4'>Some Special recipes </h4>
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