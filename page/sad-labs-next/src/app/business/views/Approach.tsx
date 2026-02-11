import sharedStyles from "../../page.module.css";
import styles from "./views.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNodes, faCircleRadiation, faFlask, faHandshake } from "@fortawesome/free-solid-svg-icons";

export default function Approach() {
  return (
    <section 
      id="approach" 
      className="section approach-section"
      style={{
        '--section-bg-image': 'url(https://images.unsplash.com/photo-1663427929868-3941f957bb36?q=80&w=2232&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
        '--section-overlay': 'rgba(var(--overlay-rgb), 0.7)' 
      } as React.CSSProperties}
    >
      <div className="section-container">
        <h1 className="section-title from-bottom"><FontAwesomeIcon icon={faFlask}></FontAwesomeIcon> Future-Ready Monitoring for AI Risk</h1>
        <p className="section-text from-bottom">
          Standard monitoring relies on intuition and experience, but the risks AI poses are <span style={{color: "var(--accent-magenta)"}}>unprecedented</span>. Unexpected, emerging, and seemingly minor risks that scale exponentially remain overlooked. RAD approach, grounded in scientifically unique methodology, mitigates that by paying attention to: 
        </p>

        <div className={styles.featureGrid}>
          <div className={styles.featureItem}>
            <div className={styles.featureIcon}>
              <FontAwesomeIcon icon={faHandshake} />
            </div>
            <h2 className={styles.featureTitle}>Human-AI System Tracking</h2>
            <p className={styles.featureText}>
              Standard tools check AI in isolation. RAD tracks the decision-making system as a whole, measuring both AI and human behaviour to <span style={{color: "var(--accent-magenta-soft)"}}>catch collaborative collapse</span>.
            </p>
          </div>

          <div className={styles.featureItem}>
            <div className={styles.featureIcon}>
              <FontAwesomeIcon icon={faCircleRadiation} />
            </div>
            <h2 className={styles.featureTitle}>Context-Aware Intelligence</h2>
            <p className={styles.featureText}>
              Not all decisions carry equal weight. RAD assesses human-AI collaboration <span style={{color: "var(--accent-magenta-soft)"}}>across compromising conditions</span>, revealing patterns characteristic of real-world scenarios.
            </p>
          </div>

          <div className={styles.featureItem}>
            <div className={styles.featureIcon}>
              <FontAwesomeIcon icon={faCircleNodes} />
            </div>
            <h2 className={styles.featureTitle}>Comprehensive Task Profiling</h2>
            <p className={styles.featureText}>
              Task-based analysis identifies patterns in how different <span style={{color: "var(--accent-magenta-soft)"}}>types of decisions</span> break down. RAD applies these insights to your contexts and delivers valuable recommendations quicker.
            </p>
          </div>
        </div>  
      </div>
    </section>
  );
}
