"use client";

import { useState, useEffect } from "react";
import styles from "./components.module.css";

import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCompass,
  faBullseye,
  faMagnifyingGlass,
  faRoadBarrier,
  faClock,
  faRocket,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

interface NavItem {
  label: string;
  href: string;
  icon: IconDefinition;
}

const navItems: NavItem[] = [
  { label: "Objective", href: "#objective", icon: faBullseye },
  { label: "Approach", href: "#approach", icon: faMagnifyingGlass },
  { label: "Problem", href: "#problem", icon: faRoadBarrier },
  { label: "Timeline", href: "#timeline", icon: faClock },
  { label: "Take Action", href: "#take-action", icon: faRocket },
];

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
      document.body.classList.remove("light-mode");
    } else {
      document.body.classList.add("light-mode");
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  // lock scroll when menu is open (mobile)
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // close on Escape
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionHref: string
  ) => {
    e.preventDefault();
    const id = sectionHref.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
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
          <span style={{ filter: "drop-shadow(0 0 5px var(--accent-magenta))" }}>
            <FontAwesomeIcon icon={faCompass} />
          </span>
          Labs
        </a>

        {/* Desktop menu */}
        <ul className={styles.navMenu}>
          {navItems.map((item) => (
            <li key={item.href} className={styles.navItem}>
              <a
                href={item.href}
                className={styles.navLink}
                onClick={(e) => scrollToSection(e, item.href)}
              >
                <FontAwesomeIcon icon={item.icon} className={styles.navIcon} />
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop toggle (hidden on mobile via CSS) */}
        <div
          className={styles.themeToggle}
          onClick={() => setDarkMode(!darkMode)}
          aria-label="Toggle dark mode"
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") setDarkMode(!darkMode);
          }}
        >
          <div className={`${styles.toggleTrack} ${darkMode ? styles.dark : styles.light}`}>
            <div className={styles.toggleSlider}>{darkMode ? "月" : "日"}</div>
          </div>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          className={styles.hamburger}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <FontAwesomeIcon icon={menuOpen ? faXmark : faBars} />
        </button>
      </div>

      {/* Mobile overlay + panel */}
      <div
        className={`${styles.mobileOverlay} ${menuOpen ? styles.open : ""}`}
        onClick={() => setMenuOpen(false)}
      />

      <div className={`${styles.mobilePanel} ${menuOpen ? styles.open : ""}`}>
        <div className={styles.mobileHeader}>
          <span className={styles.mobileTitle}>Menu</span>

          {/* Move theme toggle into panel on mobile */}
          <div
            className={styles.mobileToggle}
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle dark mode"
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") setDarkMode(!darkMode);
            }}
          >
            <div className={`${styles.toggleTrack} ${darkMode ? styles.dark : styles.light}`}>
              <div className={styles.toggleSlider}>{darkMode ? "月" : "日"}</div>
            </div>
          </div>
        </div>

        <ul className={styles.mobileMenu}>
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className={styles.mobileLink}
                onClick={(e) => scrollToSection(e, item.href)}
              >
                <FontAwesomeIcon icon={item.icon} className={styles.mobileIcon} />
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
