import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {IngredientServiceComponent} from "../../ingredient-service/ingredient-service.component";
import {Ingredient} from "../../model/ingredient";
import {IngredientWithCount} from "../../model/ingredientWithCount";
import {Recipe} from "../../model/recipe";
import {RecipeServiceComponent} from "../../recipe-service/recipe-service.component";

@Component({
  selector: 'app-add-recipe-form',
  templateUrl: './add-recipe-form.component.html',
  styleUrls: ['./add-recipe-form.component.css']
})
export class AddRecipeFormComponent implements OnInit {

  constructor(private ingredientService: IngredientServiceComponent, private recipeService: RecipeServiceComponent) {}

  formGroup: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    portion: new FormControl('', Validators.required),
    baseTimeEstimate: new FormControl('', Validators.required),
    additionalEstimate: new FormControl('', Validators.required),
    instructions: new FormControl([], Validators.required),
    count: new FormControl('')
  });
  sourceIngredients= [] as Ingredient[];
  targetIngredients = [] as Ingredient[];
  ingredientsCount = [] as IngredientWithCount[];
  recipeImage = {} as File;
  ngOnInit(): void {
    this.ingredientService.getIngredients().subscribe(data => {
      this.sourceIngredients = data;
      this.sourceIngredients.forEach(x => {
        let ingredientWithCount = {} as IngredientWithCount;
        ingredientWithCount.ingredient = x;
        ingredientWithCount.count = 0;
        this.ingredientsCount.push(ingredientWithCount);
      })
    })
  }

  createRecipe() {
    if (!this.formGroup.valid) {
      Object.keys(this.formGroup.controls).forEach(key => {
        this.formGroup.get(key)?.markAsDirty();
      })
      return;
    }
    let recipe = {} as Recipe;
    recipe.name = this.formGroup.controls['name'].value;
    recipe.description = this.formGroup.controls['description'].value;
    recipe.portion = this.formGroup.controls['portion'].value;
    recipe.timeComplexity = { baseEstimate: this.formGroup.controls['baseTimeEstimate'].value,
      additionalEstimate: this.formGroup.controls['additionalEstimate'].value };
    recipe.instructions = this.formGroup.controls['instructions'].value;
    recipe.ingredients = this.getSelectedIngredients();

    let recipeID : number;
    this.recipeService.addRecipe(recipe).subscribe(r => {
      recipeID = r;
      if (this.recipeImage) {
        this.recipeService.uploadImage(recipeID, this.recipeImage);
      }
      location.reload();
    })
  }

  private getSelectedIngredients() : IngredientWithCount[] {
    let result = [] as IngredientWithCount[];
    this.ingredientsCount.forEach(v => {
      if (this.targetIngredients.includes(v.ingredient)) {
        result.push(v);
      }
    });
    return result;
  }

  saveIngredientCount(ingredient: Ingredient, event: any) {
    let item = this.ingredientsCount.find(e => e.ingredient === ingredient);
    if (item === undefined) {
      return;
    }
    item.count = event.target.value;
  }

  onFileSelected(event: any) {
    this.recipeImage = event.target.files[0];
  }
}
