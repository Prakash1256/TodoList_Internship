
import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import 'chart.js/auto';

const TaskChart = ({ totalTasks, doneTasks }) => {
  const pendingTasks = totalTasks - doneTasks;

  const data = {
    labels: ['Pending', 'Done'],
    datasets: [
      {
        data: [pendingTasks, doneTasks],
        backgroundColor: ['#66bb6a', '#004d40'],
      },
    ],
  };

  const options = {
    cutoutPercentage: 70,
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          usePointStyle: true,
        },
      },
    },
  };

  return (
    <div style={{ width: '200px', height: '200px', position: 'relative' }}>
      <h3 style={{color:"white",fontWeight:"bold"}}>Today Tasks</h3>
      <h1>{totalTasks}</h1>
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default TaskChart;
