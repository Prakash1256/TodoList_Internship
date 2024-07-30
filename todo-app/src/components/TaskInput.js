import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/actions';

const TaskInput = () => {
  const [task, setTask] = useState('');
  const [category, setCategory] = useState('today'); 
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (task.trim()) {
      dispatch(addTask({ id: Date.now(), text: task, category }));
      setTask('');
      setCategory('today'); 
    }
  };

  return (
    <div
    style={{
      position:"relative",
      left:"450px",
    }}
    
     className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Add To Do"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <select
  style={{
  marginTop:"10px",  
  width: "100%",
  fontSize: "15px",  
  color: "#495057",
  backgroundColor: "white",  
  border: "1px solid #ced4da",
  borderRadius: "4px", 
  transition: "border-color 0.2s ease, box-shadow 0.2s ease",
}}


        className="form-control"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="today">Today</option>
        <option value="important">Important</option>
        <option value="planned">Planned</option>
        <option value="assigned">Assigned to Me</option>
      </select>
      <button
  className="btn btn-primary"
  onClick={handleAddTask}
  style={{
    backgroundColor: '#007bff', // Primary color
    color: '#fff', // Text color
    border: 'none', // Remove border
    padding: '10px 20px', // Vertical and horizontal padding
    borderRadius: '5px', // Rounded corners
    fontSize: '16px', // Font size
    cursor: 'pointer', // Pointer cursor on hover
    transition: 'background-color 0.3s', // Smooth transition for background color
    marginTop:"10px",
  }}
>
  Add Task
</button>
    </div>
  );
};

export default TaskInput;
