import { useState } from "react";
import dataJSON from "./fake-backend-data-stub/todo-data-stub.json";

export const App = () => {
  const [taskData, setTaskData] = useState(dataJSON);

  return (
    <div className="App">
      <h1>Hello world from react!</h1>
    </div>
  );
};
