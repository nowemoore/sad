"use client";

import { useState, useEffect } from "react";
import styles from "./components.module.css";
import Link from "next/link"; 

import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCompass,
  faBars,
  faXmark,
  faCog,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

interface NavItem {
  label: string;
  href: string;
  icon: IconDefinition;
}

interface NavbarProps {
  items: NavItem[];
  viewType?: "business" | "research"; 
}

export default function Navbar({ items, viewType }: NavbarProps) {
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
        <div className={styles.logoGroup}>
          <Link
            href="/"  
            className={styles.navLogo}
          >
            RAD
            <span style={{ filter: "drop-shadow(0 0 5px var(--accent-magenta))" }}>
              <FontAwesomeIcon icon={faCompass} />
            </span>
            Labs
          </Link>

          {viewType && (
            <div className={styles.viewIndicatorWrapper}>
              <div className={styles.viewIndicator}>
                <FontAwesomeIcon 
                  icon={viewType === "business" ? faCog : faMagnifyingGlass} 
                  className={styles.viewIcon}
                />
                <span className={styles.viewLabel}>
                  {viewType === "business" ? "Business" : "Research"} View
                </span>
              </div>
              <Link 
                href={viewType === "business" ? "/research" : "/business"}
                className={styles.switchViewLink}
              >
                change to{" "}
                <span style={{ color: 'var(--accent-sage)' }}>
                  <FontAwesomeIcon 
                    icon={viewType === "business" ? faMagnifyingGlass : faCog}
                    style={{ fontSize: '0.9em' }}
                  />
                </span>
                {" "}{viewType === "business" ? "research" : "business"}
              </Link>
            </div>
          )}
        </div>

        {/* Desktop menu */}
        <ul className={styles.navMenu}>
          {items.map((item, index) => (
              <li 
                key={item.href} 
                className={styles.navItem}
                style={{ animationDelay: `${index * 75}ms` }}
              >
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

        {/* Desktop toggle */}
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
          {items.map((item) => (
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