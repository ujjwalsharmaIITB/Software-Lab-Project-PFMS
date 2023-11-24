import React, { useEffect, useState } from "react";
import "./oneMonth.scss";

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
import axios from "axios";

// var lineChartData = [
//   // {
//   //   date: "1",
//   //   amount: 2400,
//   // },
//   // {
//   //   date: "2",
//   //   amount: 2210,
//   // },
//   // {
//   //   date: "4",
//   //   amount: 2290,
//   // },
//   // {
//   //   date: "10",
//   //   amount: 2000,
//   // },
//   // {
//   //   date: "15",
//   //   amount: 2181,
//   // },
//   // {
//   //   date: "20",
//   //   amount: 2500,
//   // },
//   // {
//   //   date: "30",
//   //   amount: 2100,
//   // },
// ];

const COLORS = ["#8884d8", "#82ca9d"];

export const OneMonth = () => {
  const [month, setMonth] = useState("Month");

  const [lineChartData, setLineChartData] = useState([]);

  const [pieChartData, setPieChartData] = useState([]);

  async function fetchData() {
    console.log("fetching data for one month");

    const response = await axios.get(
      "/api/getExpenses/" + sessionStorage.getItem("username") + "/1"
    );
    const allData = response.data.expenses;
    console.log("allData", allData);
  }

  useEffect(() => {
    fetchData();

    setPieChartData([
      // {
      //   name: "First 15 Days",
      //   value: lineChartData.slice(0, lineChartData.length/2).reduce((total, data) => total + data.amount, 0),
      // },
      // {
      //   name: "Next 15 Days",
      //   value: lineChartData.slice(lineChartData.length/2).reduce((total, data) => total + data.amount, 0),
      // },
    ]);
  }, []);

  return (
    <div className="chartOneMonth">
      <div className="oneMonthTitle">{month}</div>
      <div className="chartForOneMonth">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            width={600}
            height={300}
            data={lineChartData}
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
