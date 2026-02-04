import styles from "../page.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBrain, faComments, faPuzzlePiece, faCalendarCheck, faSeedling } from "@fortawesome/free-solid-svg-icons";

import ActionButton from "../components/ActionButton";

export default function TakeAction() {
  return (
    <section id="take-action" className="section action-section">
      <div className="section-container">
        <h1 className="section-title from-bottom">Be Part of the Solution</h1>
        <p className="section-text from-bottom" style={{marginBottom: '0'}}>
          <span style={{ color: "var(--accent-sage)" }}>Many ways to get involved!</span>
        </p>
        <div className={styles.verticalGrid} style={{ gridTemplateRows: 'auto auto', gap: '0' }}>
          <div className={styles.horizontalGrid} style={{ gridTemplateColumns: '1fr 1fr 1fr' , marginBottom: '0'  }}>
            <div className={styles.actionItem}>
              <div className={styles.actionIcon}>
                <FontAwesomeIcon icon={faBrain} />
              </div>
              <h2 className={styles.actionTitle}><span className={styles.titleIcon}></span>Join the Effort</h2>
              <p className={styles.actionText}>
                SAD Labs is growing! Contribute your skills to research, ops, or outreach at SAD Labs.</p>
              <div className={styles.centerBtn}>
                <ActionButton href="https://airtable.com/appGoEa2TUeXbwDRO/pagCC47tkGZm2EHHy/form">
                  Express Interest
                </ActionButton>
              </div>
              <p style={{fontSize: '0.7rem', marginTop: '1rem'}}>If you have background in <b>LLM evals, game theory, HCI and/or outreach-relevant skills</b>, we'll be particularly excited to hear from you!</p>
            </div>

            <div className={styles.actionItem}>
              <div className={styles.actionIcon}>
                <FontAwesomeIcon icon={faComments} />
              </div>
              <h2 className={styles.actionTitle}>Guide the Agenda</h2>
              <p className={styles.actionText}>Help ground our work by sharing how AI supports—or undermines—decisions in your field.</p>

              <div className={styles.centerBtn}>
                  <ActionButton href="https://airtable.com/appGoEa2TUeXbwDRO/pagNavvL8j9EzjzEX/form">
                    Share Your XP
                  </ActionButton>
              </div>
            </div>

            <div className={styles.actionItem}>
              <div className={styles.actionIcon}>
                <FontAwesomeIcon icon={faCalendarCheck} />
              </div>
              <h2 className={styles.actionTitle}>Join the Next Infosession</h2>
              <p className={styles.actionText}>
                Sign up for the next online infosession to learn more about SAD Labs and get any of your questions answered!
              </p>

              <div className={styles.centerBtn}>
                  <ActionButton href="https://airtable.com/appGoEa2TUeXbwDRO/pagUZLqcAZhWoqQOh/form">
                    Sign Up Here
                  </ActionButton>
              </div>

              <p style={{fontSize: '0.7rem', marginTop: '1rem'}}>Next session coming: <span style={{color: 'var(--accent-sage)'}}>11 Feb 2026</span>!</p>
            </div>
          </div>  

          <div className={styles.horizontalGrid} style={{ gridTemplateColumns: '0.5fr 1fr 1fr 0.5fr', marginBottom: '0' }}>
            <span></span>
            
            <div className={styles.actionItem}>
              <div className={styles.actionIcon}>
                <FontAwesomeIcon icon={faPuzzlePiece} />
              </div>
              <h2 className={styles.actionTitle}>Work on Helpful Questions</h2>
              <p className={styles.actionText}>Investigate ready-to-research open questions from SAD question bank.</p>

              <div className={styles.centerBtn}>
                  <ActionButton href="https://airtable.com/appGoEa2TUeXbwDRO/shrBefuusGierQcgi">
                    View Question Bank
                  </ActionButton>
              </div>
            </div>

            <div className={styles.actionItem}>
              <div className={styles.actionIcon}>
                <FontAwesomeIcon icon={faSeedling} />
              </div>
              <h2 className={styles.actionTitle}>Support our Work</h2>
              <p className={styles.actionText}>Contribute time, expertise, or resources to advance SAD research. Book a short call to explore collaboration.</p>

              <div className={styles.centerBtn}>
                  <ActionButton href="https://calendly.com/nowemoore/1-on-1">
                    Book 1-on-1
                  </ActionButton>
              </div>
            </div>
          </div>      
        </div>   
        <span></span>
       <p style={{ marginTop: '1rem', marginLeft: 'auto', marginRight: '0', width: 'fit-content', textAlign: 'right' }}>
          If this sparked something or you want to explore working together, please reach out to{' '}
          <a href="mailto:nowe.moore@gmail.com" style={{ color: "var(--accent-forest)" }}>
            nowe.moore@gmail.com
          </a>.
        </p>
      </div>
    </section>
  );
}
