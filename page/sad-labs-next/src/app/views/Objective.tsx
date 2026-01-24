import styles from "../page.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarsProgress, faSeedling } from "@fortawesome/free-solid-svg-icons";

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
          . The responsible way forward starts with <span style={{color: "var(--accent-magenta-soft)"}}>real-time visibility into AI influence</span>, so humanity retains the ability to course-correct before overreliance sets in. SAD builds such future by:
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
                Imagine an engine that will analyse decision-makers&apos;
                interactions with AI in real time and provide early warnings of
                overreliance{" "}
                <span style={{ color: "var(--accent-magenta-soft)" }}>
                  before
                </span>{" "}
                it scales. SAD research develops metrics to bring such
                tools to life and help organisations verify that their use of AI
                remains for the better.
              </p>
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
                In pursuit of such tools, SAD Labs continues conducting thorough
                research on human-AI interaction, particularly in high-risk
                contexts. This work will contribute to evaluations, safeguards,
                and policies that{" "}
                <span style={{ color: "var(--accent-magenta-soft)" }}>
                  preserve human agency
                </span>{" "}
                in AI-assisted decisions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
