import {Component} from '@angular/core';
import {DynamicDialogConfig} from "primeng/dynamicdialog";
import {Recipe} from "../../model/recipe";

@Component({
  selector: 'app-recipe-instructions',
  templateUrl: './recipe-instructions.component.html',
  styleUrls: ['./recipe-instructions.component.css']
})
export class RecipeInstructionsComponent {

  constructor(public dialogConfig: DynamicDialogConfig) {
    this.recipe = dialogConfig.data
  }

  recipe = {} as Recipe;
}
