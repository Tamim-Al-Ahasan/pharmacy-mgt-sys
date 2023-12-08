import React, { useState, useEffect } from 'react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const GraphAndChart = () => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     // Replace 'your-backend-api-endpoint' with your actual backend API endpoint
//     fetch('your-backend-api-endpoint')
//       .then((response) => response.json())
//       .then((data) => setData(data))
//       .catch((error) => console.error('Error fetching data:', error));
//   }, []);

  // Sample data
  const data = [
    { name: 'A', value: 10, amount: 25 },
    { name: 'B', value: 20, amount: 15 },
    { name: 'C', value: 30, amount: 30 },
    { name: 'D', value: 15, amount: 20 },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'row', width: '50%', height: '200px' }}>
      {/* Line Chart */}
      <ResponsiveContainer width="50%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="value" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>

      {/* Bar Chart */}
      <ResponsiveContainer width="50%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="amount" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default GraphAndChart;
