import styles from "../page.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarsProgress, faSeedling } from "@fortawesome/free-solid-svg-icons";

export default function Objective() {
  return (
    <section id="objective" className="section objective-section">
      <div className="section-container">
        <h1 className="section-title from-bottom">Objectives</h1>
        <p className="section-text from-bottom">
          SAD Labs was established to protect the <span style={{ color: "var(--accent-sage)" }}>future of human choice</span>. The plan to mitigate ambiguity in AI's influence on human agency in decision-making is to:
        </p>

        {/* objective list */}
        <div className={styles.horizontalGrid} style={{ gridTemplateColumns: '1fr 1fr' }}>
          <div className={styles.verticalGrid} style={{ gridTemplateRows: '2fr 1fr' }}>          
            <div className={styles.card}>
              <h2 className={styles.cardTitle}>
                <span className={styles.titleIcon}>
                  <FontAwesomeIcon icon={faBarsProgress} />
                </span>
                Develop Robust Monitoring Tools
              </h2>

              <p className={styles.cardText}>
                Imagine an engine that will analyse decision-makers' interactions with AI in real time and provide early warnings of overreliance <span style={{ color: "var(--accent-magenta-soft)" }}>before</span> it scales. SAD Labs' aim is to develop metrics to bring such tools a to life and help organisations verify that their use of AI remains for the better. 
              </p>
            </div> 
            <span></span> 
          </div>

          <div className={styles.verticalGrid} style={{ gridTemplateRows: '1fr 2fr' }}> 
            <span></span>         
            <div className={styles.card}>
              <h2 className={styles.cardTitle}>
                <span className={styles.titleIcon}>
                  <FontAwesomeIcon icon={faSeedling} />
                </span>
                Contribute to Research
              </h2>

              <p className={styles.cardText}>
                In pursuit of such tools, SAD Labs continues conducting thorough research on human-AI interaction, particularly in high-risk contexts. This work will contribute to evaluations, safeguards, and policies that <span style={{ color: "var(--accent-magenta-soft)" }}>preserve human agency</span> in AI-assisted decisions.
              </p>
            </div> 
          </div>
        </div>
      </div>
    </section>
  );
}
