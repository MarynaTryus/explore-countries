import Link from "next/link";
import styles from "./page.module.css";

// Homepage for Explore Countries
export default function HomePage() {
  return (
    <section className={styles.home}>
      <h1>Explore the World 🌍</h1>

      <p>
        Welcome to Explore Countries, a simple travel guide where you can
        discover information about countries around the world.
      </p>

      <p>
        Whether you are planning your next trip or just curious, you can explore
        different places and learn something new.
      </p>

      <h2>What can you discover?</h2>

      <ul>
        <li>Learn about countries and their regions.</li>
        <li>Explore country flags and basic information.</li>
        <li>Find inspiration for your next adventure.</li>
      </ul>

      <Link href="/countries" className={styles.exploreButton}>
        Explore Countries →
      </Link>
    </section>
  );
}
