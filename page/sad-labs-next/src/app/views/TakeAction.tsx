import styles from "../page.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBrain, faComments, faPuzzlePiece, faCalendarCheck, faSeedling } from "@fortawesome/free-solid-svg-icons";


export default function TakeAction() {
  return (
    <section id="take-action" className="section action-section">
      <div className="section-container">
        <h1 className="section-title from-bottom">Be Part of the Solution</h1>
        <p className="section-text from-bottom" style={{marginBottom: '0'}}>
          There are <span style={{ color: "var(--accent-sage)" }}>multiple ways to get involved!</span>
        </p>
        <div className={styles.verticalGrid} style={{ gridTemplateRows: 'auto auto', gap: '0' }}>
          <div className={styles.horizontalGrid} style={{ gridTemplateColumns: '1fr 1fr 1fr' , marginBottom: '0'  }}>
            <div className={styles.actionItem}>
              <div className={styles.actionIcon}>
                <FontAwesomeIcon icon={faBrain} />
              </div>
              <h2 className={styles.actionTitle}><span className={styles.titleIcon}></span>Join the Effort</h2>
              <p className={styles.actionText}>
                Contribute your skills and perspective to a growing team working on monitoring AI-assisted decision-making.
              </p>
            </div>

            <div className={styles.actionItem}>
              <div className={styles.actionIcon}>
                <FontAwesomeIcon icon={faComments} />
              </div>
              <h2 className={styles.actionTitle}>Share Your XP</h2>
              <p className={styles.actionText}>Help ground our work by sharing how AI supports—or undermines—decisions in your field.</p>
            </div>

            <div className={styles.actionItem}>
              <div className={styles.actionIcon}>
                <FontAwesomeIcon icon={faPuzzlePiece} />
              </div>
              <h2 className={styles.actionTitle}>Work on Helpful Questions</h2>
              <p className={styles.actionText}>Investigate ready-to-research questions open questions from SAD question bank that address the evolving risks of AI-assisted decision-making.</p>
            </div>
          </div>  

          <div className={styles.horizontalGrid} style={{ gridTemplateColumns: '0.5fr 1fr 1fr 0.5fr', marginBottom: '0' }}>
            <span></span>
            <div className={styles.actionItem}>
              <div className={styles.actionIcon}>
                <FontAwesomeIcon icon={faCalendarCheck} />
              </div>
              <h2 className={styles.actionTitle}>Join the Next Infosession</h2>
              <p className={styles.actionText}>
                Sign up for the next online infosession to learn more about SAD Labs and get any of your questions answered!
              </p>
            </div>

            <div className={styles.actionItem}>
              <div className={styles.actionIcon}>
                <FontAwesomeIcon icon={faSeedling} />
              </div>
              <h2 className={styles.actionTitle}>Support our Work</h2>
              <p className={styles.actionText}>Contribute resources or expertise to support SAD research on risks from AI-powered decisions and development of tools.</p>
            </div>
          </div>      
        </div>   
        <span></span>
       
      </div>
    </section>
  );
}
