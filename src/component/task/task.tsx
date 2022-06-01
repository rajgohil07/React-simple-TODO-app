import { IJsonTodoData } from "../../types/jsonTodoData";
import { GiCrossMark } from "react-icons/gi";

export const Task = ({
  TaskName,
  ID,
  IsDone,
  Date,
  removeTaskByID,
  markTaskAsDoneToggle,
}: IJsonTodoData) => {
  let classNameList = "task";
  if (IsDone) {
    classNameList += " reminder";
  }
  return (
    <div
      className={classNameList}
      onDoubleClick={() => markTaskAsDoneToggle!(ID)}
    >
      <div className="innerClassDiv">
        <h3>
          {TaskName}
          <GiCrossMark
            className="redCrossMark"
            onClick={() => removeTaskByID!(TaskName, ID)}
          />
        </h3>
        <p>{Date}</p>
        <h1>{IsDone}</h1>
      </div>
    </div>
  );
};
