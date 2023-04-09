import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

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

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    RecipeServiceComponent,
    IngredientServiceComponent,
    RecipeComponent,
    RecipeInstructionsComponent
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
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
