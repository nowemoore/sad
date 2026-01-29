"use client";

import styles from "../demo.module.css";
import { 
  PieChart, Pie, Cell, 
  BarChart, Bar, XAxis, YAxis, 
  LineChart, Line, 
  ResponsiveContainer 
} from "recharts";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faArrowCircleUp, faHeart} from "@fortawesome/free-solid-svg-icons";

// Fake data
const pieData = [
  { name: "Healthy", value: 68 },
  { name: "At Risk", value: 22 },
  { name: "Critical", value: 10 },
];

const barData = [
  { name: "recommendations", score: 85 },
  { name: "prioritisation", score: 72 },
  { name: "risk assessment", score: 91 },
  { name: "quality review", score: 64 },
  { name: "impact forecasting", score: 78 },
  { name: "executive decisions", score: 88 },
];

const lineData = [
  { week: "W1", decisions: 98 },
  { week: "W2", decisions: 112 },
  { week: "W3", decisions: 89 },
  { week: "W4", decisions: 142 },
  { week: "W5", decisions: 156 },
  { week: "W6", decisions: 134 },
];

const COLORS = ["#6dbaa1", "#ff9dff", "#bd48b6"];

export default function Home() {
  return (
    <div>
      <h2 style={{ fontSize: "1.5rem", fontWeight: 600, color: "var(--text-primary)", marginBottom: "1rem" }}>
        Ovarall Status: <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon> Healthy
      </h2>

      {/* Top card - Pie Chart */}
      <div className={styles.horizontalGrid} style={{ gridTemplateColumns: "1fr" }}>
        <div className={styles.card}>
          <h3 className={styles.cardTitle}>Overreliance Levels over Time</h3>
          <p className={styles.cardText}>
            <FontAwesomeIcon icon={faArrowCircleUp}></FontAwesomeIcon> 35% from last week
          </p>
          <div style={{ width: "100%", height: 200, marginTop: "1rem" }}>
            <ResponsiveContainer>
              <LineChart data={lineData}>
                <XAxis 
                  dataKey="week" 
                  tick={{ fill: "#cfcac2", fontSize: 12 }}
                  axisLine={false}
                  tickLine={false}
                />
                <YAxis hide />
                <Line 
                  type="monotone" 
                  dataKey="decisions" 
                  stroke="#6dbaa1" 
                  strokeWidth={2}
                  dot={{ fill: "#6dbaa1", strokeWidth: 0, r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className={styles.horizontalGrid}>
        {/* Bottom left card - Bar Chart */}
        <div className={styles.card}>
          <h3 className={styles.cardTitle}>Task Category</h3>
          <p className={styles.cardText}>Here come types of calls AI makes at your institution.</p>
          <div style={{ width: "100%", height: 180, marginTop: "1rem", fontFamily: "inherit" }}>
            <ResponsiveContainer>
              <BarChart data={barData} layout="vertical">
                <XAxis type="number" hide />
                <YAxis 
                  type="category" 
                  dataKey="name" 
                  tick={{ fill: "#cfcac2", fontSize: 12 }} 
                  axisLine={false}
                  tickLine={false}
                  width={150}
                />
                <Bar 
                  dataKey="score" 
                  fill="#6dbaa1" 
                  radius={[0, 4, 4, 0]}
                  barSize={12}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Bottom right card - Line Chart */}
        <div className={styles.card}>
          <h3 className={styles.cardTitle}>Recent Activity</h3>
          <p className={styles.cardText}>142 decisions this week</p>
          <div style={{ width: "100%", height: 180, marginTop: "1rem" }}>
            <ResponsiveContainer>
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  innerRadius={50}
                  outerRadius={80}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}