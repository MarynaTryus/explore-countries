"use client";

import { useState } from "react";
import type { Country } from "../../types/country";
import CountryCard from "../countrycard/countrycard";
import styles from "./countrylist.module.css";

type CountryListProps = {
  countries: Country[];
};

// Display 12 countries at first, then show 12 more
export default function CountryList({ countries }: CountryListProps) {
  const [visibleCount, setVisibleCount] = useState(12);

  const visibleCountries = countries.slice(0, visibleCount);
  const hasMoreCountries = visibleCount < countries.length;

  function showMore() {
    setVisibleCount((currentCount) => currentCount + 12);
  }

  return (
    <div>
      <div className={styles.grid}>
        {visibleCountries.map((country) => (
          <CountryCard key={country.codes.alpha_2} country={country} />
        ))}
      </div>

      <p className={styles.count}>
        Showing {visibleCountries.length} of {countries.length} countries
      </p>

      {hasMoreCountries && (
        <div className={styles.buttonContainer}>
          <button
            type="button"
            className={styles.showMoreButton}
            onClick={showMore}
          >
            Show more
          </button>
        </div>
      )}
    </div>
  );
}
