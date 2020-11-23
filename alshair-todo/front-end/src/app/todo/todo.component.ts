import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  foods = ['burgers', 'fried chicken', 'steak', 'baked chicken', 'fried fish', 'sushi'];
  constructor() { }

  ngOnInit(): void {
  }

}
