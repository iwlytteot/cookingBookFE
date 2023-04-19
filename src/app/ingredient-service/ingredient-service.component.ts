import {Component, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Ingredient} from "../model/ingredient";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-ingredient-service',
  templateUrl: './ingredient-service.component.html',
  styleUrls: ['./ingredient-service.component.css']
})
export class IngredientServiceComponent {

  constructor(private http: HttpClient) {}

  getIngredients() {
    return this.http.get<Ingredient[]>(`${environment.apiUrl}/ingredient`);
  }

  addIngredient(ingredient: Ingredient) {
    this.http.post(`${environment.apiUrl}/ingredient`, ingredient).subscribe();
  }
}
