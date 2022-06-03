import { MdOutlineCancel } from "react-icons/md";
import { HiPencilAlt } from "react-icons/hi";

export const Task = ({
  TaskName,
  ID,
  IsDone,
  Date,
  removeTaskByID,
  markTaskAsDoneToggle,
  editTask,
}: {
  TaskName: string;
  ID: string;
  IsDone: boolean;
  Date: string;
  removeTaskByID: Function;
  markTaskAsDoneToggle: Function;
  editTask: Function;
}) => {
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
          <div className="innerButtons">
            <div className="editIcon">
              <HiPencilAlt
                className="redCrossMark"
                onClick={() => editTask(ID)}
              />
            </div>
            <div>
              <MdOutlineCancel
                className="redCrossMark"
                onClick={() => removeTaskByID!(TaskName, ID)}
              />
            </div>
          </div>
        </h3>
        <p>{Date}</p>
        <h1>{IsDone}</h1>
      </div>
    </div>
  );
};
