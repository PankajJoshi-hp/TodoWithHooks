import React from "react";
import useFetch from "./customHooks/useFetch";
import Addtask from "./components/AddTodo";

const App = () => {
  const [data] = useFetch("https://dummyjson.com/todos?limit=10");

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-200 p-4">
      <Addtask data={data} />

      {/* Main container with a 70% width and centered content */}
      <div className="w-full h-full  lg:w-[70%] lg:h-auto bg-gray-400 shadow-lg rounded-sm p-6 overflow-y-auto">
        <ul className="space-y-2">
          {data &&
            data.todos.map((todo) => (
              <li
                className="text-sm text-gray-700 border-b border-gray-300 pb-1"
                key={todo.id}
              >
                {todo.todo}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
