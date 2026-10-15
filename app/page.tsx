import Link from "next/link";

// Homepage introducing the website
export default function HomePage() {
  return (
    <section>
      <h1>Explore the World 🌍</h1>

      <p>
        Welcome to Explore Countries! Discover interesting information about
        countries around the world.
      </p>

      <p>
        Whether you are planning a trip or simply curious, this website helps
        you explore different places.
      </p>

      <Link href="/countries">Explore Countries →</Link>
    </section>
  );
}
