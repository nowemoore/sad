import styles from "../page.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHatCowboy, faHourglass, faSignsPost, faLightbulb } from "@fortawesome/free-solid-svg-icons";

export default function Problem() {
  return (
    <section id="problem" className="section problem-section surface-top">
      <div className="section-container">
        <h1 className="section-title from-bottom">About the Problem</h1>
        <div className={styles.horizontalGrid} style={{ gridTemplateColumns: "2fr 2fr" }}>
          <div className={styles.verticalGrid} style={{ gridTemplateRows: "auto 10fr auto 10fr" }}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <h2 className={styles.cardTitle} style={{marginBottom: '0.75rem'}}><div className={styles.titleIcon} style={{color: "var(--text-primary)"}}><FontAwesomeIcon icon={faHatCowboy}/></div>Decision-Making Norms are Shifting</h2>
              <p><span style={{ color: "var(--accent-magenta)" }}>Ever caught yourself asking AI for recommendations on decisions you used to make on your own?</span> You're not alone. Human societies outsource judgment calls to AI at an unprecedented pace. Continuing in this direction without rigorous, actionable monitoring of AI-assisted decision-making risks catastrophic outcomes.</p>
            </div>

            <span></span>

            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <h2 className={styles.cardTitle} style={{marginBottom: '0.75rem'}}><div className={styles.titleIcon} style={{color: "var(--text-primary)"}}><FontAwesomeIcon icon={faHourglass}/></div>Risk Scales with Use</h2>
              <p>Most people who use AI at work don't verify its process, and most processes that go unverified result in errors at magnitudes current safeguards are not designed to handle. Each overlooked error puts the next decision at risk. Now imagine that decision is <span style={{ color: "var(--accent-sage)" }}>a medical diagnosis. </span><span style={{ color: "var(--accent-teal)" }}>An investment.</span> <span style={{ color: "var(--accent-forest)" }}>A military call.</span></p>
            </div>

            <span></span>
          </div>

          <div className={styles.verticalGrid} style={{ gridTemplateRows: "clamp(2rem, 8vh, 6rem) auto auto" }}>
            <span></span>

            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <h2 className={styles.cardTitle} style={{marginBottom: '0.75rem'}}><div className={styles.titleIcon} style={{color: "var(--text-primary)"}}><FontAwesomeIcon icon={faSignsPost}/></div>Headed towards Losing Influence</h2>
              <p>Beyond losing understanding of mechanisms leading to decisions that influence our lives, humanity also risks its ability to meaningfully influence outcomes and ultimately agency over our choices. <span style={{ color: "var(--accent-sage)" }}>AI does not need to be misaligned or seek power for this to happen.</span> <span style={{ color: "var(--accent-forest)" }}>It's enough for it to continue being widely implemented.</span></p>
            </div>

            <span></span>

            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <h2 className={styles.cardTitle} style={{marginBottom: '0.75rem'}}><div className={styles.titleIcon} style={{color: "var(--text-primary)"}}><FontAwesomeIcon icon={faLightbulb}/></div>Missing Metrics</h2>
              <p>In 2026, we continue being unable to put early warnings and safeguards in place because there are no robust metrics for overreliance. This makes sense&mdash;it's a complex problem. Nonetheless, humanity needs metrics to manage the risks of AI-assisted decisions. <span style={{ color: "var(--accent-magenta-soft)" }}>For that reason, SAD Labs are up for the challenge.</span></p>
            </div>
          </div>
        </div>

        

        {/* <div className={styles.horizontalGrid} style={{ gridTemplateColumns: "1fr 1fr" }}>
    

            <p className={`${styles.problemBody} from-bottom`}>
              
            </p>
          </div>
        </div> */}
      </div>
    </section>
  );
}
