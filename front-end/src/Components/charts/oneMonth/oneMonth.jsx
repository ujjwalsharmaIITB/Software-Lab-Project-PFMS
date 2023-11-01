import { useState } from "react";
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
} from "recharts";

const data = [
  {
    date: "1",
    amount: 2400,
  },
  {
    date: "2",
    amount: 2210,
  },
  {
    date: "4",
    amount: 2290,
  },
  {
    date: "10",
    amount: 2000,
  },
  {
    date: "15",
    amount: 2181,
  },
  {
    date: "20",
    amount: 2500,
  },
  {
    date: "30",
    amount: 2100,
  },
];

export const OneMonth = () => {
  const [month, setMonth] = useState("Month");

  return (
    <div className="chartOneMonth">
      <div className="oneMonthTitle">{month}</div>
      <div className="chartForOneMonth">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            width={600}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 5,
              left: 30,
              bottom: 5,
            }}
          >
            <Tooltip />
            <Line
              type="monotone"
              dataKey="amount"
              stroke="#8884d8"
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
