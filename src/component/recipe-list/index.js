import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
  import Link from "next/link";
  
  export default function RecipeList({ recipeList }) {
    console.log(recipeList);
  
    return (
      <div className="p-4 mx-auto lg:max-w-6xl md:max-w-4xl sm:max-w-full">
        <div className="flex justify-between items-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-12">Recipes</h2>
          <Link href={'/'} className="text-white text-xl bg-blue-700 rounded-md px-4 py1">Go to Home Page</Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {recipeList && recipeList.length > 0 ? (
            recipeList.map((data) => (
              <Link href={`/recipe-list/${data.id}`} key={data.id}>
                <Card className="hover:scale-110 transition-transform duration-300">
                  <CardContent className="bg-white rounded-md overflow-hidden shadow-md cursor-pointer">
                    <div className="w-full aspect-w-16 aspect-h-8 lg:h-80">
                      <img
                        src={data.image}
                        alt={data.name}
                        className="h-full w-full object-cover object-top"
                      />
                    </div>

                    <div className="p-6 text-center">
                        <h1 className="text-lg font-bold text-gray-900">{data.name}</h1>
                    </div>

                    <div className="mt-4 flex justify-center items-center flex-wrap gap-4">
                        <h1 className="text-lg text-gray-600 font-bold">Rating {data.rating}</h1>
                        <h1 className="text-lg text-gray-600 font-bold">{data.cuisine}</h1>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))
          ) : (
            <p>No recipes available</p>
          )}
        </div>
      </div>
    );
  }
  