import React from "react";

const ToDoLists = (props) => {
  return (
    <>
      <div className="todo_style">
        <li>{props.text}</li>
        {/* <i
          className="fa fa-times"
          aria-hidden="true"
          onClick={() => {
            props.onSelect(props.id);
          }}
        /> */}
        <button
          className="delete-btn"
          onClick={() => {
            props.onSelect(props.id);
          }}
        >
          <i className="fa fa-check" aria-hidden="true" />
        </button>
      </div>
    </>
  );
};

export default ToDoLists;
