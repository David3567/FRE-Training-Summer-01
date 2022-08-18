export interface Todo {
  userId: number;
  id?: number;
  title: string;
  completed: boolean;
}
export interface TodoState {
  todolist: Todo[];
  error: string;
}

// export class Todo {
//   constructor(
//     public userId: number,
//     public id: number,
//     public title: string,
//     public completed: boolean
//   ) {}
// }
