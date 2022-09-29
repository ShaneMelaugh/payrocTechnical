import React, { useState } from 'react';
import './App.scss';
import { Button, Card, CardColumns, CardTitle } from 'reactstrap';
import Recipies from './Recipie';

const Meals = (props: any) => {
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
  return (
    <div className="meal">
      <Recipies
        recipie={props.recipie}
        modal={props.modal}
        toggle={toggle}
        closeModal={props.closeModal}
      />
        <CardColumns>
            {
                props.meals.length > 0 ? 
                props.meals.map((meal: any) => {
                    return (
                        <Card className="meal__card" key={meal.idMeal}>
                        <div className="meal__card--inner">
                        <img
                            className="meal__img"
                            alt="Card"
                            src={meal.strMealThumb}
                        />
                        <CardTitle tag="h5">{meal.strMeal}</CardTitle>
                        </div>
                        <Button onClick={(e) => props.getRecipie(meal.idMeal)}>Get Recipie</Button>
                    </Card>
                    )
                }) : <p>Search by ingredient for a meal</p>
            }
        </CardColumns>
    </div>
  );
}

export default Meals;
