import { IJsonTodoData } from "../../types/jsonTodoData";
import { GiCrossMark } from "react-icons/gi";

export const Task = ({ TaskName, ID, IsDone, Date }: IJsonTodoData) => {
  return (
    <>
      <h1>{TaskName}</h1>
      <h1>{Date}</h1>
      <h1>{ID}</h1>
      <h1>{IsDone}</h1>
      <GiCrossMark className="redCrossMark" />
    </>
  );
};
