import { useEffect, useState } from "react";
import dataJSON from "./fake-backend-data-stub/todo-data-stub.json";
import { Tasks } from "./component/tasks/tasks";
import { AddTask } from "./component/addTask/addTask";

export const App = () => {
  // set the state by storing the json
  const [taskData, setTaskData] = useState(dataJSON);

  // set to display add task
  const [expandButton, setExpandButton] = useState(false);

  // to check weather the task exist or not
  const IsTaskExist: boolean = taskData.length > 0 ? true : false;

  // example of component did mount
  useEffect(() => {
    taskData.length > 0 ? setExpandButton(expandButton) : setExpandButton(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [taskData]);

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

  // toggle the close task/add task button
  const toggleTheButton = () => setExpandButton(!expandButton);

  return (
    <div className="App">
      <button onClick={toggleTheButton}>
        {expandButton ? "Close task" : "Add task"}
      </button>
      {expandButton ? <AddTask /> : null}
      {IsTaskExist ? (
        <Tasks
          taskData={taskData}
          removeTaskByID={removeTaskByID}
          markTaskAsDoneToggle={markTaskAsDoneToggle}
        />
      ) : (
        <h1>Task does not exist</h1>
      )}
    </div>
  );
};
