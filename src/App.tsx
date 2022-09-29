import React, { useState } from 'react';
import './App.scss';
import Ingredients from './Ingredients';
import axios from 'axios';
import Meals from './Meals';

export interface Ingredient {
  strIngredient: string,
  idIngredient: string,
  strDescription: string,
}

export interface Meal {
  strMeal: string,
  strMealthumb: string,
  idMeal: string,
}

export interface Recipie {
idMeal: string,
strMeal: string,
strDrinkAlternate: any,
strCategory: string,
strArea: string,
strInstructions: string,
strMealThumb: string,
strTags: string,
strYoutube: string,
strIngredient1?: string,
strIngredient2?: string,
strIngredient3?: string,
strIngredient4?: string,
strIngredient5?: string,
strIngredient6?: string,
strIngredient7?: string,
strIngredient8?: string,
strIngredient9?: string,
strIngredient10?: string,
strIngredient11?: string,
strIngredient12?: string,
strIngredient13?: string,
strIngredient14?: string,
strIngredient15?: string,
strIngredient16?: string,
strIngredient17?: string,
strIngredient18?: string,
strIngredient19?: string,
strIngredient20?: string,
strMeasure1?: string,
strMeasure2?: string,
strMeasure3?: string,
strMeasure4?: string,
strMeasure5?: string,
strMeasure6?: string,
strMeasure7?: string,
strMeasure8?: string,
strMeasure9?: string,
strMeasure10?: string,
strMeasure11?: string,
strMeasure12?: string,
strMeasure13?: string,
strMeasure14?: string,
strMeasure15?: string,
strMeasure16?: string,
strMeasure17?: string,
strMeasure18?: string,
strMeasure19?: string,
strMeasure20?: string,
strSource: string,
strImageSource: string,
strCreativeCommonsConfirmed: any,
dateModified: any
}

function App() {

  const [ingredients, setIngredients] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [filteredIngredients, setFilteredIngredients] = useState([]);
  const [meals, setMeals] = useState([]);
  const [recipie, setRecipie] = useState([]);
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const getIngredients = () => {
            // Make a request for a user with a given ID
            axios.get('https://www.themealdb.com/api/json/v1/1/list.php?i=list')
            .then(function (response: any) {
                // handle success
                setIngredients(response.data.meals);
            })
            .catch(function (error: any) {
                // handle error
            })
  }

  const getMeals = (selectedIngredient: string) => {
    // Make a request for a user with a given ID
    axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?i=' + selectedIngredient)
    .then(function (response: any) {
        // handle success
        setMeals(response.data.meals);
    })
    .catch(function (error: any) {
        // handle error
    })
}

const getRecipie = (selectedMeal: string) => {
  // Make a request for a user with a given ID
  axios.get('https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + selectedMeal)
  .then(function (response) {
      // handle success
      setRecipie(response.data.meals);
      setModal(!modal)
  })
  .catch(function (error: any) {
      // handle error
  })
}

const closeModal = () => {
  setModal(!modal);
}

  const searchItems = (searchValue: string) => {
    setSearchInput(searchValue)
    if(searchInput !== '') {
        const filteredData = ingredients.filter((item) => {
            return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
        })
        setFilteredIngredients(filteredData)
    } else {
        setFilteredIngredients(ingredients)
    }
    }


  return (
    <div className="cookbook">
      <Meals
      meals={meals}
      getRecipie={getRecipie}
      recipie={recipie}
      modal={modal}
      closeModal={closeModal}
      />
      <Ingredients
        ingredients={ingredients}
        getIngredients={getIngredients}
        searchInput={searchInput}
        filteredIngredients={filteredIngredients}
        searchItems={searchItems}
        getMeals={getMeals}
      />
    </div>
  );
}

export default App;
