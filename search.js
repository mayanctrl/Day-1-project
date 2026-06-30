// Search Recipe Function

function searchRecipe() {

    var ingredient = document.getElementById("ingredient").value;

    var url = "https://www.themealdb.com/api/json/v1/1/search.php?s=" + ingredient;

    document.getElementById("loading").innerHTML = "<h4>Loading Recipes...</h4>";

    fetch(url)

    .then(function(response){

        return response.json();

    })

    .then(function(data){

        document.getElementById("loading").innerHTML = "";

        displayRecipes(data.meals);

    });

}



// Display Recipes

function displayRecipes(meals){

    var recipeContainer = document.getElementById("recipeContainer");

    recipeContainer.innerHTML = "";



    if(meals == null){

        recipeContainer.innerHTML = "<h3 class='text-center'>No Recipes Found</h3>";

        return;

    }



    for(var i=0;i<meals.length;i++){

        recipeContainer.innerHTML +=

        `

        <div class="col-md-4">

            <div class="recipe-card">

                <img src="${meals[i].strMealThumb}">

                <h3>${meals[i].strMeal}</h3>

                <p><b>Category :</b> ${meals[i].strCategory}</p>

                <p><b>Area :</b> ${meals[i].strArea}</p>

                <button class="btn btn-warning mt-2"

                onclick="viewRecipe('${meals[i].idMeal}')">

                View Details

                </button>

                <button class="favorite-btn mt-2"

                onclick="addFavorite('${meals[i].idMeal}','${meals[i].strMeal}','${meals[i].strMealThumb}')">

                ❤️ Favorite

                </button>

            </div>

        </div>

        `;

    }

}



// Open Details Page

function viewRecipe(id){

    window.location.href = "details.html?id=" + id;

}



// Save Favorite

function addFavorite(id,name,image){

    var recipe = {

        id:id,

        name:name,

        image:image

    };



    var favorites = JSON.parse(localStorage.getItem("favorites")) || [];



    favorites.push(recipe);



    localStorage.setItem("favorites",JSON.stringify(favorites));



    alert("Recipe Added to Favorites");

}



// Search When Enter Key Pressed

document.getElementById("ingredient").addEventListener("keypress",function(event){

    if(event.key=="Enter"){

        searchRecipe();

    }

});



// Load Some Recipes Automatically

window.onload=function(){

    document.getElementById("ingredient").value="Chicken";

    searchRecipe();

}