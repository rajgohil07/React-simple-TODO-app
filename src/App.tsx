import { useState } from "react";
import dataJSON from "./fake-backend-data-stub/todo-data-stub.json";
import { Tasks } from "./component/tasks/tasks";

export const App = () => {
  const [taskData, setTaskData] = useState(dataJSON);

  // to remove the task by id
  const removeTaskByID = (ID: number): void => {
    const getFilterTodoData = taskData.filter(
      (singularTaskData) => singularTaskData.ID !== ID
    );
    // update the state
    setTaskData(getFilterTodoData);
  };

  // mark the task as done
  const markTaskAsDoneToggle = (ID: number): void => {
    const toggleJsonDataByID = taskData.map((singularTaskData) =>
      singularTaskData.ID === ID
        ? { ...singularTaskData, IsDone: !singularTaskData.IsDone }
        : singularTaskData
    );
    // update the state
    setTaskData(toggleJsonDataByID);
  };

  return (
    <div className="App">
      <Tasks
        taskData={taskData}
        removeTaskByID={removeTaskByID}
        markTaskAsDoneToggle={markTaskAsDoneToggle}
      />
    </div>
  );
};
