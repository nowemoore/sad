import styles from "./views.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartLine, faBell, faFlask, faShuffle, faWaveSquare, faGaugeHigh, faArrowsRotate, faBullseye } from "@fortawesome/free-solid-svg-icons";

export default function Objective() {
  return (
    <section 
      id="objective" 
      className="section objective-section"
      style={{
        '--section-bg-image': 'url(https://images.unsplash.com/photo-1573537805874-4cedc5d389ce?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
        '--section-overlay': 'rgba(var(--overlay-rgb), 0.9)' 
      } as React.CSSProperties}>
      <div className="section-container">
        <h1 className="section-title from-bottom"><FontAwesomeIcon icon={faBullseye}></FontAwesomeIcon> Lab Objectives</h1>

        <p className="section-text from-bottom">
          AI is shaping decisions across society{" "}
          <span style={{ color: "var(--accent-sage)" }}>quietly</span>
          {" "}and{" "}
          <span style={{ color: "var(--accent-sage)" }}>at scale</span>
          . RAD Labs is dedicated to understanding and addressing the risks of gradual disempowerment in AI-augmented decision-making, with the goal of preserving human agency in the face of rapid technological change.
        </p>

        <div className={styles.objectiveGrid}>
          <div className={`${styles.objectiveCard} ${styles.cardDown}`}>
            <div className={styles.objectiveIcon}>
              <FontAwesomeIcon icon={faShuffle} />
            </div>
            <h2 className={styles.objectiveTitle} style={{fontSize: '1rem'}}>Model Human-AI Collaboration</h2>
            <p className={styles.objectiveText}>
              In order to understand the failure modes of human-AI collaboration on decision-making, it is crucial to clarify the <span style={{color: "var(--accent-sage)"}}>contributions of both humans and models</span>, and how they shift when messy real-world conditions push the system to its limits.
            </p>
          </div>

          <div className={`${styles.objectiveCard} ${styles.cardUp}`}>
            <div className={styles.objectiveIcon}>
              <FontAwesomeIcon icon={faGaugeHigh} />
            </div>
            <h2 className={styles.objectiveTitle} style={{fontSize: '1rem'}}>Quantify Risk from Gradual Disempowerment</h2>
            <p className={styles.objectiveText}>
              Develop <span style={{color: "var(--accent-sage)"}}>quantitative metrics</span> that warrant early warnings when various bits of human-AI collaboration start to break down, and understand how specific pain points require different interventions.
            </p>
          </div>

          <div className={`${styles.objectiveCard} ${styles.cardDown}`}>
            <div className={styles.objectiveIcon}>
              <FontAwesomeIcon icon={faArrowsRotate} />
            </div>
            <h2 className={styles.objectiveTitle} style={{fontSize: '1rem'}}>Iteratively Improve Tools and Share Findings</h2>
            <p className={styles.objectiveText}>
              RAD research isn't meant to stay in the lab but iteratively improve the tool and contribute to public knowledge by sharing <span style={{color: "var(--accent-sage)"}}>benchmarks</span>, <span style={{color: "var(--accent-sage)"}}>safeguards</span>, and data-backed <span style={{color: "var(--accent-sage)"}}>policy recommendations</span> with the wider academic community.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}