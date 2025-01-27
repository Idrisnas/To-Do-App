import React, { useState } from "react";
import TodoList from "../TodoList";
import TodoModal from "../TodoModal";

const TodoItems = () => {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
    setErrorMessage("");
  };

  const handleAddTodo = () => {
    if (inputValue === "") {
      setErrorMessage("Please input a todo");
      return;
    }

    const todoExists = todos.some(
      (todo) => todo.text.toLowerCase() === inputValue.trim().toLowerCase()
    );
    if (todoExists) {
      setErrorMessage("This todo is already added!");
      return;
    }

    if (inputValue.trim()) {
      setTodos((prevState) => [
        ...prevState,
        { id: Date.now(), text: inputValue, completed: false },
      ]);
      setInputValue("");
      setIsModalOpen(false);
    }
  };

  const handleCompleteTodo = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  const handleDeleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const deleteCompleteTodo = () => {
    const updatedTodos = todos.filter((todo) => !todo.completed);
    setTodos(updatedTodos);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 py-10">
      <h2 className="text-3xl font-bold mb-5 text-blue-600 text-center">
        Welcome, Click the button below to add a Todo
      </h2>

      <button
        onClick={openModal}
        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-5"
      >
        Add Todo
      </button>

      <TodoList
        todos={todos}
        handleCompleteTodo={handleCompleteTodo}
        handleDeleteTodo={handleDeleteTodo}
        deleteCompleteTodo={deleteCompleteTodo}
      />

      {/* Modal to add new todo */}
      {isModalOpen && (
        <TodoModal
          inputValue={inputValue}
          handleChange={handleChange}
          handleAddTodo={handleAddTodo}
          closeModal={closeModal}
          errorMessage={errorMessage}
        />
      )}
    </div>
  );
};

export default TodoItems;
