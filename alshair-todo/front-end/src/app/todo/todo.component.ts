import { Component, OnInit } from '@angular/core';
import { TodoService } from '../_services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  public newFood;
  public foods;

  constructor(
    private todoService: TodoService
  ) { }

  ngOnInit(): void {
    this.todoService.getAll().subscribe(returnFoods => {
    this.foods = returnFoods.docs;
    });
  }

  saveName(): void {
    this.todoService.create(this.newFood).subscribe(saveFood => {
      this.foods.push(saveFood);
    });
  }

}
