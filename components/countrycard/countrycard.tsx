import Link from "next/link";
import type { Country } from "../../types/country";
import styles from "./countrycard.module.css";

type CountryCardProps = {
  country: Country;
};

export default function CountryCard({ country }: CountryCardProps) {
  const countryCode = country.codes?.alpha_2;

  return (
    <article className={styles.card}>
      <div className={styles.flag} aria-hidden="true">
        {country.flag?.emoji || "🌍"}
      </div>

      <h2>{country.names.common}</h2>

      <p>Region: {country.region || "Unknown"}</p>

      {countryCode ? (
        <Link href={`/countries/${countryCode}`}>View details →</Link>
      ) : (
        <p>Details unavailable</p>
      )}
    </article>
  );
}
