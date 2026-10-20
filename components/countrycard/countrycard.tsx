import Link from "next/link";
import type { Country } from "../../types/country";
import styles from "./countrycard.module.css";

type CountryCardProps = {
  country: Country;
};

// Display information about one country
export default function CountryCard({ country }: CountryCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.flag} aria-hidden="true">
        {country.flag?.emoji || "🌍"}
      </div>

      <h2>{country.names.common}</h2>

      <p>Region: {country.region}</p>

      <Link href={`/countries/${country.codes.alpha_2}`}>View details →</Link>
    </article>
  );
}
