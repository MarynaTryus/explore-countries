import { getCountries } from "../../lib/api";
import CountryList from "../../components/countrylist/countrylist";

// Page with countries from the API
export default async function CountriesPage() {
  try {
    const countries = await getCountries();

    return (
      <section>
        <h1>Explore Countries</h1>

        <p>
          Discover countries from around the world. Select a country to learn
          more.
        </p>

        <CountryList countries={countries} />
      </section>
    );
  } catch {
    return (
      <section>
        <h1>Explore Countries</h1>
        <p>Sorry, we could not load the countries. Please try again later.</p>
      </section>
    );
  }
}
