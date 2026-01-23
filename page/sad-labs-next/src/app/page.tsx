"use client";

import { useEffect } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Hero from "./views/Hero";
import Objective from "./views/Objective";
import Approach from "./views/Approach";
import Problem from "./views/Problem";
import Timeline from "./views/Timeline";
import TakeAction from "./views/TakeAction";

export default function Page() {
  // IntersectionObserver for animation classes
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const visibleThreshold = 0.5;
          if (entry.intersectionRatio >= visibleThreshold) {
            entry.target.classList.add("in-view");
          } else {
            entry.target.classList.remove("in-view");
          }
        });
      },
      { threshold: [0, 0.2, 0.5, 0.8], rootMargin: "0px" }
    );

    const animatedElements = document.querySelectorAll(`
      .from-left,
      .from-right,
      .from-bottom,
      .stat-card,
      .section-title,
      .section-text,
      .about-text-container,
      .about-text-container h3,
      .about-text-container h4,
      .about-text-container p,
      .about-image-container,
      .approach-item,
      .team-card,
      .team-button-wrapper,
      .footer
    `);

    animatedElements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="App">
      <Navbar />

      <Hero />
      <Objective />
      <Problem />
      <Approach />
      <Timeline />
      <TakeAction />

      <Footer />
    </div>
  );
}