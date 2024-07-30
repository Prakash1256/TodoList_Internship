import React ,{useState} from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import Sidebar from './components/Sidebar';
import './App.css';
import CustomNavbar from './components/CustomNavbar';
import TaskChart from './components/TaskChart';
import { useSelector } from 'react-redux';

const App = () => {
  const [activeCategory, setActiveCategory] = useState('today');
  const tasks = useSelector((state) => state.tasks);

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  const totalTasks = tasks[activeCategory].length;
  const doneTasks = tasks[activeCategory].filter(task => task.completed).length;

  return (
    <Provider store={store}>
      <CustomNavbar />

      <div className="App d-flex">
      <Sidebar activeCategory={activeCategory} handleCategoryClick={handleCategoryClick} />
        <div className="main-content p-4">
          <TaskInput />
          <TaskList />
        </div>
      </div>
      <TaskChart totalTasks={totalTasks} doneTasks={doneTasks} />
    </Provider>
    
  );
};

export default App;
