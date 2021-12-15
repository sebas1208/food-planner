import React, { useEffect, useState } from "react";
import Recipe from "../../components/Recipe";

import axios from "axios";
import { FoodSearch } from "../../types";
import { complexSearch } from "../../Services/RecipesServiceAPI";

const fetchRecipeEndpoint = async (setRecipeList: React.Dispatch<FoodSearch>) => {
  //   const recipeList = await axios.get<FoodSearch>(url);
  //   setRecipeList(recipeList.data);
  //   console.log(complexSearch({ query: "Freid Chicken", cuisine: "American" }));
};

function SearchPage() {
  const [recipeList, setRecipeList] = useState<FoodSearch>();

  useEffect(() => {
    fetchRecipeEndpoint(setRecipeList);
  });

  return (
    <div className="container mt-6">
      <div className="columns">
        {recipeList?.results.forEach(() => (
          <div className="column">
            <Recipe />
          </div>
        ))}
      </div>
    </div>
  );
}

export default SearchPage;
