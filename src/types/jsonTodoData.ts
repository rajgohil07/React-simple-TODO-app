export interface IJsonTodoData {
  ID: number;
  TaskName: string;
  IsDone: boolean;
  Date: string;
  removeTaskByID?: Function;
}
