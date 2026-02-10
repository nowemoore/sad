import styles from "./views.module.css";

import ResearchTimeline from "../../components/ResearchTimeline";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNodes, faHandshake, faCircleRadiation, faFlask, faRoute } from "@fortawesome/free-solid-svg-icons";

export default function Approach() {
return (
    <section 
      id="approach" 
      className="section approach-section"
    >
      <div 
        className={styles.principlesSection}
        style={{
          '--section-bg-image': 'url(https://images.unsplash.com/photo-1480944657103-7fed22359e1d?q=80&w=2232&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
          '--section-overlay': 'rgba(0, 0, 0, 0.85)'
        } as React.CSSProperties}
      >
      <div className="section-container">
        <h1 className="section-title from-bottom"><FontAwesomeIcon icon={faFlask}></FontAwesomeIcon> Innovative Research Design</h1>
        <p className="section-text from-bottom">
          This research agenda tackles a complex measurement problem by breaking it into tractable components. The investigative model is built on <span style={{color: 'var(--accent-magenta-soft)'}}>three principles</span>:
        </p>

        <div className={styles.featureGrid} style={{ gridTemplateColumns: '1fr 1fr 1fr' }}>
          <div className={styles.featureItem}>
            <div className={styles.featureIcon}>
              <FontAwesomeIcon icon={faHandshake} />
            </div>
            <h2 className={styles.featureTitle}>Analysing Human-AI Systems</h2>
            <p className={styles.featureText}>
              Both models and humans can contribute to human-AI collaboration failures. This agenda weighs <span style={{color: 'var(--accent-magenta-soft)'}}>both sides of the equation</span>.
            </p>
          </div>

          <div className={styles.featureItem}>
            <div className={styles.featureIcon}>
              <FontAwesomeIcon icon={faCircleRadiation} />
            </div>
            <h2 className={styles.featureTitle}>Testing Challenging Conditions</h2>
            <p className={styles.featureText}>
              Decisions rarely happen under ideal conditions. This research evaluates human-AI collaboration under time pressure, high stakes, and ambiguity to capture <span style={{color: 'var(--accent-magenta-soft)'}}>realistic failure modes</span>.
            </p>
          </div>

          <div className={styles.featureItem}>
            <div className={styles.featureIcon}>
              <FontAwesomeIcon icon={faCircleNodes} />
            </div>
            <h2 className={styles.featureTitle}>Categorising Decisions by Types</h2>
            <p className={styles.featureText}>
              Decision types share structural characteristics regardless of domain. Task-based analysis identifies these patterns to build <span style={{color: 'var(--accent-magenta-soft)'}}>transferable metrics</span>.
            </p>
          </div>
        </div> 
      </div>
      </div>

      <div className="section-container">
      <h1 className="section-title from-bottom" style={{marginTop: '5rem'}}><FontAwesomeIcon icon={faRoute}></FontAwesomeIcon> Research Roadmap</h1>
        <p className="section-text from-bottom">
          The goal of this research is to <span style={{color: 'var(--accent-sage)'}}>define the line between helpful AI augmentation and harmful displacement of human choice</span> in decision-making. Click through sections below to explore the methodology:
        </p>

      <ResearchTimeline />  
      </div>
    </section>
  );
}
