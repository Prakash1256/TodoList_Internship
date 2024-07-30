import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTask } from '../redux/actions';

const TaskList = () => {
  const dispatch = useDispatch();
  const tasks = useSelector(state => state.tasks);

  const handleDeleteTask = (id) => {
    dispatch(deleteTask(id));
  };

  return (
    <div className="task-list">
      {Object.keys(tasks).map(category => (
        <div key={category} className="category-section">
          <h3>{category.charAt(0).toUpperCase() + category.slice(1)}</h3>
          <ul>
            {tasks[category].map(task => (
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
      ))}
    </div>
  );
};

export default TaskList;
