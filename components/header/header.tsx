import Link from "next/link";

// Shared navigation displayed on every page
export default function Header() {
  return (
    <header>
      <nav aria-label="Main navigation">
        <Link href="/">Explore Countries 🌍</Link>

        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/countries">Countries</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
