import { MdOutlineCancel } from "react-icons/md";
import { HiPencilAlt } from "react-icons/hi";
import { IoCheckmarkDoneSharp } from "react-icons/io5";

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
  getDisplayStatus: boolean;
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
      onClick={() => enableTaskOption()}
      //   onMouseLeave={disableTaskOption}
    >
      <div className="innerClassDiv">
        <h3>
          <div className="TaskParentDiv">
            {IsDone && <IoCheckmarkDoneSharp className="taskDone" />}
            {TaskName}
          </div>
          {/* <div className="innerButtons">
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
          </div> */}
        </h3>
        <p>{Date}</p>
        <h1>{IsDone}</h1>
        {getDisplayStatus && (
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
