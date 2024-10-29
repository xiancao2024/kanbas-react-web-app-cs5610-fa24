import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, updateTodo, setTodo } from "./todosReducer";

export default function TodoForm() {
  const { todo } = useSelector((state: any) => state.todosReducer); // Access the state
  const dispatch = useDispatch();

  return (
    <div className="d-flex align-items-center mb-3">
      <input
        value={todo.title || ""} // Ensure the title is always a string
        onChange={(e) => dispatch(setTodo({ ...todo, title: e.target.value }))}
        className="form-control me-2" // Bootstrap class for styling input and margin
        placeholder="Enter todo"
        style={{ width: "26%" }} // Optional: set the width of the input
      />
      <button
        onClick={() => dispatch(updateTodo(todo))}
        id="wd-update-todo-click"
        className="btn btn-warning me-2" // Add Bootstrap class for a yellow "Update" button
        style={{ width: "100px" }} // Set a fixed width for the button
      >
        Update
      </button>

      <button
        onClick={() => dispatch(addTodo(todo))}
        id="wd-add-todo-click"
        className="btn btn-success me-2" // Add Bootstrap class for a green "Add" button
        style={{ width: "100px" }} // Set a fixed width for the button
      >
        Add
      </button>
    </div>
  );
}
