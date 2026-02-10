import sharedStyles from "../../page.module.css";
import styles from "./views.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarsProgress, faHouseCrack, faArrowsTurnToDots, faLightbulb } from "@fortawesome/free-solid-svg-icons";

import ActionButton from "../../components/ActionButton";

export default function Objective() {
  return (
    <section id="objective" className="section objective-section" style={{ paddingBottom: 0 }}>
      <div className="section-container">

        {/* title */}
        <h1
          className="section-title from-bottom staggerItem"
          style={{ animationDelay: "0ms" }}
        >
          <FontAwesomeIcon icon={faLightbulb}></FontAwesomeIcon> Act where it counts
        </h1>

        {/* intro text */}
        <p
          className="section-text from-bottom staggerItem"
          style={{ animationDelay: "75ms" }}
        >
          RAD Labs are here to develop a <span style={{color: "var(--accent-sage)"}}>research-backed monitoring engine</span> that identifies which decisions carry real risk, so you can focus resources where they matter. No more blanket precautions, instead you get:
        </p>

        {/* objective items */}
        <div className={styles.featureGrid}>
          <div className={styles.featureItem}>
            <div className={styles.featureIcon}>
              <FontAwesomeIcon icon={faBarsProgress} />
            </div>
            <h2 className={styles.featureTitle}>
              Quantified Risk Assessment
            </h2>
            <p className={styles.featureText}>
              Most organizations know AI creates risk but can't quantify it. RAD monitoring engine puts <span style={{color: "var(--accent-teal)"}}>actual numbers</span> on exposure levels for critical decisions.
            </p>
          </div>

          <div className={styles.featureItem}>
            <div className={styles.featureIcon}>
              <FontAwesomeIcon icon={faHouseCrack} />
            </div>
            <h2 className={styles.featureTitle}>
              Failure Point Diagnostics
            </h2>
            <p className={styles.featureText}>
              Generic monitoring tells you what went wrong. RAD diagnostics tell you <span style={{color: "var(--accent-teal)"}}>why</span>&mdash;be it model limitations, human behavior, or contextual factors.
            </p>
          </div>

          <div className={styles.featureItem}>
            <div className={styles.featureIcon}>
              <FontAwesomeIcon icon={faArrowsTurnToDots} />
            </div>
            <h2 className={styles.featureTitle}>
              Actionable Mitigation Strategy
            </h2>
            <p className={styles.featureText}>
              Productive organisations need advice that does not waste their time. Get <span style={{color: "var(--accent-teal)"}}>deployment-ready</span> guidance: what to address first, how to address it, and what risk reduction to expect.
            </p>
          </div>
        </div>
      </div>

      <div className={styles.ctaSection}>
        <div className={styles.objectiveCTAs}>
          <ActionButton href="/contact">
            Schedule Consultation
          </ActionButton>
          <ActionButton href="/demo">
            Sign Up for Pilot
          </ActionButton>
        </div>
      </div>
    </section>
  );
}