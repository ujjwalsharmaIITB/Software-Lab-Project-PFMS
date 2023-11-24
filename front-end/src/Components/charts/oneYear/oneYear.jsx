import React, { useState, useEffect } from "react";
import "./oneYear.scss"; // Update the CSS file accordingly

import axios from "axios";
import {
  LineChart,
  ResponsiveContainer,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const generateLineChartData = (startDay, endDay, baseAmount) => {
  const data = [];
  for (let i = startDay; i <= endDay; i++) {
    data.push({
      date: `${i}`,
      amount: baseAmount + Math.floor(Math.random() * 500),
    });
  }
  return data;
};

const generatePieChartData = (lineChartData, trimesterName) => {
  return {
    name: trimesterName,
    value: lineChartData.reduce((total, data) => total + data.amount, 0),
  };
};

const COLORS = ["#8884d8", "#82ca9d", "#ffc658"];

export const YearData = () => {
  const [month, setMonth] = useState("Year");

  // Generate data for a year
  const janToMarData = generateLineChartData(1, 90, 2000);
  const aprToJunData = generateLineChartData(91, 180, 2200);
  const julToSepData = generateLineChartData(181, 273, 1800);
  const octToDecData = generateLineChartData(274, 365, 2100);

  // Generate pie chart data
  const pieChartData = [
    generatePieChartData(janToMarData, "Trimester 1"),
    generatePieChartData(aprToJunData, "Trimester 2"),
    generatePieChartData(julToSepData, "Trimester 3"),
    generatePieChartData(octToDecData, "Trimester 4"),
  ];

  async function fetchData() {
    console.log("fetching data for one year");

    const response = await axios.get(
      "/api/getExpenses/" + sessionStorage.getItem("username") + "/12"
    );
    const allData = response.data.expenses;
    console.log("allData", allData);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="chartYear">
      <div className="yearTitle">{month}</div>
      <div className="chartForYear">
        {/* Line Chart */}
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            width={800}
            height={400}
            data={[
              ...janToMarData,
              ...aprToJunData,
              ...julToSepData,
              ...octToDecData,
            ]}
            margin={{
              top: 5,
              right: 5,
              left: 30,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="amount"
              stroke="#8884d8"
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>

        {/* Pie Chart */}
        <ResponsiveContainer width="100%" height="100%">
          <PieChart width={400} height={300}>
            <Pie
              data={pieChartData}
              cx="50%"
              cy="50%"
              outerRadius={60}
              innerRadius={45}
              fill="#8884d8"
              dataKey="value"
              label
            >
              {pieChartData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
