// The import keyword declares a dependency on the TodoItem class and specifies the code file that defines it
import { TodoItem } from "./todoItem";

export class TodoList {
  constructor(public user: string, private todoItems: TodoItem[] = []) {
    // no statements required
  }

  /* To not give unrestricted access to the array of TodoItem objects, items() is defined to return a read-only array.
  * So, if code later on attempts to modify the contents of the array, the TypeScript compiler will throw an error*/
  get items(): readonly TodoItem[] {
    return this.todoItems;
  }

  addItem(task: string) {
    this.todoItems.push(new TodoItem(task));
  }
}
