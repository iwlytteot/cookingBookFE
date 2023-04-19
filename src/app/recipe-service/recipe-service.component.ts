import {Component, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Recipe} from "../model/recipe";
import {IngredientWithCount} from "../model/ingredientWithCount";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-recipe-service',
  templateUrl: './recipe-service.component.html',
  styleUrls: ['./recipe-service.component.css']
})
export class RecipeServiceComponent {

  constructor(private http: HttpClient) {}

  getRecipes() {
    return this.http.get<Recipe[]>( `${environment.apiUrl}/recipe`);
  }

  getRecipeIngredients(recipeId: number) {
    return this.http.get<IngredientWithCount[]>(`${environment.apiUrl}/recipe/${recipeId}/ingredient`);
  }

  uploadImage(recipeId: number, image: File) {
    let formData = new FormData();
    formData.append('img', image);

    return this.http.post(`${environment.apiUrl}/recipe/${recipeId}/image`, formData).subscribe();
  }

  addRecipe(recipe: Recipe) {
    return this.http.post<number>(`${environment.apiUrl}/recipe`, recipe);
  }
}
