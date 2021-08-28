export interface FoodSearch {
    results: Array<FoodSearchResult>;
    offset: number;
    number: number;
    totalResult: number;
}

export interface FoodSearchResult {
    id: number;
    title: string;
    image: string;
    imageType: string;
}

export interface Recipe {
    vegetarian:               boolean;
    vegan:                    boolean;
    glutenFree:               boolean;
    dairyFree:                boolean;
    veryHealthy:              boolean;
    cheap:                    boolean;
    veryPopular:              boolean;
    sustainable:              boolean;
    weightWatcherSmartPoints: number;
    gaps:                     string;
    lowFodmap:                boolean;
    aggregateLikes:           number;
    spoonacularScore:         number;
    healthScore:              number;
    creditsText:              string;
    license:                  string;
    sourceName:               string;
    pricePerServing:          number;
    extendedIngredients:      ExtendedIngredient[];
    id:                       number;
    title:                    string;
    readyInMinutes:           number;
    servings:                 number;
    sourceUrl:                string;
    image:                    string;
    imageType:                string;
    summary:                  string;
    cuisines:                 any[];
    dishTypes:                string[];
    diets:                    string[];
    occasions:                any[];
    winePairing:              WinePairing;
    instructions:             string;
    analyzedInstructions:     AnalyzedInstruction[];
    originalId:               number;
    spoonacularSourceUrl:     string;
}

export interface AnalyzedInstruction {
    name:  string;
    steps: Step[];
}

export interface Step {
    number:      number;
    step:        string;
    ingredients: Ent[];
    equipment:   Ent[];
}

export interface Ent {
    id:            number;
    name:          string;
    localizedName: string;
    image:         string;
}

export interface ExtendedIngredient {
    id:              number;
    aisle:           string;
    image:           string;
    consistency:     string;
    name:            string;
    nameClean:       string;
    original:        string;
    originalString:  string;
    originalName:    string;
    amount:          number;
    unit:            string;
    meta:            string[];
    metaInformation: string[];
    measures:        Measures;
}

export interface Measures {
    us:     Metric;
    metric: Metric;
}

export interface Metric {
    amount:    number;
    unitShort: string;
    unitLong:  string;
}

export interface WinePairing {
}

