import Link from "next/link";
import styles from "./components.module.css";

type ActionButtonProps = {
  href: string;
  children: React.ReactNode;
};

export default function ActionButton({ href, children }: ActionButtonProps) {
  const isExternal = href.startsWith("http");

  if (isExternal) {
    return (
      <a
        className={styles.button}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={styles.button}>
      {children}
    </Link>
  );
}