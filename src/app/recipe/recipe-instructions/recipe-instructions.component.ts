import {Component} from '@angular/core';
import {DynamicDialogConfig} from "primeng/dynamicdialog";

@Component({
  selector: 'app-recipe-instructions',
  templateUrl: './recipe-instructions.component.html',
  styleUrls: ['./recipe-instructions.component.css']
})
export class RecipeInstructionsComponent {

  constructor(public dialogConfig: DynamicDialogConfig) {
    this.instructions = dialogConfig.data
  }

  instructions = [] as string[];
}
