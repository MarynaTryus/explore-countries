import type { Country } from "../types/country";

type CountriesResponse = {
  data: {
    objects: Country[];
  };
};

// Fetch a list of countries from the external API
export async function getCountries(): Promise<Country[]> {
  const apiKey = process.env.REST_COUNTRIES_API_KEY;

  if (!apiKey) {
    throw new Error("REST Countries API key is missing");
  }

  const url =
    "https://api.restcountries.com/countries/v5" +
    "?limit=100&response_fields=names.common,codes.alpha_2,flag.emoji,region";

  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${apiKey}`,
    },
    next: {
      revalidate: 3600,
    },
  });

  if (!response.ok) {
    const errorText = await response.text();

    // Show the HTTP status and API error for debugging
    throw new Error(`API error ${response.status}: ${errorText}`);
  }

  const result: CountriesResponse = await response.json();

  return result.data.objects;
}
