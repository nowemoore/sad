import styles from "./views.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBrain,
  faComments,
  faPuzzlePiece,
  faCalendarCheck,
  faSeedling,
  faRocket,
} from "@fortawesome/free-solid-svg-icons";

import ActionButton from "../../components/ActionButton";

const actions = [
  {
    icon: faBrain,
    title: "Join the Effort",
    description: (
      <>
       If you have a background in <span style={{color: 'var(--accent-magenta-soft)'}}>LLM evaluations</span>, <span style={{color: 'var(--accent-magenta-soft)'}}>Game Theory</span>, can think rigorously about <span style={{color: 'var(--accent-magenta-soft)'}}>human-AI interaction</span>, and/or have the skills to <span style={{color: 'var(--accent-sage)'}}>scale teams</span> and <span style={{color: 'var(--accent-sage)'}}>raise support</span>, you'd be a great fit.
      </>
    ),
    cta: "Express Interest",
    href: "https://airtable.com/appGoEa2TUeXbwDRO/pagCC47tkGZm2EHHy/form",
    highlight: true,
  },
  {
    icon: faSeedling,
    title: "Support the Work",
    description: (
      <>Believe in the cause but can't commit? You can make a huge difference by offering <span style={{color: 'var(--accent-sage)'}}>expertise</span>, <span style={{color: 'var(--accent-sage)'}}>connections</span>, <span style={{color: 'var(--accent-sage)'}}>funding</span>, or simply time to help build momentum. Let's talk.</>
    ),
    cta: "Book 1-on-1",
    href: "https://calendly.com/nowemoore/1-on-1",
    highlight: true,
  },
  {
    icon: faCalendarCheck,
    title: "Join the Next Infosession",
    description: (
      <>
        New here? Join an infosession to hear what's being built, why it matters, and whether there's a role for you. <br></br> <span style={{color: 'var(--accent-magenta)'}}>Next session: 11 Feb 2026.</span>
      </>
    ),
    cta: "Sign Up",
    href: "https://airtable.com/appGoEa2TUeXbwDRO/pagUZLqcAZhWoqQOh/form",
    highlight: true,
  },
  {
    icon: faComments,
    title: "Guide the Agenda",
    description: (
      <>If you use AI tools in your work, you know which problems are real and which are hype. Help ground RAD research by sharing how AI contributes to&mdash;and undermines&mdash;decisions in your field. </>
    ),
    cta: "Tell Your Story",
    href: "https://airtable.com/appGoEa2TUeXbwDRO/pagNavvL8j9EzjzEX/form",
  },
  {
    icon: faPuzzlePiece,
    title: "Work on Open Questions",
    description: (
      <>Looking for a meaningful side project? If you've got research skills and some time, check out this bank full of ready-to-research open questions relevant to RAD objectives.</>
    ),
    cta: "View Questions",
    href: "https://airtable.com/appGoEa2TUeXbwDRO/shrBefuusGierQcgi",
  }
];

export default function TakeAction() {
  return (
    <section 
      id="take-action" 
      className="section action-section"
      >
      <div className="section-container">
        <h1 className="section-title from-bottom"><FontAwesomeIcon icon={faRocket}></FontAwesomeIcon> Be Part of the Story</h1>
        <p
          className="section-text from-bottom"
          style={{ marginBottom: "2rem" }}
        >
          <span style={{ color: "var(--accent-sage)" }}>
            Many ways to get involved!
          </span>
        </p>

       <div className={styles.actionList}>
        {actions.map((action, index) => (
          <div
            key={index}
            className={`${styles.horizontalGrid} ${action.highlight ? styles.actionRowHighlight : ""}`}
            style={{ 
              gridTemplateColumns: '0.75fr 2.25fr 0.75fr', 
              marginBottom: 0, 
              gap: '1.5rem', 
              alignItems: 'center',
              padding: '1rem 1.25rem',
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(255, 255, 255, 0.06)',
              borderRadius: '8px'
            }}
          >
            {/* Icon + Title stacked */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
              <div className={styles.actionRowIcon}>
                <FontAwesomeIcon icon={action.icon} />
              </div>
              <h3 className={styles.actionRowTitle} style={{ margin: 0, textAlign: 'center' }}>
                {action.title}
              </h3>
            </div>

            {/* Description */}
            <p className={styles.actionRowDescription} style={{ margin: 0 }}>
              {action.description}
            </p>

            {/* Button */}
            <div style={{ width: '100%', display: 'flex' }}>
              <ActionButton href={action.href}>{action.cta}</ActionButton>
            </div>
          </div>
        ))}
      </div>

        <p
  style={{
    marginTop: "2rem",
    marginLeft: "auto",
    maxWidth: "500px",
    textAlign: "right",
    fontSize: "0.9rem",
    opacity: 0.8,
  }}
>
  If this sparked something or you want to explore working together, please reach out to{" "}
  <a
    href="mailto:nowe.moore@gmail.com"
    style={{ color: "var(--accent-forest)" }}
  >
    nowe.moore@gmail.com
  </a>.
</p>
      </div>
    </section>
  );
}