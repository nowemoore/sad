import styles from "./demoComponents.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faBrain,
  faHeartPulse, 
  faTriangleExclamation, 
  faRocket 
} from "@fortawesome/free-solid-svg-icons";

type View = "home" | "exposure" | "actionables";

interface DemoHeaderProps {
  currentView: View;
  onViewChange: (view: View) => void;
}

export default function DemoHeader({ currentView, onViewChange }: DemoHeaderProps) {
  return (
    <header className={styles.header}>
      {/* Notes - top left */}
      <div className={styles.headerNotes}>
        <p>This is a mock interface to demonstrate potential functions.</p>
        <p>Final features depend heavily on SAD research outcomes and user needs.</p>
      </div>

      {/* Logo/Icon */}
      <div className={styles.logoWrapper}>
        <FontAwesomeIcon icon={faBrain} className={styles.logo} />
      </div>

      {/* Divider */}
      <div className={styles.divider} />

      {/* Navigation */}
      <nav className={styles.nav}>
        <button
          className={`${styles.navItem} ${currentView === "home" ? styles.active : ""}`}
          onClick={() => onViewChange("home")}
        >
          <FontAwesomeIcon icon={faHeartPulse} className={styles.navIcon} />
          <span>Organisation Health</span>
        </button>

        <button
          className={`${styles.navItem} ${currentView === "exposure" ? styles.active : ""}`}
          onClick={() => onViewChange("exposure")}
        >
          <FontAwesomeIcon icon={faTriangleExclamation} className={styles.navIcon} />
          <span>Disempowerment Exposure</span>
        </button>

        <button
          className={`${styles.navItem} ${currentView === "actionables" ? styles.active : ""}`}
          onClick={() => onViewChange("actionables")}
        >
          <FontAwesomeIcon icon={faRocket} className={styles.navIcon} />
          <span>Actionables</span>
        </button>
      </nav>
    </header>
  );
}