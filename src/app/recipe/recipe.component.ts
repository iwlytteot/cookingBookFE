import {Component, OnDestroy, OnInit} from '@angular/core';
import {RecipeServiceComponent} from "../recipe-service/recipe-service.component";
import {Recipe} from "../model/recipe";
import {DialogService, DynamicDialogRef} from "primeng/dynamicdialog";
import {RecipeInstructionsComponent} from "./recipe-instructions/recipe-instructions.component";

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss'],
  providers: [DialogService]
})
export class RecipeComponent implements OnInit, OnDestroy {

  constructor(private recipeService: RecipeServiceComponent, public dialogService: DialogService) { }

  recipes = [] as Recipe[];
  ref = {} as DynamicDialogRef;

  ngOnInit(): void {
    this.recipeService.getRecipes().subscribe((data) => {
      this.recipes = data;
    });
  }

  showInstructions(recipe: Recipe) {
    this.ref = this.dialogService.open(RecipeInstructionsComponent, {
      header: 'Instructions',
      width: '70%',
      contentStyle: {"overflow": "auto"},
      baseZIndex: 10000,
      maximizable: true,
      data: recipe,
      dismissableMask: true
    })
  }

  ngOnDestroy(): void {
    if (this.ref) {
      this.ref.close();
    }
  }
}
