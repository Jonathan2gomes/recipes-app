import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test Recipe', 'This is a simply test', 'https://img.elo7.com.br/product/main/22565B3/adesivo-parede-prato-comida-frango-salada-restaurante-lindo-adesivo-parede.jpg'),
    new Recipe('A test Recipe', 'This is a simply test', 'https://img.elo7.com.br/product/main/22565B3/adesivo-parede-prato-comida-frango-salada-restaurante-lindo-adesivo-parede.jpg')
  ];

 

  constructor() { }

  ngOnInit(): void {
  }

}
