import sharedStyles from "../../page.module.css";
import styles from "./views.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBrain, faPiggyBank, faComments, faScaleUnbalanced, faRoadBarrier } from "@fortawesome/free-solid-svg-icons";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons/faExclamationTriangle";

export default function Problem() {
  return (
    <section 
        id="problem" 
        className="section problem-section surface-top"
        style={{
        '--section-bg-image': 'url(https://images.unsplash.com/photo-1500577329392-f0af6d7dd827?q=80&w=3006&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
        '--section-overlay': 'rgba(0, 0, 0, 0.85)' 
      } as React.CSSProperties}>
      <div className="section-container">
        <h1 className="section-title from-bottom">
          <FontAwesomeIcon icon={faExclamationTriangle}></FontAwesomeIcon> How much risk is your organisation carrying without knowing?
        </h1>
        <p className="section-text from-bottom" style={{ marginBottom: "3rem" }}>
          Most orgs can tell how many AI tools they've deployed. Far fewer can tell how those tools are actually being used—or where their people have started relying on AI even for decisions that were never meant to be automated. This creates some critical exposures:
        </p>

        <div className={styles.exposureGrid}>
          <div className={`${styles.exposureCard} ${styles.cardUp}`}>
            <div className={styles.exposureIcon}>
              <FontAwesomeIcon icon={faPiggyBank} />
            </div>
            <h3 className={styles.exposureTitle}>Financial Exposure</h3>
            <p className={styles.exposureText}>
              Deloitte <a href="https://apnews.com/article/australia-ai-errors-deloitte-ab54858680ffc4ae6555b31c8fb987f3" target="_blank" rel="noopener noreferrer" style={{color: 'var(--accent-magenta)'}}>refunded the goverment</a> hundreds of thousands of dollars after AI-generated reports scandal.            
              iTutorGroup <a href="https://www.gtlaw.com/en/insights/2023/8/eeoc-secures-first-workplace-artificial-intelligence-settlement" target="_blank" rel="noopener noreferrer" style={{color: 'var(--accent-magenta)'}}>had to settle</a> after their AI screened out older candidates. 
              
              Similar seemingly compelling AI solutions have actually cost companies <a href="https://www.ey.com/en_nl/insights/ai/how-can-responsible-ai-bridge-the-gap-between-investment-and-impact#:~:text=The%20companies%20outperforming%20with,the%20latest%20data%20proves%20it" target="_blank" rel="noopener noreferrer" style={{color: 'var(--accent-magenta)'}}>$4.4M on average</a>. 
            </p>
          </div>

          <div className={`${styles.exposureCard} ${styles.cardDown}`}>
            <div className={styles.exposureIcon}>
              <FontAwesomeIcon icon={faComments} />
            </div>
            <h3 className={styles.exposureTitle}>Reputational Damage</h3>
            <p className={styles.exposureText}>
              The Milan Olympic Committee had the resources, the expertise, the global spotlight. Still they faced <a href="https://www.yahoo.com/entertainment/tv/articles/winter-olympics-viewers-slam-ai-214540980.html" target="_blank" rel="noopener noreferrer" style={{color: 'var(--accent-magenta)'}}>worldwide embarrassment</a> for opening the Games with AI slop. The ceremony ended. The memes didn't. People will remember.
            </p>
          </div>

           <div className={`${styles.exposureCard} ${styles.cardUp}`}>
            <div className={styles.exposureIcon}>
              <FontAwesomeIcon icon={faScaleUnbalanced} />
            </div>
            <h3 className={styles.exposureTitle}>Competitive Disadvantage</h3>
            <p className={styles.exposureText}>
              <a href="https://www.fintechweekly.com/magazine/articles/klarna-hires-customer-service-after-ai-pivot#:~:text=Klarna%20is%20hiring%20customer%20service,intelligence%20to%20handle%20user%20inquiries." target="_blank" rel="noopener noreferrer" style={{color: 'var(--accent-magenta)'}}>Swedish FinTech Klarna</a> aimed to replace 75% of their customer service agents with AI. After 22% drop in headcount, they learnt that AI wasn't meeting their standards and had to rehire more support stuff, which took additional time and cost them the very efficiency they were chasing.
            </p>
          </div>

          <div className={`${styles.exposureCard} ${styles.cardDown}`}>
            <div className={styles.exposureIcon}>
              <FontAwesomeIcon icon={faBrain} />
            </div>
            <h3 className={styles.exposureTitle}>Talent Erosion</h3>
            <p className={styles.exposureText}>
              Even perfectly compliant and perfectly accurate AI can cause problems by leading people to stop developing their own judgement. Eventually, there may be <a href="https://arxiv.org/pdf/2501.16946" target="_blank" rel="noopener noreferrer" style={{color: 'var(--accent-magenta)'}}>no one left</a> to tell the difference between a good and a bad recommendation or to step in if something goes wrong.
            </p>
          </div>

         
        </div>
      </div>
    </section>
  );
}