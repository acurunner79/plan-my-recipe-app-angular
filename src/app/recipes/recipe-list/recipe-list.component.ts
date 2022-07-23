import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test.', 'https://img.freepik.com/premium-vector/cookbook-template-recipe-book-template-design_158274-369.jpg?w=2000')
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
