import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Ingredient} from "../model/ingredient";
import {IngredientServiceComponent} from "../ingredient-service/ingredient-service.component";

@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['../recipe/add-recipe-form/add-recipe-form.component.css']
})
export class IngredientComponent {

  constructor(private ingredientService: IngredientServiceComponent) {}

  formGroup: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    weight: new FormControl('', Validators.required),
  });

  createIngredient() {
    if (!this.formGroup.valid) {
      Object.keys(this.formGroup.controls).forEach(key => {
        this.formGroup.get(key)?.markAsDirty();
      })
      return;
    }
    let ingredient = {} as Ingredient;
    ingredient.name = this.formGroup.controls['name'].value;
    ingredient.weight = this.formGroup.controls['weight'].value;
    this.ingredientService.addIngredient(ingredient);
    location.reload();
  }
}
