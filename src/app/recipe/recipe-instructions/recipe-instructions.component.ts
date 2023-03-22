import {Component, OnInit} from '@angular/core';
import {DynamicDialogConfig} from "primeng/dynamicdialog";
import {Recipe} from "../../model/recipe";
import {RecipeServiceComponent} from "../../recipe-service/recipe-service.component";
import {IngredientWithCount} from "../../model/ingredientWithCount";

@Component({
  selector: 'app-recipe-instructions',
  templateUrl: './recipe-instructions.component.html',
  styleUrls: ['./recipe-instructions.component.css']
})
export class RecipeInstructionsComponent implements OnInit {

  constructor(public dialogConfig: DynamicDialogConfig, private recipeService: RecipeServiceComponent) {
    this.recipe = dialogConfig.data
  }

  recipe = {} as Recipe;
  recipeIngredients = {} as IngredientWithCount[];

  ngOnInit(): void {
    this.recipeService.getRecipeIngredients(this.recipe.id).subscribe((data) => {
      this.recipeIngredients = data;
    });
  }
}
