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
      check: '',
    },
    {
      id: 2,
      content: 'Bere acqua',
      check: '',
    },
    {
      id: 3,
      content: 'Dar da mangiare al gatto',
      check: '',
    },
    {
      id: 4,
      content: 'Rifare il letto',
      check: '',
    },
    {
      id: 5,
      content: 'Fare la lavatrice',
      check: '',
    },
    {
      id: 6,
      content: 'Stendere i panni',
      check: '',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  miaClasse = 'unchecked';

  currentStyles: Record<string, string> = {};

  checkTodo(i: number) {
    this.todos[i].check = this.todos[i].check === 'check' ? '' : 'check';
  }

  removeTodo(obj: ToDo) {
    let index = this.todos.indexOf(obj);
    this.todos.splice(index, 1);
  }
}
