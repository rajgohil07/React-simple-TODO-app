export interface IJsonTodoData {
  ID: string;
  TaskName: string;
  IsDone: boolean;
  Date: string;
  removeTaskByID?: Function;
  markTaskAsDoneToggle?: Function;
}
