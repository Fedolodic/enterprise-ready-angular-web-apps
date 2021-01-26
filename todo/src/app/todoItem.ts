export class TodoItem {
  // This is called a concise constructor (CC)
  constructor(public task: string, public complete: boolean = false) {
  }
}

// Without the CC, the equivalent code would look like this
/*
export class TodoItem {
  constructor(task: string, complete: boolean = false) {
    this.task = task;
    this.complete = complete;
  }

  task: string;
  complete: boolean;
}
* */
