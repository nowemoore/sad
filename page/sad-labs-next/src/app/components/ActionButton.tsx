import styles from "./components.module.css";

type ActionButtonProps = {
  href: string;
  children: React.ReactNode;
};

export default function ActionButton({ href, children }: ActionButtonProps) {
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
