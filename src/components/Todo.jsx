import React from "react";

const Todo = ({
  todo,
  onTodoTrashCan,
  onTodoComplete,
  onTodoRestore,
  onTodoDelete,
}) => {
  if (todo.trash) {
    return (
      <div className={`todo ${todo.completed && "completed"}`}>
        <li className="todo-item">{todo.text}</li>
        <button
          className="retore-btn"
          onClick={() => {
            onTodoRestore(todo.id);
          }}
        >
          <i className="fa fa-undo"></i>
        </button>
        <button
          className="delete-btn"
          onClick={() => {
            onTodoDelete(todo.id);
          }}
        >
          <i className="fas fa-trash"></i>
        </button>
      </div>
    );
  } else {
    return (
      <div className={`todo ${todo.completed && "completed"}`}>
        <li className="todo-item">{todo.text}</li>
        <button
          className="complete-btn"
          onClick={() => {
            onTodoComplete(todo.id);
          }}
        >
          <i className="fas fa-check"></i>
        </button>
        <button
          className="remove-btn"
          onClick={() => {
            onTodoTrashCan(todo.id);
          }}
        >
          <i className="fa fa-times"></i>
        </button>
      </div>
    );
  }
};
export default Todo;
