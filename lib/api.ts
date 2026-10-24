import type { Country, CountryDetails } from "../types/country";

type CountriesResponse = {
  data: {
    objects: Country[];
  };
};

// Fetch all countries from the API
export async function getCountries(): Promise<Country[]> {
  const apiKey = process.env.REST_COUNTRIES_API_KEY;

  if (!apiKey) {
    throw new Error("REST Countries API key is missing");
  }

  const allCountries: Country[] = [];
  const limit = 100;
  let offset = 0;

  while (true) {
    const url =
      "https://api.restcountries.com/countries/v5" +
      `?limit=${limit}&offset=${offset}` +
      "&response_fields=names.common,codes.alpha_2,flag.emoji,region";

    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
      next: {
        revalidate: 3600,
      },
    });

    if (!response.ok) {
      throw new Error(`API error ${response.status}`);
    }

    const result: CountriesResponse = await response.json();
    const countries = result.data.objects;

    allCountries.push(...countries);

    // Stop when the last page is reached
    if (countries.length < limit) {
      break;
    }

    // Move to the next page
    offset += limit;
  }

  return allCountries;
}

// Fetch one country by its two-letter code
export async function getCountryByCode(
  code: string
): Promise<CountryDetails | null> {
  const apiKey = process.env.REST_COUNTRIES_API_KEY;

  if (!apiKey) {
    throw new Error("REST Countries API key is missing");
  }

  const url =
    "https://api.restcountries.com/countries/v5/codes.alpha_2/" +
    encodeURIComponent(code) +
    "?response_fields=names.common,codes.alpha_2,flag.emoji,region,subregion,capitals,population,timezones";

  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${apiKey}`,
    },
    next: {
      revalidate: 3600,
    },
  });

  if (!response.ok) {
    // A missing country should show the 404 page
    if (response.status === 404) {
      return null;
    }

    throw new Error(`API error ${response.status}`);
  }

  const result: {
    data: {
      objects: CountryDetails[];
    };
  } = await response.json();

  return result.data.objects[0] ?? null;
}
