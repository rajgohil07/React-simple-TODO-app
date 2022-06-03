import { useEffect, useState } from "react";
import { dataJSON } from "./fake-backend-data-stub/todo-data-stub";
import { Tasks } from "./component/tasks/tasks";
import { AddTask } from "./component/addTask/addTask";
import { confirmAlert } from "react-confirm-alert";
import { getRandomID } from "./helper/herlperFunction";
import { IJsonTodoData } from "./types/jsonTodoData";
import "react-confirm-alert/src/react-confirm-alert.css";

export const App = () => {
  // set the state by storing the json
  const [taskData, setTaskData] = useState(dataJSON);

  // set to display add task
  const [expandButton, setExpandButton] = useState(false);

  // store edit task data into state
  const [getUpdateTaskData, setUpdateTaskData] = useState<null | IJsonTodoData>(
    null
  );

  // to check weather the task exist or not
  const IsTaskExist: boolean = taskData.length > 0 ? true : false;

  // example of component did mount
  useEffect(() => {
    taskData.length > 0 ? setExpandButton(expandButton) : setExpandButton(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [taskData]);

  // to remove the task by id
  const removeTaskByID = (TaskName: string, ID: string): void => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div className="custom-ui">
            <h1>Are you sure?</h1>
            <p>{`Are you sure to do delete '${TaskName}' task?`}</p>
            <button onClick={onClose}>No</button>
            <button
              onClick={() => {
                const getFilterTodoData = taskData.filter(
                  (singularTaskData) => singularTaskData.ID !== ID
                );
                // update the state
                setTaskData(getFilterTodoData);
                onClose();
              }}
            >
              Yes, Delete it!
            </button>
          </div>
        );
      },
    });
  };

  // mark the task as done
  const markTaskAsDoneToggle = (ID: string): void => {
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

  // add task to the json data
  const addTask = (
    taskName: string,
    IsTaskCompleted: boolean,
    taskDate: string
  ) => {
    const dataObject: IJsonTodoData = {
      ID: getRandomID(),
      TaskName: taskName,
      IsDone: IsTaskCompleted,
      Date: taskDate,
    };
    setTaskData([...taskData, dataObject]);
    setExpandButton(false);
  };

  // edit the task data
  const getTaskByIDForEditTask = (ID: string) => {
    const findTask: IJsonTodoData | undefined = taskData.find(
      (singularData) => singularData.ID === ID
    );
    if (findTask) {
      setExpandButton(true);
      setUpdateTaskData(findTask);
    }
    console.log("ID :>> ", ID);
  };

  // edit task and add
  const editTaskByID = (
    ID: string,
    taskName: string,
    IsTaskCompleted: boolean,
    taskDate: string
  ) => {
    const updateTaskData: IJsonTodoData[] = taskData.map((singularTaskData) =>
      singularTaskData.ID === ID
        ? {
            ...singularTaskData,
            TaskName: taskName,
            IsDone: IsTaskCompleted,
            Date: taskDate,
          }
        : singularTaskData
    );
    // update the state
    setTaskData(updateTaskData);
    setExpandButton(false);
  };

  return (
    <div className="App container">
      <div className="frontButton">
        <h1>Task Tracker</h1>
        <button className="btn" onClick={toggleTheButton}>
          {expandButton ? "Close task" : "Add task"}
        </button>
      </div>
      {expandButton ? (
        <AddTask
          getUpdateTaskData={getUpdateTaskData}
          addTaskToJson={addTask}
          editTaskByID={editTaskByID}
        />
      ) : null}
      {IsTaskExist ? (
        <Tasks
          taskData={taskData}
          removeTaskByID={removeTaskByID}
          markTaskAsDoneToggle={markTaskAsDoneToggle}
          editTask={getTaskByIDForEditTask}
        />
      ) : (
        <h3>Task does not exist! Please add tasks</h3>
      )}
    </div>
  );
};
