import { MdOutlineCancel } from "react-icons/md";
import { HiPencilAlt } from "react-icons/hi";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import { ITaskOption } from "../../types/TaskOptions";

export const Task = ({
  TaskName,
  ID,
  IsDone,
  Date,
  removeTaskByID,
  markTaskAsDoneToggle,
  editTask,
  getDisplayStatus,
  enableTaskOption,
  disableTaskOption,
}: {
  TaskName: string;
  ID: string;
  IsDone: boolean;
  Date: string;
  removeTaskByID: Function;
  markTaskAsDoneToggle: Function;
  editTask: Function;
  getDisplayStatus: ITaskOption;
  enableTaskOption: Function;
  disableTaskOption: Function;
}) => {
  let classNameList = "task";
  if (IsDone) {
    classNameList += " reminder";
  }
  return (
    <div
      className={classNameList}
      onDoubleClick={() => markTaskAsDoneToggle!(ID)}
      onMouseEnter={() => enableTaskOption(ID)}
      onMouseLeave={() => disableTaskOption()}
    >
      <div className="innerClassDiv">
        <h3>
          <div className="TaskParentDiv">
            {IsDone && <IoCheckmarkDoneSharp className="taskDone" />}
            {TaskName}
          </div>
        </h3>
        <p>{Date}</p>
        <h1>{IsDone}</h1>
        {getDisplayStatus.ID === ID && (
          <div className="innerButtons nestedInnerButtons">
            <div className="editIcon">
              <HiPencilAlt
                className="redCrossMark paddingClass"
                onClick={() => editTask(ID)}
              />
            </div>
            <div>
              <MdOutlineCancel
                className="redCrossMark paddingClass"
                onClick={() => removeTaskByID!(TaskName, ID)}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
