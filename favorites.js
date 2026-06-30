// Load Favorites

var favorites = JSON.parse(localStorage.getItem("favorites")) || [];

var container = document.getElementById("favoriteContainer");



// No Favorites

if(favorites.length==0){

    container.innerHTML="<h3 class='text-center'>No Favorite Recipes</h3>";

}



// Display Favorites

for(var i=0;i<favorites.length;i++){

    container.innerHTML +=

    `

    <div class="col-md-4">

        <div class="recipe-card">

            <img src="${favorites[i].image}">

            <h3>${favorites[i].name}</h3>

            <button class="favorite-btn"

            onclick="removeRecipe(${i})">

            Remove

            </button>

        </div>

    </div>

    `;

}



// Remove Favorite

function removeRecipe(index){

    favorites.splice(index,1);

    localStorage.setItem("favorites",JSON.stringify(favorites));

    location.reload();

}