import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {DragDropModule} from '@angular/cdk/drag-drop';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecipeServiceComponent } from './recipe-service/recipe-service.component';
import { IngredientServiceComponent } from './ingredient-service/ingredient-service.component';
import { RecipeInstructionsComponent } from './recipe/recipe-instructions/recipe-instructions.component';
import { RecipeComponent } from './recipe/recipe.component';

import {DataViewModule} from 'primeng/dataview';
import {TimelineModule} from 'primeng/timeline';
import {DynamicDialogModule} from 'primeng/dynamicdialog';
import {TableModule} from 'primeng/table';
import {DividerModule} from 'primeng/divider';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {ChipsModule} from 'primeng/chips';
import {PickListModule} from 'primeng/picklist';
import {DialogModule} from 'primeng/dialog';
import {RatingModule} from 'primeng/rating';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {AddRecipeFormComponent} from './recipe/add-recipe-form/add-recipe-form.component';
import {ReactiveFormsModule} from "@angular/forms";
import { IngredientComponent } from './ingredient/ingredient.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipeServiceComponent,
    IngredientServiceComponent,
    RecipeComponent,
    RecipeInstructionsComponent,
    AddRecipeFormComponent,
    IngredientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DataViewModule,
    TimelineModule,
    DynamicDialogModule,
    BrowserAnimationsModule,
    TableModule,
    DividerModule,
    NgbModule,
    InputTextModule,
    ReactiveFormsModule,
    ButtonModule,
    ChipsModule,
    PickListModule,
    DialogModule,
    DragDropModule,
    RatingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
