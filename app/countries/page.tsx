import { getCountries } from "@/lib/api";
import CountryCard from "@/components/countrycard/countrycard";
import type { Country } from "@/types/country";

// Display countries from the API
export default async function CountriesPage() {
  let countries: Country[];

  try {
    countries = await getCountries();
  } catch (error) {
    console.error("Failed to load countries:", error);

    return (
      <section>
        <h1>Explore Countries</h1>
        <p>Sorry, we could not load the countries. Please try again later.</p>
      </section>
    );
  }

  return (
    <section>
      <h1>Explore Countries 🌍</h1>

      <p>
        Discover countries around the world. Here are some countries to start
        exploring.
      </p>

      <div className="countries-grid">
        {countries.map((country) => (
          <CountryCard key={country.codes.alpha_2} country={country} />
        ))}
      </div>
    </section>
  );
}
