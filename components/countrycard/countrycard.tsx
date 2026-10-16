import Link from "next/link";
import type { Country } from "@/types/country";

type CountryCardProps = {
  country: Country;
};

// Reusable card for one country
export default function CountryCard({ country }: CountryCardProps) {
  return (
    <article className="country-card">
      <div className="country-flag" aria-hidden="true">
        {country.flag.emoji}
      </div>

      <h2>{country.names.common}</h2>

      <p>Region: {country.region}</p>

      <Link href={`/countries/${country.codes.alpha_2}`}>View details →</Link>
    </article>
  );
}
