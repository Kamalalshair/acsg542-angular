import { Component, OnInit } from '@angular/core';
import { TodoService } from '../_services/todo.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Food } from '../_models/food.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  public newFood;
  public foods;
  public editFood = new Food();

  constructor(
    private todoService: TodoService,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    this.todoService.getAll().subscribe(returnFoods => {
    this.foods = returnFoods.docs;
    });
  }

  saveFood(): void {
    this.todoService.create(this.newFood).subscribe(saveFood => {
      this.foods.push(saveFood);
    });
  }

  deleteFood(foodToDelete): void {
    this.todoService.destroy(foodToDelete).subscribe(success => {
      this.foods = this.todoService.removeFood(this.foods, foodToDelete);
    }, error => {
      console.log(error);
    });
  }

  newEditFood(content, food): void {
    this.editFood = food;

    this.modalService.open(content).result.then((result) => {
      this.saveEditedFood();
    }, (reason) => {});
  }

  saveEditedFood(): void {}

}
