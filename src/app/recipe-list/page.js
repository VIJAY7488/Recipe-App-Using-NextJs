import RecipeList from "@/component/recipe-list";


async function fetchListOfRecipe(){
       try {
          const apiResponse = await fetch('https://dummyjson.com/recipes');
          const result = await apiResponse.json();
          return result?.recipes;
       } catch (error) {
          console.log("Error >>> " + error);
       }
}

export default async function Recipe(){
       
    const recipeList = await fetchListOfRecipe();

    return(
        <div>
            <RecipeList recipeList={recipeList}/>
        </div>
    )
}