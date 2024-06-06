import React, { useState } from "react";
import "./App.css";
import ToDoLists from "./ToDoLists";

const App = () => {
  const [inputList, setInputList] = useState("");
  const [items, setItems] = useState([]);

  const itemEvents = (event) => {
    setInputList(event.target.value);
  };

  const additem = () => {
    if (inputList.trim() !== "") {
      setItems((oldItems) => [...oldItems, inputList]);
      setInputList("");
    }
  };

  const deleteItems = (id) => {
    setItems((oldItems) => oldItems.filter((_, index) => index !== id));
  };

  return (
    <>
      <div className="main-div">
        <div className="center-div">
          <br />
          <h1>ToDo App</h1>
          <br />
          <div className="input-container">
            <input
              type="text"
              placeholder="Add a task"
              className="newtask"
              value={inputList}
              onChange={itemEvents}
            />
            <button className="addtaskbtn" onClick={additem}>
              +
            </button>
          </div>
          <ol>
            {items.map((itemval, index) => (
              <ToDoLists
                key={index}
                id={index}
                text={itemval}
                onSelect={deleteItems}
              />
            ))}
          </ol>
        </div>
      </div>
    </>
  );
};

export default App;
