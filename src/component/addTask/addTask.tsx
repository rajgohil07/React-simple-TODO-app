import moment from "moment";
import { useState } from "react";
import DateTimePicker from "react-datetime-picker";
import { IJsonTodoData } from "../../types/jsonTodoData";

export const AddTask = ({
  addTaskToJson,
  getUpdateTaskData,
  editTaskByID,
}: {
  addTaskToJson: Function;
  getUpdateTaskData: null | IJsonTodoData;
  editTaskByID: Function;
}) => {
  let initialTaskNameValue = "";
  let initialTaskCompletedSign = false;
  let initialTimeDate = new Date();

  // set state for update task
  if (getUpdateTaskData) {
    const { TaskName, IsDone, Date } = getUpdateTaskData;
    initialTaskNameValue = TaskName;
    initialTaskCompletedSign = IsDone;
    // convert date string into javascript date object
    const javascriptObjectDate = moment(Date, "MMMM Do YY, h:mm: A").toDate();
    initialTimeDate = javascriptObjectDate;
  }

  // task name state
  const [getTask, SetTask] = useState<string>(initialTaskNameValue);

  // task completed boolean state
  const [getTaskCompleted, SetTaskCompleted] = useState(
    initialTaskCompletedSign
  );

  // task date state
  const [getDateAndTime, setDateAndTime] = useState(initialTimeDate);

  // store error state
  const [IsError, changesError] = useState(false);

  // handle submit task form
  const submitTask = (
    e: any,
    taskName: string,
    IsTaskCompleted: boolean,
    taskDate: Date
  ) => {
    // prevent the default behavior of submit button
    e.preventDefault();
    const dateToString = moment(taskDate)
      .format("MMMM Do YY, h:mm: A")
      .toString();
    !getUpdateTaskData
      ? addTaskToJson(taskName, IsTaskCompleted, dateToString)
      : editTaskByID(
          getUpdateTaskData.ID,
          taskName,
          IsTaskCompleted,
          dateToString
        );
  };

  // button class name list
  const buttonClassNameList: string[] = ["btn", " btn-block"];

  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
  !getTask ? buttonClassNameList.push("btn-disabled") : null;

  const validateTaskName = () => {
    !getTask ? changesError(true) : changesError(false);
  };

  return (
    <form
      className="add-form"
      onSubmit={(e) => submitTask(e, getTask, getTaskCompleted, getDateAndTime)}
    >
      <div className="form-control">
        <label>Task name:</label>
        <input
          onChange={(e) => SetTask(e.target.value)}
          onBlur={validateTaskName}
          onKeyUp={validateTaskName}
          placeholder="Please your task name"
          type="text"
          value={getTask}
        />
        {IsError ? (
          <h5 className="ErrorRed">Please enter the task name</h5>
        ) : null}
      </div>
      <div className="form-control">
        <label>Select date and time:</label>
        <DateTimePicker onChange={setDateAndTime} value={getDateAndTime} />
      </div>
      <div className="form-control form-control-check">
        <input
          type="checkbox"
          checked={getTaskCompleted}
          onChange={() => SetTaskCompleted(!getTaskCompleted)}
        />
        <label>is task completed?</label>
      </div>
      <input
        type="submit"
        disabled={getTask ? false : true}
        className={buttonClassNameList.join(" ")}
        value={getUpdateTaskData ? "Edit task" : "Add task"}
      />
    </form>
  );
};
