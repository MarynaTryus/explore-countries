# Refleksjonsnotat – Explore Countries

I dette prosjektet har jeg laget nettstedet Explore Countries med Next.js, React og TypeScript. Målet mitt var å lage en enkel nettside hvor brukere kan utforske land og territorier og finne informasjon om dem. Jeg ønsket at nettsiden skulle være oversiktlig og enkel å bruke, både på datamaskin og mobil.

## Valg jeg tok

Jeg valgte å dele nettsiden inn i flere komponenter, som Header, Footer, Countrycard og Countrylist. Dette gjorde det lettere å organisere koden og bruke komponenter flere steder. Jeg brukte CSS Modules for å holde stilene til de forskjellige komponentene adskilt.

Jeg laget også dynamiske sider for hvert land. Ved å bruke landkoden i URL-en, for eksempel `/countries/NO`, kan brukeren åpne en detaljside med mer informasjon om landet.

For søkefunksjonen brukte jeg `useState` og `filter()`. Dette gjør at listen oppdateres når brukeren skriver inn et landenavn.

## Utfordringer og løsninger

En utfordring var at REST Countries API bare tillater 100 land per forespørsel på gratisplanen. Først fungerte søket derfor bare blant de første 100 landene. For eksempel kunne jeg åpne detaljsiden til Norge, men jeg kunne ikke finne Norge i søket.

Jeg leste API-dokumentasjonen og fant ut at jeg kunne bruke `limit` og `offset` for å hente flere sider med data. Jeg endret funksjonen slik at den henter alle sidene og samler resultatene i én liste. Etter dette kunne jeg søke blant 254 land og territorier.

Jeg oppdaget også at Abkhazia mangler landkode (`alpha_2`) i API-dataene. Siden detaljsidene mine bruker denne koden i URL-en, fungerte ikke lenken. Jeg løste dette ved å sjekke om landkoden finnes. Hvis den mangler, viser nettsiden teksten «Details unavailable» i stedet for en lenke som ikke fungerer.

## Hva jeg har lært

Jeg har lært mer om hvordan React og Next.js fungerer sammen. Jeg har fått bedre forståelse av komponenter, props, `useState`, TypeScript og dynamiske ruter. Jeg har også lært hvordan man henter data fra et API, og hvorfor det er viktig å håndtere manglende informasjon og feil.

Det var noen ganger vanskelig å forstå hvordan alle delene av prosjektet henger sammen, men ved å jobbe steg for steg fikk jeg bedre oversikt.

## Hva jeg ville forbedret

Hvis jeg hadde hatt mer tid, ville jeg lagt til flere filtre, for eksempel etter region. Jeg ville også forbedret feilmeldingene og jobbet mer med designet.

Dette prosjektet har gitt meg mer erfaring med å bygge en nettside fra start til slutt. Jeg har også lært hvor viktig det er å teste funksjonene og lese dokumentasjonen når noe ikke fungerer.
