import {IngredientWithCount} from "./ingredientWithCount";

export interface Recipe {
  id: number;
  name: string;
  description: string;
  portion: number;
  timeComplexity: { baseEstimate: string; additionalEstimate: string; }
  createTime: string;
  imageId: string;
  instructions: string[];
  ingredients: IngredientWithCount[];
}
