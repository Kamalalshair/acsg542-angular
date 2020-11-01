import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-component',
  templateUrl: './todo-component.component.html',
  styleUrls: ['./todo-component.component.css']
})
export class TodoComponentComponent implements OnInit {

  foods = ['burgers', 'fried chicken', 'steak', 'baked chicken', 'fried fish', 'sushi'];
  constructor() { }

  ngOnInit(): void {
  }

}
