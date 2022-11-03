export class ToDo {
  id: number;
  content: string;
  check: string;
  constructor(id: number, content: string, check: string) {
    this.id = id;
    this.content = content;
    this.check = check;
  }
}
