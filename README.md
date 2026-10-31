# Explore Countries

Explore Countries is a website where users can discover countries and territories around the world.

The website is made for people who want to learn basic information about different countries in a simple way.

## Features

- View a list of countries and territories.
- Search for countries by name.
- Load more countries with the "Show more" button.
- Open a details page for a country.
- See information such as region, capital, population and time zones.
- Use the website on desktop and mobile screens.

## Technologies

This project uses:

- Next.js
- React
- TypeScript
- CSS Modules
- REST Countries API

## Installation

1. Clone the repository:

```bash
git clone https://github.com/MarynaTryus/explore-countries.git
```

2. Open the project folder:

```bash
cd explore-countries
```

3. Install dependencies:

```bash
npm install
```

4. Create a file named `.env.local` in the project folder and add:

```env
REST_COUNTRIES_API_KEY=your_api_key_here
```

You need your own API key from REST Countries. The API key is private and must not be uploaded to GitHub.

5. Start the development server:

```bash
npm run dev
```

6. Open `http://localhost:3000` in your browser.

## API

The website uses the REST Countries API:

https://restcountries.com/

The API provides information about countries and territories.

The free plan allows a maximum of 100 countries per request. To load all available countries, the website uses pagination with `limit` and `offset`.

## Known limitations

- Some countries or territories have missing information.
- Abkhazia does not have an `alpha_2` code in the API response. The website shows "Details unavailable" instead of a broken link.
- The website needs an internet connection and a valid API key to load country data.
- Country information depends on the data provided by the external API.

## Author

Created by Maryna as a school project at Gokstad Akademi.
