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
      content: 'Annaffiare le piante',
      check: '',
    },
    {
      content: 'Bere acqua',
      check: '',
    },
    {
      content: 'Dar da mangiare al gatto',
      check: '',
    },
    {
      content: 'Rifare il letto',
      check: '',
    },
    {
      content: 'Fare la lavatrice',
      check: '',
    },
    {
      content: 'Stendere i panni',
      check: '',
    },
  ];

  txt: string = '';

  constructor() {}

  ngOnInit(): void {}

  miaClasse = 'unchecked';

  currentStyles: Record<string, string> = {};

  addTxt() {
    let obj = new ToDo(this.txt, '');
    this.todos.push(obj);
    this.txt = '';
  }

  checkTodo(i: number) {
    this.todos[i].check = this.todos[i].check === 'check' ? '' : 'check';
  }

  removeTodo(obj: ToDo) {
    let index = this.todos.indexOf(obj);
    this.todos.splice(index, 1);
  }
}
