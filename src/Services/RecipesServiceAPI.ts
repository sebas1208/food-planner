import axios from "axios";
import { ComplexSearchQuery, FoodSearch } from "../types";

const complexSearch = (query: ComplexSearchQuery) => {
    const url = new URL(`${import.meta.env.VITE_SPOONACULAR_URL}/recipes/complexSearch`)

    Object.entries(query).forEach(([key, value]) => url.searchParams.append(key, value))

    url.searchParams.append('apiKey', import.meta.env.VITE_API_KEY as string);

    return axios.get<FoodSearch>(url.href);
}

export {
    complexSearch
}
