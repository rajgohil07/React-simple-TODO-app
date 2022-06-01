import { useState } from "react";
import dataJSON from "./fake-backend-data-stub/todo-data-stub.json";
import { Tasks } from "./component/tasks/task";

export const App = () => {
  const [taskData, setTaskData] = useState(dataJSON);

  return (
    <div className="App">
      <Tasks taskData={taskData} />
    </div>
  );
};
