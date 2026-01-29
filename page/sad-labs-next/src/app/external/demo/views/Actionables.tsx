"use client";

import styles from "../demo.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faRocket,
  faCheckCircle,
  faHourglass,
  faChevronCircleRight,
  faCircleQuestion
} from "@fortawesome/free-solid-svg-icons";

// Fake data
const recommendations = [
  { id: 1, title: "Review high-risk decisions in Operations team", priority: "High", status: "pending" },
  { id: 2, title: "Implement verification step for financial forecasts", priority: "Medium", status: "pending" },
  { id: 3, title: "Schedule training on AI oversight best practices", priority: "Medium", status: "pending" },
  { id: 4, title: "Audit recommendation system outputs weekly", priority: "Low", status: "pending" },
];

const trackedActions = [
  { id: 1, title: "Added human review for executive decisions", date: "Jan 15", status: "completed" },
  { id: 2, title: "Reduced AI autonomy in risk assessment", date: "Jan 18", status: "completed" },
  { id: 3, title: "Implementing decision logging system", date: "Jan 22", status: "in-progress" },
];

export default function Actionables() {
  return (
    <div>
      <h2 style={{ fontSize: "1.5rem", fontWeight: 600, color: "var(--text-primary)", marginBottom: "1rem" }}>
        Actionables: <FontAwesomeIcon icon={faRocket} /> 4 Pending
      </h2>

      {/* Top card - Recommendations */}
      <div className={styles.horizontalGrid} style={{ gridTemplateColumns: "1fr" }}>
        <div className={styles.card}>
          <h3 className={styles.cardTitle}>Recommendations</h3>
          <p className={styles.cardText}>Suggested actions based on your exposure analysis, ordered by priority.</p>
          
          <div style={{ marginTop: "1rem", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {recommendations.map((item) => (
              <div 
                key={item.id} 
                style={{ 
                  display: "flex", 
                  alignItems: "center", 
                  justifyContent: "space-between",
                  padding: "0.75rem",
                  borderRadius: "0.5rem",
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.06)"
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                  {/* 1. Priority at the beginning */}
                  <span style={{ 
                    fontSize: "0.65rem", 
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                    fontWeight: 700,
                    padding: "0.2rem 0.4rem", 
                    borderRadius: "0.25rem",
                    minWidth: "55px",
                    textAlign: "center",
                    background: item.priority === "High" ? "rgba(189,72,182,0.2)" : 
                                item.priority === "Medium" ? "rgba(255,157,255,0.15)" : "rgba(109,186,161,0.15)",
                    color: item.priority === "High" ? "#ff9dff" : 
                          item.priority === "Medium" ? "#ff9dff" : "#6dbaa1"
                  }}>
                    {item.priority}
                  </span>

                  {/* 2. The Title */}
                  <span style={{ color: "var(--text-primary)", fontSize: "0.9rem" }}>{item.title}</span>
                </div>

                {/* 3. The "Tell me why" button at the end */}
                <button 
                  title="Tell me why"
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    color: "var(--text-tertiary)",
                    padding: "4px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "color 0.2s ease"
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent-sage)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-tertiary)")}
                >
                  <FontAwesomeIcon icon={faCircleQuestion} style={{ fontSize: "1rem" }} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom row */}
      <div className={styles.horizontalGrid}>
        {/* Tracked Actions */}
        <div className={styles.card}>
          <h3 className={styles.cardTitle}>Tracked Actions</h3>
          <p className={styles.cardText}>2 recent changes <FontAwesomeIcon icon={faCheckCircle}></FontAwesomeIcon> implemented and 1 change <FontAwesomeIcon icon={faHourglass}></FontAwesomeIcon> waiting for review.</p>
          
          <div style={{ marginTop: "1rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            {trackedActions.map((item) => (
              <div 
                key={item.id} 
                style={{ 
                  display: "flex", 
                  alignItems: "center", 
                  justifyContent: "space-between",
                  padding: "0.5rem 0",
                  borderBottom: "1px solid rgba(255,255,255,0.06)"
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <FontAwesomeIcon 
                    icon={item.status === "completed" ? faCheckCircle : faHourglass} 
                    style={{ 
                      color: item.status === "completed" ? "#6dbaa1" : "#ff9dff",
                      fontSize: "0.8rem"
                    }} 
                  />
                  <span style={{ color: "var(--text-secondary)", fontSize: "0.85rem" }}>{item.title}</span>
                </div>
                <span style={{ color: "var(--text-tertiary)", fontSize: "0.75rem" }}>{item.date}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className={styles.card}>
          <h3 className={styles.cardTitle}>Quick Actions</h3>
          <p className={styles.cardText}>Common admin made easier for you.</p>
          
          <div style={{ marginTop: "1rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            {["Generate report", "Schedule review", "Export data", "Contact support"].map((action, index) => (
              <button
                key={index}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "0.75rem",
                  borderRadius: "0.5rem",
                  background: "rgba(109,186,161,0.1)",
                  border: "1px solid hsla(161, 36%, 58%, 0.20)",
                  color: "#6dbaa1",
                  fontSize: "0.85rem",
                  cursor: "pointer",
                  transition: "all 0.2s ease"
                }}
              >
                <span>{action}</span>
                <FontAwesomeIcon icon={faChevronCircleRight} style={{ fontSize: "0.75rem" }} />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}