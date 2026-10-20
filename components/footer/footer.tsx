import styles from "./footer.module.css";

// Footer shown on every page
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>Explore Countries</p>
      <p>Created as a student project.</p>
    </footer>
  );
}
