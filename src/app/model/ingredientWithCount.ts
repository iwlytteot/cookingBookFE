import { Ingredient } from "./ingredient";
import {Unit} from "./unit";

export interface IngredientWithCount {
    id: number;
    ingredient: Ingredient;
    count: number;
    unit: Unit;
}