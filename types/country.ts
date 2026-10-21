// Data structure returned by REST Countries API
export type Country = {
  names: {
    common: string;
  };
  codes: {
    alpha_2: string;
  };
  flag: {
    emoji: string;
  };
  region: string;
};

// Extra information for a country details page
export type CountryDetails = Country & {
  capitals?: {
    name: string;
  }[];
  population?: number;
  subregion?: string;
  timezones?: string[];
};
