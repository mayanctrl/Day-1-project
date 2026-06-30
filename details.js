// Get Recipe ID

var params = new URLSearchParams(window.location.search);

var id = params.get("id");


// API

var url = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + id;


fetch(url)

.then(function(response){

    return response.json();

})

.then(function(data){

    showRecipe(data.meals[0]);

});




// Show Recipe

function showRecipe(meal){

    var ingredients = "";



    for(var i=1;i<=20;i++){

        var ingredient = meal["strIngredient"+i];



        if(ingredient != ""){

            ingredients += "<li>"+ingredient+"</li>";

        }

    }



    document.getElementById("recipeDetails").innerHTML=`

    <div class="details">

        <div class="row">

            <div class="col-md-6">

                <img src="${meal.strMealThumb}">

            </div>

            <div class="col-md-6">

                <h2>${meal.strMeal}</h2>

                <hr>

                <h4>Category</h4>

                <p>${meal.strCategory}</p>

                <h4>Cuisine</h4>

                <p>${meal.strArea}</p>

                <h4>Preparation Time</h4>

                <p>30 Minutes</p>

                <h4>Calories</h4>

                <p>450 kcal</p>

                <h4>Protein</h4>

                <p>25 g</p>

                <h4>Carbohydrates</h4>

                <p>35 g</p>

                <h4>Fat</h4>

                <p>15 g</p>

            </div>

        </div>

        <hr>

        <h3>Ingredients</h3>

        <ul>

            ${ingredients}

        </ul>

        <hr>

        <h3>Cooking Instructions</h3>

        <p style="white-space:pre-line">

            ${meal.strInstructions}

        </p>

    </div>

    `;

}