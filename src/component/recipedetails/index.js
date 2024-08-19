import Link from "next/link";




export default function RecipeDetailsItem({getRecipeDetails}){
    return(
        <div className="p-8">
            <Link href={'/recipe-list'}
              className="m-5 bg-blue-700 text-white text-xl px-4 py-1 rounded-md" 
            >Go to Recipe List</Link>
            <div className="p-6 lg:max-w-6xl max-w-2xl mx-auto">
                <div className="grid items-start grid-cols-1 lg:grid-cols-2 gap-10">
                
                    <div className="w-full lg:sticky top-0 sm:flex gap-2">
                        <img
                          src={getRecipeDetails?.image}
                          alt={getRecipeDetails?.name}
                          className="w-4/5 rounded object-cover" 
                         />
                    </div>

                    <div>
                        <h1 className="text-3xl font-extrabold text-gray-950">{getRecipeDetails?.name}</h1>
                        
                        <div className="gap-4 mt-5">
                            <p className="text-2xl text-gray-700">{getRecipeDetails?.mealType[0]}</p>
                        </div>

                        <div className="mt-5">
                            <p className="text-xl text-gray-800">{getRecipeDetails?.cuisine}</p>
                        </div>

                        <div className="mt-5">
                            <h1 className="text-lg font-bold text-gray-700">Ingadients</h1>
                            <ul className="space-y-3 list-disc mt-4 pl-4 text-sm text-gray-700">
                                {
                                    getRecipeDetails?.ingredients?.map((items) =>(
                                        <li>{items}</li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}