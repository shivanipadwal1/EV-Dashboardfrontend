import React from 'react';
import { Bar } from 'react-chartjs-2';

function Chart({ data }) {
  const chartData = {
    labels: data.map(d => d.Model),
    datasets: [{
      label: 'EV Count by Model',
      data: data.map(d => d.Count),
      backgroundColor: 'rgba(75,192,192,0.6)',
    }]
  };

  return <Bar data={chartData} />;
}

export default Chart;