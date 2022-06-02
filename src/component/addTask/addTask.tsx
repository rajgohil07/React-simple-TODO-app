import moment from "moment";
import { useState } from "react";
import DateTimePicker from "react-datetime-picker";

export const AddTask = ({ addTaskToJson }: { addTaskToJson: Function }) => {
  // task name state
  const [getTask, SetTask] = useState<string>("");

  // task completed boolean state
  const [getTaskCompleted, SetTaskCompleted] = useState(true);

  // task date state
  const [getDateAndTime, setDateAndTime] = useState(new Date());

  // store error state
  const [IsError, changesError] = useState(false);

  // handle submit task form
  const submitTask = (
    e: any,
    taskName: string,
    IsTaskCompleted: boolean,
    taskDate: Date
  ) => {
    e.preventDefault();
    addTaskToJson(
      taskName,
      IsTaskCompleted,
      moment(taskDate).format("MMMM Do YY, h:mm: A").toString()
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
        value="Add task"
      />
    </form>
  );
};
