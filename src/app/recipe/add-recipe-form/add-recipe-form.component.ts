import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {IngredientServiceComponent} from "../../ingredient-service/ingredient-service.component";
import {Ingredient} from "../../model/ingredient";
import {IngredientWithCount} from "../../model/ingredientWithCount";

@Component({
  selector: 'app-add-recipe-form',
  templateUrl: './add-recipe-form.component.html',
  styleUrls: ['./add-recipe-form.component.css']
})
export class AddRecipeFormComponent implements OnInit {

  constructor(private ingredientService: IngredientServiceComponent) {}

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

  createRecipe() {}

  saveIngredientCount(ingredient: Ingredient, event: any) {
    let item = this.ingredientsCount.find(e => e.ingredient === ingredient);
    if (item === undefined) {
      return;
    }
    item.count = event;
  }

  onFileSelected(event: any) {
    this.recipeImage = event.target.files[0];
  }
}
