import RecipeDetailsItem from "@/component/recipedetails";


async function fetchRecipeDetails(currentListId){
    try {
        const apiResponse = await fetch(`https://dummyjson.com/recipes/${currentListId}`);
        const result = await apiResponse.json();
        return result;
    } catch (error) {
        console.log("Error >>> " + error);
    }
}

export default async function recipeDetails({params}){
    
    const getRecipeDetails = await fetchRecipeDetails(params?.details);

   return(
    <div>
        <RecipeDetailsItem getRecipeDetails={getRecipeDetails}/>
    </div>
   )
}