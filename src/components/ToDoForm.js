import React, { useState, useEffect, useRef } from "react";

function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : "");

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });

    setInput("");
  };

  return (
    <div>
      <form action="" className="todo-form" onSubmit={handleSubmit}>
        {props.edit ? (
          <div>
            <input
              type="text"
              placeholder="Update Your Task"
              value={input}
              name="text"
              className="todo-input edit"
              onChange={handleChange}
              ref={inputRef}
              autocomplete="off"
            />

            <button className="todo-add">Update</button>
          </div>
        ) : (
          <div>
            <input
              type="text"
              placeholder="Add Task Here"
              value={input}
              name="text"
              className="todo-input"
              onChange={handleChange}
              ref={inputRef}
            />

            <button className="todo-add">Add Task</button>
          </div>
        )}
      </form>
    </div>
  );
}

export default TodoForm;
