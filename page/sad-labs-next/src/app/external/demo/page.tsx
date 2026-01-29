"use client";

import { useState } from "react";
import styles from "./demo.module.css";

import DemoHeader from "./components/DemoHeader";
import Home from "./views/Home";
import Exposure from "./views/Exposure";
import Actionables from "./views/Actionables";

type View = "home" | "exposure" | "actionables";

export default function Demo() {
  const [currentView, setCurrentView] = useState<View>("home");

  return (
    <section id="demo" className={styles.demoSection}>
      <DemoHeader currentView={currentView} onViewChange={setCurrentView} />

      <main className={styles.main}>
        {currentView === "home" && <Home />}
        {currentView === "exposure" && <Exposure />}
        {currentView === "actionables" && <Actionables />}
      </main>

      <footer className={styles.footer}>
        <span className={styles.footerText}>SAD Labs Mock</span>
        <span className={styles.footerText}>© 2026</span>
      </footer>
    </section>
  );
}