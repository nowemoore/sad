import styles from "../page.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarsProgress, faSeedling, faChevronCircleRight } from "@fortawesome/free-solid-svg-icons";

import ActionButton from "../components/ActionButton";

export default function Objective() {
  return (
    <section id="objective" className="section objective-section">
      <div className="section-container">

        {/* title */}
        <h1
          className="section-title from-bottom staggerItem"
          style={{ animationDelay: "0ms" }}
        >
          Objectives
        </h1>

        {/* intro text */}
        <p
          className="section-text from-bottom staggerItem"
          style={{ animationDelay: "75ms" }}
        >
          AI is shaping decisions across society {" "}
          <span style={{ color: "var(--accent-sage)" }}>
            quietly
          </span>
          {" "} and {" "}
          <span style={{ color: "var(--accent-sage)" }}>
            at scale
          </span>
          . The responsible way forward starts with <span style={{color: "var(--accent-magenta-soft)"}}>real-time visibility into AI influence</span>, so humanity retains the ability to course-correct before overreliance sets in. Let's build such future by:
        </p>

        {/* objective list */}
        <div
          className={`${styles.horizontalGrid} staggerItem`}
          style={{
            gridTemplateColumns: "1fr 1fr",
            animationDelay: "150ms",
          }}
        >
          {/* left column */}
          <div
            className={styles.verticalGrid}
            style={{ gridTemplateRows: "2fr 1fr" }}
          >
            <div
              className={`${styles.card} staggerItem`}
              style={{ animationDelay: "225ms" }}
            >
              <h2 className={styles.cardTitle}>
                <span className={styles.titleIcon}>
                  <FontAwesomeIcon icon={faBarsProgress} />
                </span>
                Developing Monitoring Tools
              </h2>

              <p className={styles.cardText}>
                SAD develops metrics to power <span style={{color: 'var(--accent-magenta)'}}>real-time monitoring engines</span>, giving organisations early visibility into their exposure to AI risk before loss of control scales. Actionable insights keep organisations ahead.
              </p>

              <ActionButton href="/external/demo">
              Show me Mock
                <span className={styles.titleIcon} style={{color: 'var(--accent-magenta-soft)'}}>
                  <FontAwesomeIcon icon={faChevronCircleRight} />
                </span> 
              </ActionButton>
              
            </div>

            {/* spacer */}
            <span />
          </div>

          {/* right column */}
          <div
            className={styles.verticalGrid}
            style={{ gridTemplateRows: "1fr 2fr" }}
          >
            {/* spacer */}
            <span />

            <div
              className={`${styles.card} staggerItem`}
              style={{ animationDelay: "300ms" }}
            >
              <h2 className={styles.cardTitle}>
                <span className={styles.titleIcon}>
                  <FontAwesomeIcon icon={faSeedling} />
                </span>
                Contributing to Research
              </h2>

              <p className={styles.cardText}>
                Robust safeguards start with robust evidence. SAD studies high-risk interactions to help organisations preserve agency where it matters most, contributing to knowledge in <span style={{color: 'var(--accent-teal)'}}>AI evaluation, safeguards, and governance</span> on the way.
              </p>

              <ActionButton href="/external/agenda">
              Show me Roadmap
                <span className={styles.titleIcon} style={{color: 'var(--accent-magenta-soft)'}}>
                  <FontAwesomeIcon icon={faChevronCircleRight} />
                </span> 
              </ActionButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
