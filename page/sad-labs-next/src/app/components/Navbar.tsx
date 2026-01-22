"use client";

import { useState, useEffect } from "react";
import styles from "./components.module.css";

import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCompass,
  faBullseye,
  faMagnifyingGlass,
  faRoadBarrier,
  faClock,
  faRocket} from '@fortawesome/free-solid-svg-icons';

interface NavItem {
  label: string;
  href: string;
  icon: IconDefinition;
}

const navItems: NavItem[] = [
  { label: "Objective", href: "#objective", icon: faBullseye },
  { label: "Problem", href: "#problem", icon: faRoadBarrier },
  { label: "Approach", href: "#approach", icon: faMagnifyingGlass },
  { label: "Timeline", href: "#timeline", icon: faClock },
  { label: "Take Action", href: "#take-action", icon: faRocket },
];

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
      document.body.classList.remove("light-mode");
    } else {
      document.body.classList.add("light-mode");
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const element = document.getElementById(sectionId.replace("#", ""));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        <a
          href="#hero"
          className={styles.navLogo}
          onClick={(e) => scrollToSection(e, "#hero")}
        >
          SAD 
          <span style={{ 
            filter: "drop-shadow(0 0 5px var(--accent-magenta))", 
          }}>
            <FontAwesomeIcon icon={faCompass} />
          </span>
          Labs
        </a>

        <ul className={styles.navMenu}>
          {navItems.map((item) => (
            <li key={item.href} className={styles.navItem}>
              <a
                href={item.href}
                className={styles.navLink}
                onClick={(e) => scrollToSection(e, item.href)}
              >
                <FontAwesomeIcon
                  icon={item.icon}
                  className={styles.navIcon}
                  aria-hidden="true"
                />
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div
          className={styles.themeToggle}
          onClick={() => setDarkMode(!darkMode)}
          aria-label="Toggle dark mode"
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              setDarkMode(!darkMode);
            }
          }}
        >
          <div className={`${styles.toggleTrack} ${darkMode ? styles.dark : styles.light}`}>
            <div className={styles.toggleSlider}>
              {darkMode ? "月" : "日"}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}