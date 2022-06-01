import { IJsonTodoData } from "../../types/jsonTodoData";
import { Task } from "../task/task";

// reference https://stackoverflow.com/questions/39672807/types-in-object-destructuring
export const Tasks = ({
  taskData,
  removeTaskByID,
  markTaskAsDoneToggle,
}: {
  taskData: IJsonTodoData[];
  removeTaskByID: Function;
  markTaskAsDoneToggle: Function;
}) => {
  return (
    <>
      {taskData.map((singularTaskData) => {
        const { TaskName, ID, IsDone, Date } = singularTaskData;
        return (
          <Task
            key={ID}
            TaskName={TaskName}
            ID={ID}
            IsDone={IsDone}
            Date={Date}
            removeTaskByID={removeTaskByID}
            markTaskAsDoneToggle={markTaskAsDoneToggle}
          />
        );
      })}
    </>
  );
};
