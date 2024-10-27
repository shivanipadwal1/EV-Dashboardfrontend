import React, { useEffect, useState } from 'react';
import { loadData } from '../services/DataService';
import Chart from '../components/Chart';
import Table from '../components/Table';

function Dashboard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    loadData().then(setData);
  }, []);

  return (
    <div>
      <h1>EV Dashboard</h1>
      <Chart data={data} />
      <Table data={data} />
    </div>
  );
}

export default Dashboard;