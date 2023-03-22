import {Component, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Recipe} from "../model/recipe";
import {IngredientWithCount} from "../model/ingredientWithCount";

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

  recipes = {} as Recipe[];

  getRecipes() {
    return this.http.get<Recipe[]>('http://localhost:8080/recipe');
  }

  getRecipeIngredients(recipeId: number) {
    return this.http.get<IngredientWithCount[]>(`http://localhost:8080/recipe/${recipeId}/ingredient`);
  }

}
