import { Component, OnInit } from '@angular/core';
import { ToDo } from '../classes/to-do';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  todos: ToDo[] = [
    {
      id: 1,
      content: 'Annaffiare le piante',
      //isChecked: false,
    },
    {
      id: 2,
      content: 'Bere acqua',
      //isChecked: false,
    },
    {
      id: 3,
      content: 'Dar da mangiare al gatto',
      //isChecked: false,
    },
    {
      id: 4,
      content: 'Rifare il letto',
      //isChecked: false,
    },
    {
      id: 5,
      content: 'Fare la lavatrice',
      //isChecked: false,
    },
    {
      id: 6,
      content: 'Stendere i panni',
      //isChecked: false,
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  isChecked = false;

  currentStyles: Record<string, string> = {};

  setCurrentStyles() {
    this.currentStyles = {
      'text-decoration': this.isChecked ? 'line-through' : 'none',
      color: this.isChecked ? 'lightgray' : 'black',
    };
  }

  checkedTodo(obj: ToDo) {
    this.isChecked = !this.isChecked;
    this.setCurrentStyles();
  }

  removeTodo(obj: ToDo) {
    let index = this.todos.indexOf(obj);
    this.todos.splice(index, 1);
  }
}
