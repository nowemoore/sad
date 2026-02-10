"use client";

import styles from "../page.module.css";

import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog, faMagnifyingGlass, faChevronDown } from "@fortawesome/free-solid-svg-icons";

interface HeroProps {
  viewType?: "landing" | "business" | "research";
}

export default function Hero({ viewType = "landing" }: HeroProps) {
  // Landing page: Full hero with pathway selection
  if (viewType === "landing") {
    return (
      <section 
        id="hero" 
        className={`section ${styles.heroSection}`} 
        style={{
          '--section-bg-image': 'url(https://images.unsplash.com/photo-1727434032792-c7ef921ae086?q=80&w=2232&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
          '--section-overlay': 'rgba(0, 0, 0, 0.85)' 
        } as React.CSSProperties}
      >
        <div className={styles.heroContent}>
          <span className={styles.heroSubtitleTop}>
            Research & Development Labs for
          </span>

          <div className={styles.heroBreathingWrapper}>
            <h1 className={styles.heroTitle}>
              Reliable AI
            </h1>

            <h1
              className={styles.heroTitle}
              style={{
                ["--offset" as any]: "3.5rem",
              }}
            >
              in Decision-Making
            </h1>
          </div>

          <div className={styles.heroDivider} />

          <span className={styles.heroSubtitle}>
            AI makes decisions faster. RAD Labs are here to help humans make sure that{" "}
            <span style={{color: "var(--accent-magenta)"}}>efficiency</span> doesn't cost them{" "}
            <span style={{color: "var(--accent-magenta)"}}>control</span>.
          </span>

          <span className={styles.heroSubtitle} style={{ marginTop: "2rem", color: "var(--text-primary)", textAlign: 'center', fontWeight: '500' }}>
            What brings you here today?
          </span>

          <div className={styles.heroPathways}>
            <Link href="/business" className={styles.pathwayCard}>
              <FontAwesomeIcon icon={faCog} className={`${styles.pathwayIcon} ${styles.cogs}`} />
              <span>Here on Business</span>
            </Link>
            <Link href="/research" className={styles.pathwayCard}>
              <FontAwesomeIcon icon={faMagnifyingGlass} className={`${styles.pathwayIcon} ${styles.magnify}`} />
              <span>Here for Research</span>
            </Link>
          </div>
        </div>
      </section>
    );
  }

  const scrollToNext = () => {
    const targetId = viewType === 'business' ? 'problem' : 'objective'; 
    const targetSection = document.getElementById(targetId);
    
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero" 
      className={`section ${styles.heroSection}`} 
      style={{
        '--section-bg-image': 'url(https://images.unsplash.com/photo-1727434032792-c7ef921ae086?q=80&w=2232&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
        '--section-overlay': 'rgba(0, 0, 0, 0.85)' 
      } as React.CSSProperties}
    >
      <div className={styles.heroContent}>
        <span className={styles.heroSubtitleTop}>
          Research & Development Labs for
        </span>

        <div className={styles.heroBreathingWrapper}>
          <h1 className={styles.heroTitle}>
            Reliable AI
          </h1>

          <h1
            className={styles.heroTitle}
            style={{
              ["--offset" as any]: "3.5rem",
            }}
          >
            in Decision-Making
          </h1>
        </div>

        <div className={styles.heroDivider} />

        <span className={styles.heroSubtitle}>
          AI makes decisions faster. RAD Labs are here to help humans make sure that{" "}
          <span style={{color: "var(--accent-magenta-soft)"}}>efficiency</span> doesn't cost them{" "}
          <span style={{color: "var(--accent-magenta-soft)"}}>control</span>.
        </span>

        {/* Bouncing Chevron Section */}
        <div className={styles.chevronSection}>
          <div className={styles.bouncingChevron} onClick={scrollToNext}>
            <FontAwesomeIcon icon={faChevronDown} />
          </div>
          <span className={styles.chevronText}>
            {viewType === "business" 
              ? "check out what's in it for orgs" 
              : "check out the research agenda"}
          </span>
          <Link 
            href={viewType === "business" ? "/research" : "/business"}
            className={styles.switchViewLink}
          >
            or switch to{" "}
            <FontAwesomeIcon 
              icon={viewType === "business" ? faMagnifyingGlass : faCog} 
              style={{ fontSize: '0.85em' }}
            />
            {" "}{viewType === "business" ? "research" : "business"} view
          </Link>
        </div>
      </div>
    </section>
  );
}