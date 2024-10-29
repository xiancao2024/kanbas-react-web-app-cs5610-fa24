import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, setTodo } from "./todosReducer";

export default function TodoItem({
  todo,
}: {
  todo: { id: string; title: string };
}) {
  const dispatch = useDispatch();

  return (
    <div key={todo.id} className="d-flex align-items-center mb-3">
      <input
        type="text"
        value={todo.title || ''} // Ensure the title is always a string
        onChange={(e) => dispatch(setTodo({ ...todo, title: e.target.value }))}
        className="form-control me-2"
        placeholder="Enter todo"
        style={{ width: '30%' }}
      />
      <button
        onClick={() => dispatch(deleteTodo(todo.id))}
        id="wd-delete-todo-click"
        className="btn btn-danger me-2 " // Bootstrap class for red "Delete" button
        style={{ width: "80px" }} // Optional: set fixed width for button
      >
        Delete
      </button>

      <button
        onClick={() => dispatch(setTodo(todo))}
        id="wd-set-todo-click"
        className="btn btn-primary me-2" // Bootstrap class for blue "Edit" button
        style={{ width: "80px" }} // Optional: set fixed width for button
      >
        Edit
      </button>
    </div>
  );
}
