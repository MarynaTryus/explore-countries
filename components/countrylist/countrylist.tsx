"use client";

import { useState } from "react";
import type { Country } from "../../types/country";
import CountryCard from "../countrycard/countrycard";
import styles from "./countrylist.module.css";

type CountryListProps = {
  countries: Country[];
};

// Display countries with search and Show more
export default function CountryList({ countries }: CountryListProps) {
  const [search, setSearch] = useState("");
  const [visibleCount, setVisibleCount] = useState(12);

  // Filter countries by name
  const filteredCountries = countries.filter((country) =>
    country.names.common.toLowerCase().includes(search.toLowerCase().trim())
  );

  // Show only the selected number of countries
  const visibleCountries = filteredCountries.slice(0, visibleCount);

  const hasMoreCountries = visibleCount < filteredCountries.length;

  function showMore() {
    setVisibleCount((currentCount) => currentCount + 12);
  }

  function handleSearch(value: string) {
    setSearch(value);
    setVisibleCount(12);
  }

  return (
    <div>
      <div className={styles.searchContainer}>
        <label htmlFor="country-search">Search countries</label>

        <input
          id="country-search"
          type="search"
          placeholder="Enter a country name..."
          value={search}
          onChange={(event) => handleSearch(event.target.value)}
          className={styles.searchInput}
        />
      </div>

      <p className={styles.searchInfo}>
        Search among {countries.length} available countries and territories.
      </p>

      {filteredCountries.length === 0 ? (
        <p className={styles.noResults}>
          No countries found. Try another name.
        </p>
      ) : (
        <>
          <div className={styles.grid}>
            {visibleCountries.map((country) => (
              <CountryCard key={country.codes.alpha_2} country={country} />
            ))}
          </div>

          <p className={styles.count}>
            Showing {visibleCountries.length} of {filteredCountries.length}{" "}
            countries
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
        </>
      )}
    </div>
  );
}
