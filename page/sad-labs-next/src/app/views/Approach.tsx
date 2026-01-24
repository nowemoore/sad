import styles from "../page.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNodes, faCircleRadiation } from "@fortawesome/free-solid-svg-icons";

export default function Approach() {
  return (
    <section id="approach" className="section approach-section">
      <div className="section-container">
        <h1 className="section-title from-bottom">In Search of the Solution</h1>
        <p className="section-text from-bottom">
          Identifying metrics for gradual disempowerment depends on distinguishing helpful AI-augmented decision-making from harmful displacement of choice. <span style={{ color: "var(--accent-sage)" }}>SAD Labs proposes two methods for an effective investigative model:</span>
        </p>
        <div className={styles.horizontalGrid} style={{ gridTemplateColumns: '1fr 1fr' }}>
          <div className={styles.approachItem}>
            <div className={styles.approachIcon}>
              <FontAwesomeIcon icon={faCircleNodes} />
            </div>
            <h2 className={styles.approachTitle}>Scalable Task Profiling</h2>
            <p className={styles.approachText}>
              Rather than reinventing metrics for every scenario, identifying shared features of tasks allows for the development of <span style={{ color: "var(--accent-magenta-soft)" }}>adaptable, scalable measurements</span> that can be tailored to specific decision-making contexts later on.
            </p>
          </div>

          <div className={styles.approachItem}>
            <div className={styles.approachIcon}>
              <FontAwesomeIcon icon={faCircleRadiation} />
            </div>
            <h2 className={styles.approachTitle}>Prioritising Critical Contexts</h2>
            <p className={styles.approachText}>The most important decisions rarely happen under ideal conditions. Focusing on decisions made under judgment-impairing conditions (time pressure, ambiguity, or rising risks, and more) can <span style={{ color: "var(--accent-magenta-soft)" }}>reveal important pain points more quickly</span>.</p>
          </div>
        </div>     
      </div>
    </section>
  );
}
