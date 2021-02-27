
// fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata")
// .then((result) => result.json(){
//     .then(data => console.log(data) )
// }).catch((err) => {
//     alert("Sorry NO match , try something Different, please.")
// });



function searchBtn(){
    const keyWord = document.getElementById("searchTerm");
    const search = keyWord.value;
    console.log(search);
    const url = 'https://www.themealdb.com/api/json/v1/1/search.php?s='+search;
    console.log(url);
    fetch(url)
    // to show the search meal name code : data.meals[0].strMeal
    // to show the img  : data.meals[0].strMealThumb
    // to show the ingredient : data.meals[0].strIngredient1 
.then(resp => resp.json())
//.then(data => console.log(data.meals[0].strIngredient1));
.then(data => showSearchResult(data.meals[0].strMealThumb,data.meals[0].strMeal,data.meals[0].strIngredient1,data));

}

const showSearchResult = (imgSource, mealName, ingredient,data) =>{


    // console.log( "" +imgSource );
    // console.log(mealName);
    // console.log(ingredient);
    // console.log(data);
    
   
const mealsDiv = document.getElementById("mealsDiv");
mealsDiv.className = "mealsInfo";
const makeHtml = `<img src=${imgSource} alt="${mealName}" width= "200">
<h3 > ${mealName}</h3>
<ul>
<li>${data.meals[0].strIngredient1}</li>
<li>${data.meals[0].strIngredient2}</li>
<li>${data.meals[0].strIngredient3}</li>
<li>${data.meals[0].strIngredient4}</li>
<li>${data.meals[0].strIngredient5}</li>
<li>${data.meals[0].strIngredient6}</li>
<li>${data.meals[0].strIngredient7}</li>
<li>${data.meals[0].strIngredient8}</li>
<li>${data.meals[0].strIngredient9}</li>
<li>${data.meals[0].strIngredient10}</li>


</ul>
`;

mealsDiv.innerHTML = makeHtml;

}

