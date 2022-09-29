import React, { useEffect } from 'react';
import { Button, Card, CardColumns, CardText, CardTitle, Input } from 'reactstrap';
import { Ingredient } from './App';

const Ingredients = (props: any) => {

    useEffect(() => {
        props.getIngredients();
    }, []);


function truncateString(str: string, num: number) {
    if (str.length <= num) {return str}
      return str.slice(0, num) + '...'
  }
  

    return(
        <div className="ingredient">
            <Input className="ingredient__input" placeholder="Search for an Ingredient..." onChange={(e) => props.searchItems(e.target.value)}/>
            <CardColumns>
                {
                    props.searchInput.length > 1 ? (
                        props.filteredIngredients.map((ingredient: Ingredient) => {
                            return (
                                <Card className="ingredient__card" key={ingredient.idIngredient}>
                                    <CardTitle tag="h5">{ingredient.strIngredient}</CardTitle>
                                    <CardText>{
                                        ingredient.strDescription ?
                                        truncateString(ingredient.strDescription, 100) : null
                                    }</CardText>
                                    <Button onClick={(e) => props.getMeals(ingredient.strIngredient)}>Find Meals</Button>
                                </Card>
                            )
                        })
                    ) :
                    props.ingredients.map((ingredient: any) => {
                        return (
                            <Card className="ingredient__card" key={ingredient.idIngredient}>
                                <CardTitle tag="h5">{ingredient.strIngredient}</CardTitle>
                                <CardText>{
                                    ingredient.strDescription ?
                                    truncateString(ingredient.strDescription, 100) : null
                                }</CardText>
                                <Button onClick={(e) => props.getMeals(ingredient.strIngredient)}>Find Meals</Button>
                            </Card>
                        )
                    })
                }
            </CardColumns>
        </div>
    )
}

export default Ingredients;