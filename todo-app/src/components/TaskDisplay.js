import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask } from '../redux/actions';

const TaskDisplay = ({ tasks, category }) => {
  const dispatch = useDispatch();

  const handleDeleteTask = (id) => {
    dispatch(deleteTask(id));
  };

  if (!tasks) return null;

  return (
    <div className="task-display">
      <h2>{category.charAt(0).toUpperCase() + category.slice(1)} Tasks</h2>
      <ul>
        {tasks.map(task => (
          <li key={task.id} className="task-item">
            {task.text}
            <button 
              className="btn btn-danger btn-sm float-end" 
              onClick={() => handleDeleteTask(task.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskDisplay;
