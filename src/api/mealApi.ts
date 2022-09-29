import axios from "axios";

function getMeals() {
            // Make a request for a user with a given ID
            axios.get('https://www.themealdb.com/api/json/v1/1/list.php?i=list')
            .then(function (response: any) {
                // handle success
                console.log(response.data);
            })
            .catch(function (error: any) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });
}

export default getMeals;