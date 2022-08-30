import React from "react";
import Todo from "./Todo";

const TodoList = ({
  onTodoTrashCan,
  filteredList,
  onTodoComplete,
  onTodoRestore,
  onTodoDelete,
}) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filteredList.map((todo) => (
          <Todo
            key={todo.id}
            onTodoTrashCan={onTodoTrashCan}
            onTodoComplete={onTodoComplete}
            onTodoDelete={onTodoDelete}
            onTodoRestore={onTodoRestore}
            todo={todo} //passs down each one of the todo individually
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
