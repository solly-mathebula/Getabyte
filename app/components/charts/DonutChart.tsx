'use client';

import React from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Cyber Security', value: 400 },
  { name: 'Cloud Eng.', value: 300 },
  { name: 'Data Analytics', value: 300 },
  { name: 'Testing', value: 200 },
  { name: 'App Dev.', value: 278 },
  { name: 'IoT', value: 189 },
];

const COLORS = ['#003366', '#004080', '#0059b3', '#0073e6', '#3399ff', '#66b2ff'];

const DonutChart = () => {
  return (
    <div className="w-full h-64">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DonutChart;
