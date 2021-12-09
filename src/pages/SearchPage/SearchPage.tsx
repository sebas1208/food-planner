import React, { useEffect, useState } from "react";
import Recipe from "../../components/Recipe";

import axios from "axios";
import { FoodSearch } from "../../types";

//TODO: refactor to a customAp
const url = "https://api.spoonacular.com/recipes/complexSearch?query=pasta&maxFat=25&number=2&apiKey=19a0f80d65da4fe5b8f9afd024b3f893";
const fetchRecipeEndpoint = async (setRecipeList: React.Dispatch<FoodSearch>) => {
    const recipeList = await axios.get<FoodSearch>(url);
    setRecipeList(recipeList.data);
};

function SearchPage() {
    const [recipeList, setRecipeList] = useState<FoodSearch>();

    useEffect(() => {
        fetchRecipeEndpoint(setRecipeList);
    });

    return (
        <div className="container mt-6">
            <div className="columns">
                {recipeList?.results.forEach(() =>
                    (<div className="column">
                        <Recipe />
                    </div>))
                }
            </div>
        </div>
    );
}

export default SearchPage;
