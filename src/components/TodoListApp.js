import React, { useState } from 'react';
import './TodoListApp.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


export default function TodoListApp() {




  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState('');
  const [editIndex, setEditIndex] = useState(null); // State to store the index of the task being edited
  const [editedTask, setEditedTask] = useState(''); // State to store the edited task

  const addTask = () => {
    if (taskInput) {
      setTasks([...tasks, taskInput]);
      setTaskInput('');
    }
  };

  const deleteTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  const editTask = (index) => {
    setEditIndex(index);
    setEditedTask(tasks[index]);
  };

  const updateTask = () => {
    const newTasks = [...tasks];
    newTasks[editIndex] = editedTask;
    setTasks(newTasks);
    setEditIndex(null);
    setEditedTask('');
  };

  const markDone = (index) => {
    const newTasks = [...tasks];
    newTasks[index] = <s>{newTasks[index]}</s>;
    setTasks(newTasks);
  };

  return (
    <div className="container-fluid p-5 my-5">
      <div className='card p-5 border border-radius-2'>
        <div className='card-title px-5 text-center'>
          <h1>To-Do List App</h1>
        </div>
        <div className='card-body px-5 py-2'>
          <div className='d-flex justify-content-center m-3'>
            <input
              type="text"
              placeholder="Add a task..."
              value={taskInput}
              onChange={(e) => setTaskInput(e.target.value)}
              className='form-control'
            />
            <button onClick={addTask} className='btn btn-dark mx-3 bg-dark-gradient'>
              <i className="fa fa-plus" aria-hidden="true"></i>
            </button>
          </div>
          <div className='px-5 py-3 justify-content-between container-fluid'>
            <ul className='list-group '>
              {tasks.map((task, index) => (
                <li key={index} className='list-group-item px-5 border-0'>
                  <div className='d-flex justify-content-between'>
                    {editIndex === index ? (
                      <input
                        type="text"
                        value={editedTask}
                        onChange={(e) => setEditedTask(e.target.value)}
                        className='form-control'
                      />
                    ) : (
                      <p className='d-flex mr-5'>{task}</p>
                    )}
                    <div className='d-flex justify-content-end'>
                      {editIndex === index ? (
                        <button onClick={updateTask} className='btn btn-dark bg-success mx-2'>
                          <i className="fa fa-check" />
                        </button>
                      ) : (
                        <>
                          <button onClick={() => editTask(index)} className='btn btn-dark bg-info mx-2'>
                            <i className="fa fa-pencil" />
                          </button>
                          <button onClick={() => deleteTask(index)} className='btn btn-dark bg-danger mx-2'>
                            <i className="fa fa-trash" />
                          </button>
                          <button onClick={() => markDone(index)} className='btn btn-dark bg-success mx-2'>
                            <i className="fa fa-check" />
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
