
import React, { useState, useRef, useEffect } from 'react';
import './App.css'; 
function App() {
  const [task, setTask] = useState('');
  const [todoList, setTodoList] = useState([]);
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus(); 
  }, []);

  const handleAdd = () => {
    const trimmedTask = task.trim();
    if (trimmedTask === '') {
      alert('Please enter a task.');
      return;
    }
    if (todoList.includes(trimmedTask)) {
      alert('Task already exists!');
      return;
    }

    const updatedList = [...todoList, trimmedTask].sort();
    setTodoList(updatedList);
    setTask('');
    inputRef.current.focus();
  };

  const handleDelete = (index) => {
    const updatedList = [...todoList];
    updatedList.splice(index, 1);
    setTodoList(updatedList);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAdd();
    }
  };

  return (
    <div className="app-container">
      <h1 className="app-header">My To-Do List</h1>
      <div className="input-container">
        <input
          type="text"
          ref={inputRef}
          value={task}
          onChange={(e) => setTask(e.target.value)}
          onKeyDown={handleKeyPress}
          placeholder="Add a new task"
          className="task-input"
        />
        <button onClick={handleAdd} className="add-btn">
          Add Task
        </button>
      </div>
      
      <ul className="todo-list">
        {todoList.map((item, index) => (
          <li key={index} className="todo-item">
            <span>{item}</span>
            <button
              onClick={() => handleDelete(index)}
              className="delete-btn"
            >
              &#10060;


            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
