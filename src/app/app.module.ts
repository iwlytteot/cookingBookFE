import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecipeServiceComponent } from './recipe-service/recipe-service.component';
import { IngredientServiceComponent } from './ingredient-service/ingredient-service.component';
import { RecipeInstructionsComponent } from './recipe/recipe-instructions/recipe-instructions.component';
import { RecipeComponent } from './recipe/recipe.component';

import {DataViewModule} from 'primeng/dataview';
import {TimelineModule} from 'primeng/timeline';

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
    TimelineModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
