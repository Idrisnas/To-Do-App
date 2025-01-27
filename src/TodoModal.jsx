import React from "react";

const TodoModal = ({
  inputValue,
  handleChange,
  handleAddTodo,
  closeModal,
  errorMessage,
}) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg w-96">
        <h2 className="text-xl font-bold mb-4">Add a New Todo</h2>

        {/* show the  error message  */}
        {errorMessage && (
          <div className="text-red-500 mb-4">{errorMessage}</div>
        )}

        {/*  Input */}
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="Enter your todo"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
        />

        <div className="flex justify-between">
          <button
            onClick={handleAddTodo}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Add Todo
          </button>
          <button
            onClick={closeModal}
            className="px-4 py-2 bg-gray-400 text-white rounded-lg hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoModal;
