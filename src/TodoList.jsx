import React from "react";

const TodoList = ({ todos, handleCompleteTodo, handleDeleteTodo, deleteCompleteTodo }) => {
  return (
    <div className="w-full max-w-md mt-5">
      <h3 className="text-2xl font-bold mb-3">Todos List</h3>

      <ul className="space-y-4">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className={`flex items-center justify-between p-4 border border-gray-300 rounded-lg shadow-sm ${
              todo.completed ? "bg-green-100" : "bg-white"
            }`}
          >
            <div className="flex items-center">
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => handleCompleteTodo(todo.id)}
                className="mr-2"
              />
              <span
                className={`${
                  todo.completed ? "line-through text-gray-500" : "text-gray-800"
                }`}
              >
                {todo.text}
              </span>
            </div>
            <button
              onClick={() => handleDeleteTodo(todo.id)}
              className="ml-4 px-2 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>

      {/*   delete all completed todos button */}
      {todos.some((todo) => todo.completed) && (
        <button
          onClick={deleteCompleteTodo}
          className="mt-5 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
        >
          Clear Completed Todos
        </button>
      )}
    </div>
  );
};

export default TodoList;
