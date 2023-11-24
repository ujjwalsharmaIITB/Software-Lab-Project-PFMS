import React, { useState, useEffect } from "react";
import axios from "axios";
import "./sixMonths.scss"; // Update the CSS file accordingly

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

const generatePieChartData = (lineChartData, monthName) => {
  return {
    name: monthName,
    value: lineChartData.reduce((total, data) => total + data.amount, 0),
  };
};

const COLORS = [
  "#8884d8",
  "#82ca9d",
  "#ffc658",
  "#0088FE",
  "#00C49F",
  "#FFBB28",
];

export const SixMonths = () => {
  const [month, setMonth] = useState("6Months");

  const [lineChartData, setLineChartData] = useState([]);

  // Generate data for six months
  const month1Data = generateLineChartData(1, 30, 2000);
  const month2Data = generateLineChartData(31, 60, 2200);
  const month3Data = generateLineChartData(61, 90, 1800);
  const month4Data = generateLineChartData(91, 120, 2100);
  const month5Data = generateLineChartData(121, 151, 2400);
  const month6Data = generateLineChartData(152, 182, 2000);

  // Generate pie chart data
  const pieChartData = [
    generatePieChartData(month1Data, "Month 1"),
    generatePieChartData(month2Data, "Month 2"),
    generatePieChartData(month3Data, "Month 3"),
    generatePieChartData(month4Data, "Month 4"),
    generatePieChartData(month5Data, "Month 5"),
    generatePieChartData(month6Data, "Month 6"),
  ];

  async function fetchData() {
    console.log("fetching data for one year");

    const response = await axios.get(
      "/api/getExpenses/" + sessionStorage.getItem("username") + "/6"
    );
    const allData = response.data.expenses;
    console.log("allData", allData);
    setLineChartData(allData);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="chartSixMonths">
      <div className="sixMonthsTitle">{month}</div>
      <div className="chartForSixMonths">
        {/* Line Chart */}
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            width={600}
            height={300}
            data={[...lineChartData]}
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
