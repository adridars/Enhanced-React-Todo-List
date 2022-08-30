import React, { useState, useEffect } from "react";
import "./App.css";

//importing components
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  //states
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [filterOption, setFilterOption] = useState("all");
  const [filteredList, setFilteredList] = useState([]);
  const [comAndUncom, setComAndUncom] = useState(false);

  useEffect(() => {
    filterHandler();
    optionHandler();
  }, [todos, filterOption]);

  //functions and events

  //Input form
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  //Create new Todo
  const submitHandler = function (e) {
    e.preventDefault();
    if (!inputText) {
      return;
    }
    setTodos([
      ...todos,
      {
        text: inputText,
        trash: false,
        completed: false,
        id: Date.now(),
      },
    ]);
    setInputText("");
  };

  //Select option menu
  const choreFilter = (e) => {
    setFilterOption(e.target.value);
  };

  //What to render in the list
  const optionHandler = () => {
    if (
      todos.find((item) => item.completed === true) ||
      todos.find((item) => item.trash === true)
    ) {
      setComAndUncom(true);
    } else {
      setComAndUncom(false);
    }
  };
  const filterHandler = function () {
    switch (filterOption) {
      case "completed":
        setFilteredList(
          todos.filter((it) => it.completed === true && it.trash === false)
        );
        break;
      case "uncompleted":
        setFilteredList(
          todos.filter((it) => {
            return it.completed === false && it.trash === false;
          })
        );
        break;
      case "all":
        setFilteredList(todos.filter((it) => it.trash === false));
        break;
      case "trash-can":
        setFilteredList(todos.filter((it) => it.trash === true));
        break;
    }
  };

  //Buttons Functions, completed, trash-can, delete, restore

  const handleTodoCompleted = (id) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }
      return todo;
    });

    setTodos(newTodos);
  };

  const handleTodosTrashCan = (id) => {
    //cambio el valor del id a trash:true
    const trashTodos = todos.map((el) => {
      if (el.id === id) {
        return {
          ...el,
          trash: !el.trash,
        };
      }
      return el;
    });

    //valuo los estados en sus nuevos valores
    setTodos(trashTodos);
  };
  const handleTodoDelete = function (id) {
    setTodos(todos.filter((item) => item.id !== id));
  };
  const handleTodoRestore = (id) => {
    const trashTodos = todos.map((el) => {
      if (el.id === id) {
        return {
          ...el,
          trash: !el.trash,
        };
      }
      return el;
    });
    //valuo los estados en sus nuevos valores
    setTodos(trashTodos);
  };

  return (
    <div className="App">
      <header>
        {" "}
        <h1>React Todo List!</h1>
      </header>
      <Form
        submitHandler={submitHandler}
        inputTextHandler={inputTextHandler}
        inputText={inputText}
        choreFilter={choreFilter}
        comAndUncom={comAndUncom}
        filterOption={filterOption}
      />
      <TodoList
        onTodoTrashCan={handleTodosTrashCan}
        onTodoComplete={handleTodoCompleted}
        filteredList={filteredList}
        onTodoRestore={handleTodoRestore}
        onTodoDelete={handleTodoDelete}
      />
    </div>
  );
}

export default App;
