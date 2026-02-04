"use client";

import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCompass } from "@fortawesome/free-solid-svg-icons";
import styles from "./components.module.css";

export default function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(true);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => {
      setIsFading(true);
    }, 1000);

    const hideTimer = setTimeout(() => {
      setIsVisible(false);
    }, 1500);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className={`${styles.loadingScreen} ${isFading ? styles.fadeOut : ""}`}>
      <div className={styles.logo}>
        <span className={styles.iconWrapper}>
          <FontAwesomeIcon icon={faCompass} />
        </span>
      </div>
    </div>
  );
}