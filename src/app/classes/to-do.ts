export class ToDo {
  id: number;
  content: string;
  // isChecked: boolean;
  constructor(id: number, content: string, isChecked: boolean) {
    this.id = id;
    this.content = content;
    // this.isChecked = isChecked;
  }
}
