import styles from "../page.module.css";

export default function Hero() {
  return (
    <section id="hero" className={`section ${styles.heroSection}`}>
      <div className={styles.heroContent}>
        <span
          className={`${styles.heroSubtitleTop} staggerItem`}
          style={{ animationDelay: "0ms" }}
        >
          Research Initiative for
        </span>

        <div className={styles.heroBreathingWrapper}>
          <h1
            className={`${styles.heroTitle} staggerItem`}
            style={{ animationDelay: "75ms" }}
          >
            Secure
          </h1>

          <h1
            className={`${styles.heroTitle} staggerItem`}
            style={{
              animationDelay: "150ms",
              ["--offset" as any]: "3.5rem",
              color: "var(--accent-sage)",
            }}
          >
            AI-Powered
          </h1>

          <h1
            className={`${styles.heroTitle} staggerItem`}
            style={{
              animationDelay: "225ms",
              ["--offset" as any]: "7rem",
              color: "var(--accent-forest)",
            }}
          >
            Decision-Making
          </h1>
        </div>

        <div
          className={`${styles.heroDivider} staggerItem`}
          style={{ animationDelay: "300ms" }}
        />

        <span
          className={`${styles.heroSubtitle} staggerItem`}
          style={{ animationDelay: "375ms" }}
        >
          AI makes decisions{" "}
          <span style={{ color: "var(--accent-magenta)" }}>faster</span>. SAD Labs
          are here to help{" "}
          <span style={{ color: "var(--accent-magenta)" }}>humans</span> keep their seat at the table.
        </span>
      </div>
    </section>
  );
}
