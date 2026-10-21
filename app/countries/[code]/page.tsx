import Link from "next/link";
import { notFound } from "next/navigation";
import { getCountryByCode } from "../../../lib/api";
import styles from "./details.module.css";

type CountryDetailsPageProps = {
  params: Promise<{
    code: string;
  }>;
};

// Show information about the selected country
export default async function CountryDetailsPage({
  params,
}: CountryDetailsPageProps) {
  const { code } = await params;

  // Country codes contain two letters
  if (!/^[a-z]{2}$/i.test(code)) {
    notFound();
  }

  const country = await getCountryByCode(code);

  if (!country) {
    notFound();
  }

  return (
    <section className={styles.details}>
      <Link href="/countries" className={styles.backLink}>
        ← Back to countries
      </Link>

      <div className={styles.flag} aria-hidden="true">
        {country.flag?.emoji || "🌍"}
      </div>

      <h1>{country.names.common}</h1>

      <div className={styles.info}>
        <p>
          <strong>Region:</strong> {country.region || "Not available"}
        </p>

        <p>
          <strong>Subregion:</strong> {country.subregion || "Not available"}
        </p>

        <p>
          <strong>Capital:</strong>{" "}
          {country.capitals?.map((capital) => capital.name).join(", ") ||
            "Not available"}
        </p>

        <p>
          <strong>Population:</strong>{" "}
          {country.population?.toLocaleString("en-US") || "Not available"}
        </p>

        <p>
          <strong>Time zones:</strong>{" "}
          {country.timezones?.join(", ") || "Not available"}
        </p>
      </div>
    </section>
  );
}
