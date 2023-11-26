/*
    Created by Ujjwal Sharma ,
    23M0837 , 23M0837@iitb.ac.in
    github@ujjwalsharmaIITB
*/

/*
    This Component is the Navigation Bar
    It displays the Logo , App Name , Username
*/

import React, { useState, useEffect } from "react";
import "./oneYear.scss"; 

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

const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff7300", "#d90000", "#0088aa", "#99cc33", "#b37feb", "#ffaa00", "#fcd202", "#008080", "#e3319d", "#994499", "#ff99cc", "#ffcc00"];

export const OneYear = () => {

  const [lineChartData, setLineChartData] = useState([]);
  const [pieChartData, setPieChartData] = useState([]);

// this code will fetch data from server and update the state variables
  async function fetchData() {
    console.log("fetching data for one year");

    const response = await axios.get(
      "/api/getExpenses/" + sessionStorage.getItem("username") + "/12"
    );
    const allData = response.data.expenses;
    console.log("year data", allData);
    setLineChartData(allData);
    setPieChartData(generatePieChartData(allData));
  }
// this code will run only once when the component is mounted
  useEffect(() => {
    fetchData();
  }, []);


  return (
    <div className="chartOneYear">
      <div className="oneYearTitle">1 Year</div>
      <div className="chartForOneYear">
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
          <PieChart width={400} height={400}>
            <Pie
              data={pieChartData}
              cx="50%"
              cy="50%"
              outerRadius={140}
              innerRadius={120}
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

const generatePieChartData = (data) => {
  const categories = [
    'food', 'transport', 'entertainment', 'shopping', 'miscellaneous', 'gift', 'investment',
    'education', 'healthcare', 'insurance', 'tax', 'rent', 'utilities',
  ];

  const categoryData = categories.map(category => {
    const totalAmount = data
      .filter(entry => entry.category.toLowerCase() === category.toLowerCase())
      .reduce((total, entry) => total + entry.amount, 0);

    return { name: category, value: totalAmount };
  });

  return categoryData;
};

