"use client";

import styles from "./components.module.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLocationDot} from '@fortawesome/free-solid-svg-icons';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <span className={styles.left}>
          SAD Labs © 2026 
        </span>

        <span className={styles.right}>
          <FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon>Based in London, UK
        </span>
      </div>
    </footer>
  );
}