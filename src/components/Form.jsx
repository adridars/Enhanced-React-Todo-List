import React from "react";

function Form({
  inputTextHandler,
  inputText,
  submitHandler,
  choreFilter,
  comAndUncom,
  filterOption,
}) {
  if (
    comAndUncom /*&& (filterOption === "all" || "uncompleted" || "trash-can")*/
  ) {
    return (
      <form>
        <input
          type="text"
          value={inputText}
          onChange={inputTextHandler}
          className="todo-input"
        />
        <button className="todo-button" type="submit" onClick={submitHandler}>
          <i className="fas fa-plus-square"></i>
        </button>
        <div className="select">
          <select onChange={choreFilter} name="todos" className="filter-todo">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
            <option value="trash-can">Trash-can</option>
          </select>
        </div>
      </form>
    );
  } else {
    return (
      <form>
        <input
          type="text"
          value={inputText}
          onChange={inputTextHandler}
          className="todo-input"
        />
        <button className="todo-button" type="submit" onClick={submitHandler}>
          <i className="fas fa-plus-square"></i>
        </button>
        <div className="select">
          <select onChange={choreFilter} name="todos" className="filter-todo">
            <option value="uncompleted">Uncompleted</option>
            {/* <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option> */}
          </select>
        </div>
      </form>
    );
  }
}

export default Form;
